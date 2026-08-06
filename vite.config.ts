import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const DB_FILE = path.resolve(__dirname, './src/data/db.json')

/**
 * Espelha em disco o que o lowdb grava no localStorage do navegador.
 *
 * A aplicação não tem backend: em runtime os currículos vivem no localStorage.
 * Este middleware existe só no dev server e escreve o mesmo conteúdo em
 * src/data/db.json, para que uma edição feita pelo formulário vire um diff no
 * git — é assim que uma alteração local chega ao site publicado.
 *
 * `apply: 'serve'` mantém isso fora do build de produção.
 */
function dbReplicaPlugin(): Plugin {
  return {
    name: 'db-replica',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__db/replicate', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          return res.end('Method Not Allowed')
        }

        const chunks: Buffer[] = []
        req.on('data', (chunk: Buffer) => chunks.push(chunk))

        req.on('end', () => {
          try {
            const payload = JSON.parse(Buffer.concat(chunks).toString('utf8'))

            // O middleware sobrescreve um arquivo versionado do repositório,
            // então um payload malformado não pode chegar ao disco e zerar os
            // currículos.
            if (!payload || !Array.isArray(payload.profiles)) {
              res.statusCode = 400
              return res.end('payload inválido: esperado { profiles: [] }')
            }

            fs.writeFileSync(DB_FILE, JSON.stringify(payload, null, 2) + '\n')

            res.statusCode = 204
            res.end()
          } catch {
            res.statusCode = 400
            res.end('JSON inválido')
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), dbReplicaPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3004,
    watch: {
      // A réplica reescreve o db.json a cada gravação. Sem ignorá-lo aqui, o
      // HMR recarregaria a página no exato instante do salvamento, cortando a
      // navegação para o currículo recém-salvo. O seed só precisa ser relido
      // no próximo boot, não no meio da edição.
      ignored: ['**/src/data/db.json'],
    },
  }
})
