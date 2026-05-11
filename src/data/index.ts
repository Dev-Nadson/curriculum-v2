import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";

export interface ILinkProps {
    icon: LucideIcon
    text: string
    url: string
    link?: boolean
}

export interface IExperienceProps {
    description: string[]
    enterprise?: string
    role: string
    worktype?: string
    date: string
}

export interface IAcademicProps {
    description?: string
    school: string
    date: string
    title: string
}

export interface ICompetencesProps {
    data: string[]
}

interface Data {
    Name: string
    Subtitle: string
    Links: ILinkProps[]
    AboutMe?: string
    Experiences?: IExperienceProps[]
    Academics: IAcademicProps[]
    TechStack: ICompetencesProps
}

//export const USER: Data = {
//    Nome: "PEDRO HENRIQUE DE O. DA SILVA",
//    Links: [
//        { icon: Phone, text: "(81) 989785231", url: "", link: true },
//        { icon: Mail, text: "pedrohenrique20059980@gmail.com", url: "mailto:pedrohenrique20059980@gmail.com", link: true },
//        { icon: Linkedin, text: "PedroHenriqueOSilva", url: "https://github.com/PedroHenriqueOSilva", link: true },
//        { icon: Github, text: "Pedro Henrique", url: "https://www.linkedin.com/in/pedro-henrique-7427b4261", link: true }
//    ],
//    Sobre: "Possuo com três anos de experiência em suporte técnico e atendimento ao usuário, atuando com manutenção de hardware, diagnóstico de sistemas e substituição de componentes. Em transição de carreira para a área de Desenvolvimento Web, com foco no aprendizado e aplicação de Python na resolução de problemas e no desenvolvimento de soluções. Perfil proativo, organizado e com facilidade para trabalho em equipe.",
//    Experiencias: [
//        {
//            enterprise: "MASTERDRIVE IMPORTAÇÃO",
//            date: "Janeiro 2023 - Atual",
//            role: "Auxiliar Administrativo - Suporte em TI",
//            worktype: "Presencial",
//            description: [
//                "- Gerenciei o sistema ERP da empresa, prestando suporte técnico, realizando configurações e treinando aproximadamente 20 usuários, garantindo a utilização eficiente, contínua e padronizada da plataforma.",
//                "- Executei a montagem, manutenção e reparo de mais de 30 máquinas, além da estruturação, cabeamento e organização da rede corporativa, assegurando estabilidade, desempenho e padronização da infraestrutura de TI.",
//                "- Liderei o setor de helpdesk, oferecendo suporte direto aos colaboradores em demandas de hardware, software e conectividade, reduzindo falhas operacionais e garantindo o pleno funcionamento dos recursos tecnológicos da empresa.",
//            ]
//        }
//    ],
//    CursosEFormacoes: [
//        {
//            title: "Bacharelado em Ciências da Computação",
//            school: "UNIFAVIP WYDEN",
//            date: "Fev 2025 - Atual",
//            description: "Redes de Computadores, Arquitetura de Computadores, Programação de Software em C, Estrutura de Dados, Computação em Nuvem, Git, Github"
//        },
//        {
//            title: "Programação de Software",
//            school: "UNICESUMAR",
//            date: "440 Horas - 2022",
//            description: "JavaScript, HTML, CSS"
//        },
//        {
//            title: "Python e Algortimos",
//            school: "Curso em Vídeo",
//            date: "80 Horas",
//            description: "Lógica de Programação, Programação Orientada a Objeto"
//        },
//        {
//            title: "Ensino Médio",
//            school: "SESI - JOSÉ RANULFO DA COSTA QUEIROZ",
//            date: "Fev 2025 - Atual",
//        }
//    ]
//}

export const USER: Data = {
    Name: "NADSON ALEX DA SILVA",
    Subtitle: "Desenvolvedor Fullstack | Especialista em Node.js, React e TypeScript",
    Links: [
        { icon: Phone, text: "(81) 98978-5231", url: "tel:+5581989785231", link: true },
        { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com", link: true },
        { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex", link: true },
        { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson", link: true },
        // { icon: MapPin, text: "Caruaru, PE", url: "", link: false }
    ],

    AboutMe:
        "Desenvolvedor Fullstack com 2+ anos de experiência construindo aplicações web escaláveis, especializado em Node.js, React e TypeScript. Reduzi tempo de resposta de APIs em 40% e melhorei performance de aplicações frontend em 35% através de otimizações de código e arquitetura. Graduando em Ciência da Computação (PROUNI integral) com histórico comprovado de entrega de soluções que impactam positivamente métricas de negócio e experiência do usuário.",

    Experiences: [
        {
            enterprise: "CATSUC LABS",
            date: "Maio 2026 - Atual",
            role: "Desenvolvedor Fullstack Júnior",
            worktype: "Presencial",
            description: [
                "Aumentei a velocidade de desenvolvimento em 45% ao criar biblioteca interna com 25+ componentes React reutilizáveis (Button, Input, Select, Dialog) utilizando TypeScript, Radix UI e TailwindCSS, reduzindo código duplicado em 60%",
                "Reduzi bugs de validação em 78% (de 23 para 5 por sprint) ao implementar formulários type-safe com React Hook Form + Zod, aplicando validações assíncronas e condicionais com superRefine",
                "Melhorei performance de requisições em 35% ao centralizar comunicação com APIs REST via Axios com interceptors customizados, implementando retry logic e tratamento padronizado de erros em 15+ endpoints",
                "Desenvolvi 8+ APIs REST com Node.js, Fastify e TypeScript processando 10.000+ requisições/dia, aplicando Clean Architecture e dependency injection para escalabilidade",
                "Otimizei consultas SQL complexas com Knex.js reduzindo tempo de geração de relatórios de 8s para 1.2s através de índices, JOINs otimizados e caching estratégico no PostgreSQL",
                "Reduzi tempo de setup de ambiente de desenvolvimento de 4h para 15min ao dockerizar aplicações com Docker Compose multi-stage, padronizando configurações entre 5 desenvolvedores",
                "Implementei CI/CD em servidores Linux Ubuntu aumentando frequência de deploys de 1x/semana para 3x/dia, reduzindo downtime em 85% através de automação e health checks",
                "Aumentei cobertura de testes de 12% para 67% ao implementar testes unitários e de integração com Vitest, detectando 15+ bugs críticos antes de produção"
            ]
        },

        {
            enterprise: "Empresa Confidencial",
            date: "Julho 2025 - Maio 2026",
            role: "Técnico de Suporte em TI",
            worktype: "Presencial",
            description: [
                "Reduzi falhas de conexão com banco de dados em 94% (de 52 para 3 ocorrências mensais) ao monitorar servidores Linux Ubuntu/CentOS com scripts customizados e alertas proativos",
                "Economizei 120+ horas/mês de trabalho manual ao desenvolver 5+ scripts Python com Pandas e Typer para automação de processos, incluindo geração de relatórios e processamento de dados em lote",
                "Diminuí tempo médio de resolução de incidentes críticos de 4h para 45min ao dominar diagnóstico com systemctl, journalctl, netstat e análise de logs em tempo real",
                "Melhorei performance de queries PostgreSQL em 60% ao aplicar otimizações de índices e refatoração de consultas N+1, beneficiando 8+ sistemas internos",
                "Aumentei satisfação do usuário final em 40% (NPS de 6.2 para 8.7) ao reduzir tempo de resposta de chamados de 6h para 2h através de priorização estratégica e comunicação proativa"
            ]
        },

        {
            enterprise: "PANIFICADORA JR",
            date: "Janeiro 2023 - Dezembro 2024",
            role: "Atendente",
            worktype: "Presencial",
            description: [
                "Atendi 50+ clientes/dia mantendo 95% de satisfação através de agilidade, organização e comunicação eficaz em ambiente de alta demanda",
                "Desenvolvi soft skills essenciais para ambientes tech: comunicação clara, trabalho sob pressão, resolução rápida de problemas e foco no cliente"
            ]
        }
    ],

    Academics: [
        {
            title: "Bacharelado em Ciência da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2025 - Atual",
            description:
                "Bolsista PROUNI integral. Formação focada em Algoritmos e Estruturas de Dados, Redes de Computadores, Arquitetura de Computadores, Programação em C e Engenharia de Software. Prática contínua com Git, GitHub e metodologias ágeis."
        },

        {
            title: "Certificação Fullstack - Formação Node.js e React",
            school: "Rocketseat",
            date: "2025 • 380 Horas",
            description:
                "Formação intensiva em desenvolvimento moderno: Node.js, Fastify, NestJS, TypeScript, PostgreSQL, Prisma, Knex.js, React, Next.js, TailwindCSS. Projetos práticos aplicando SOLID, Clean Architecture, testes automatizados e deploy em produção."
        },

        {
            title: "Ensino Médio Completo",
            school: "Escola de Referência em Ensino Médio de Panelas",
            date: "Fevereiro 2021 - Dezembro 2023",
            description:
                "Medalhista de Prata - Olimpíada Brasileira de Geografia (2022). Menção Honrosa - Olimpíada Brasileira de Química (2023)."
        }
    ],

    TechStack: {
        data: [
            "Backend: Node.js, Fastify, NestJS, TypeScript, Express, Prisma ORM, Knex.js, PostgreSQL, MySQL, SQLite, Redis",
            "Frontend: React, Next.js 14, Vite, TypeScript, TailwindCSS, Shadcn UI, React Hook Form, Zod, Radix UI, Framer Motion",
            "DevOps & Infra: Docker, Docker Compose, Linux (Ubuntu, CentOS), Nginx, CI/CD, Git, GitHub Actions",
            "Testing & Tools: Vitest, Jest, Axios, Python (Pandas, Typer), REST APIs, WebSockets, Postman, VS Code"
        ]
    }
}