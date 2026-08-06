import type { DBSchema } from "@/typings"
import db from "./db.json"

/*
 * =============================================================================
 * SEED DO BANCO
 *
 * Os currículos moram em `db.json` e são gerenciados pelo lowdb (@/lib/lowdb).
 * Este módulo existe só para dar tipo ao JSON e servir de estado inicial: na
 * primeira visita, o conteúdo abaixo é copiado para o localStorage do
 * navegador. A partir daí, quem manda é o que foi editado pelo formulário.
 *
 * Rodando em desenvolvimento, toda gravação é replicada de volta para o
 * `db.json` em disco — então basta commitar o arquivo para publicar a mudança.
 *
 * -----------------------------------------------------------------------------
 * PENDÊNCIAS DE CONTEÚDO (herdadas da versão anterior deste arquivo, quando os
 * perfis eram código; o JSON não comporta comentários):
 *
 * pedro-suporte / pedro-dev
 *   - Academics: "Fevereiro 2025 - Dezembro 2029" — confirmar previsão de conclusão.
 *   - Certifications: "Python e Algoritmos" — confirmar o ano de conclusão.
 *   - Projects: as três entradas estão escritas mas SEM repositório publicado.
 *     Todas têm `url` vazia. Sem projetos publicados, um currículo de dev júnior
 *     sem experiência em código não passa da triagem técnica. Prioridade para o
 *     "Sistema de Inventário de TI": nasce da rotina real do Pedro e demonstra
 *     POO + banco de dados. Publicar e preencher cada `url`, ou REMOVER a
 *     entrada — projeto listado sem link é pior do que seção menor.
 *   - pedro-dev, experiência na MASTERDRIVE, último bullet ("Automatizei tarefas
 *     repetitivas com scripts em Python"): manter SOMENTE se for verdade.
 *   - pedro-dev, TechStack, "Em aprendizado": manter só o que estiver estudando
 *     de fato.
 *
 * nadson / nadson-backend / nadson-frontend
 *   - Academics: "Fevereiro 2025 - Dezembro 2029" — confirmar previsão de conclusão.
 *   - A vaga de atendente na PANIFICADORA JR (2023-2024) ficou de fora de
 *     propósito: a progressão Suporte -> Dev dentro da CATSUC LABS já sustenta
 *     o histórico.
 * =============================================================================
 */
export const SEED = db as DBSchema
