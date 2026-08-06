import { LocalStoragePreset } from "lowdb/browser"
import { SEED } from "@/data"
import type { DBSchema, ProfileData } from "@/typings"

/**
 * Única camada que conhece o lowdb. Todo acesso a currículo passa por aqui,
 * via @/services/curriculum — nenhum componente importa este módulo direto.
 *
 * O adapter é o localStorage: o projeto não tem backend, então a fonte da
 * verdade em runtime é o navegador. Trocar de armazenamento no futuro (um
 * store gerenciado, por exemplo) significa mexer só neste arquivo.
 */
const DB_KEY = "curriculum-db"

/** Rota do middleware de réplica; só existe no dev server do Vite. */
const REPLICA_ENDPOINT = "/__db/replicate"

const db = LocalStoragePreset<DBSchema>(DB_KEY, structuredClone(SEED))

/**
 * Espelha o estado atual de volta para src/data/db.json.
 *
 * Em desenvolvimento, o plugin `db-replica` (vite.config.ts) grava o arquivo em
 * disco, o que torna as edições versionáveis por git. Em produção a rota não
 * existe e a falha é ignorada de propósito — a réplica é uma conveniência de
 * desenvolvimento, nunca um requisito para salvar.
 */
function replicate(data: DBSchema) {
    if (!import.meta.env.DEV) return

    void fetch(REPLICA_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).catch(() => {
        /* dev server fora do ar: seguir em frente, o localStorage já gravou */
    })
}

/**
 * Insere perfis do seed que ainda não existem no armazenamento local.
 *
 * O LocalStoragePreset só aplica o `defaultData` quando a chave está ausente.
 * Sem esta reconciliação, um navegador que já visitou o site nunca enxergaria
 * um currículo novo adicionado ao db.json do repositório. A comparação é por
 * slug, então perfis já editados localmente jamais são sobrescritos.
 */
function syncSeed() {
    db.read()

    const known = new Set(db.data.profiles.map((profile) => profile.slug))
    const missing = SEED.profiles.filter((profile) => !known.has(profile.slug))

    if (missing.length === 0) return

    db.data.profiles.push(...structuredClone(missing))
    db.write()
}

syncSeed()

/** Lê o estado atual do banco. */
export function getDb(): DBSchema {
    db.read()
    return db.data
}

/**
 * Aplica uma alteração, persiste e replica. Todo caminho de escrita passa por
 * aqui, para que nenhum deles esqueça de disparar a réplica.
 */
export function mutate<T>(fn: (data: DBSchema) => T): T {
    db.read()

    const result = fn(db.data)

    db.write()
    replicate(db.data)

    return result
}

/** Restaura o banco para o conteúdo do db.json, descartando edições locais. */
export function resetDb(): ProfileData[] {
    return mutate((data) => {
        data.profiles = structuredClone(SEED.profiles)
        return data.profiles
    })
}

/**
 * Baixa o db.json atual. É a alternativa à réplica automática em produção, onde
 * não há dev server para gravar o arquivo: o download é colado no repositório
 * para publicar as edições.
 */
export function exportDb() {
    const blob = new Blob([JSON.stringify(getDb(), null, 2) + "\n"], {
        type: "application/json",
    })
    const url = URL.createObjectURL(blob)

    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = "db.json"
    anchor.click()

    URL.revokeObjectURL(url)
}
