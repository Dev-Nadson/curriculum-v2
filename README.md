# 📄 Curriculum v2

Gerador de currículo em React com exportação via impressão do navegador (Ctrl+P → Salvar como PDF).

## 📖 Sobre o projeto

Este projeto renderiza currículos formatados para impressão a partir de dados definidos em código. Cada perfil é declarado no arquivo `src/data/index.ts` e o currículo é composto por seções modulares e opcionais.

A ideia é simples: você define os dados, acessa no navegador e usa **Ctrl+P** (ou Cmd+P no Mac) para salvar como PDF com formatação fiel à tela.

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite 8**
- **TailwindCSS v4**
- **Lucide React** (ícones)

## 📦 Instalação e uso

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run start:dev
```

Acesse `http://localhost:3004` no navegador.

## 🖨️ Exportar como PDF

Com o currículo aberto no navegador:

1. Pressione **Ctrl+P** (Windows/Linux) ou **Cmd+P** (Mac)
2. Em "Destino", selecione **Salvar como PDF**
3. Em "Mais configurações", defina:
   - Papel: **A4**
   - Margens: **Mínimas** ou **Nenhuma**
   - Ative **"Gráficos de segundo plano"** se houver estilos de fundo
4. Clique em **Salvar**

## 🗂️ Estrutura do projeto

```
src/
├── components/
│   ├── Header.tsx          # Nome, subtítulo e links
│   ├── AboutMe.tsx         # Seção "Sobre"
│   ├── WorkExperience.tsx  # Experiência profissional
│   ├── Academic.tsx        # Formação acadêmica
│   ├── Certifications.tsx  # Certificações
│   ├── Competences.tsx     # Competências
│   ├── TechStack.tsx       # Stack tecnológica
│   └── ui/Page.tsx         # Componentes de layout base
├── data/
│   └── index.ts            # Dados dos currículos (NADSON, PEDRO, ANAJULIA...)
├── typings/
│   └── index.ts            # Interfaces TypeScript
└── App.tsx                 # Composição das seções
```

## 👤 Adicionando um novo perfil

No arquivo `src/data/index.ts`, crie um novo objeto seguindo a interface `ProfileData`:

```ts
export const MEU_PERFIL: ProfileData = {
  Header: {
    Name: "SEU NOME COMPLETO",
    Subtitle: "Seu cargo ou especialidade",
    Links: [
      { icon: Phone, text: "(XX) XXXXX-XXXX", url: "tel:+55...", link: true },
      { icon: Mail, text: "seu@email.com", url: "mailto:seu@email.com", link: true },
      { icon: Linkedin, text: "linkedin.com/in/voce", url: "https://...", link: true },
    ]
  },
  AboutMe: "Seu resumo profissional...",
  Experiences: [...],   
  Academics: [...],     
  Certifications: [...],
  Competences: {...},   
  TechStack: {...}      

  // Com todos os campos opcionais, com exceção do Header
}
```

Em seguida, importe e use no `App.tsx`:

```tsx
import { MEU_PERFIL } from "./data"
```

Cada seção é **opcional** — se o campo não estiver definido (ou for `false`), o componente correspondente não é renderizado.

## 📋 Seções disponíveis

| Seção           | Componente           | Campo nos dados      |
|-----------------|----------------------|----------------------|
| Cabeçalho       | `Header`             | `Header` (obrigatório) |
| Sobre mim       | `AboutMe`            | `AboutMe`            |
| Experiência     | `WorkExperience`     | `Experiences`        |
| Formação        | `Academic`           | `Academics`          |
| Certificações   | `Certifications`     | `Certifications`     |
| Competências    | `Competences`        | `Competences`        |
| Stack técnica   | `TechStack`          | `TechStack`          |

## 🔧 Scripts disponíveis

```bash
npm run start:dev   # Servidor de desenvolvimento (porta 3004)
npm run build       # Build para produção
npm run preview     # Preview do build
npm run lint        # Verificação de lint
```