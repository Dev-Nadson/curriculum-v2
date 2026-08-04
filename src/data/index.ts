import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import type { ProfileData } from "../typings";

export const PEDRO: ProfileData = {
    slug: "pedro",
    Header: {
        Name: "PEDRO HENRIQUE DE O. DA SILVA",
        Links: [
            { icon: Phone, text: "(81) 989785231", url: "", link: true },
            { icon: Mail, text: "pedrohenrique20059980@gmail.com", url: "mailto:pedrohenrique20059980@gmail.com", link: true },
            { icon: Linkedin, text: "PedroHenriqueOSilva", url: "https://github.com/PedroHenriqueOSilva", link: true },
            { icon: Github, text: "Pedro Henrique", url: "https://www.linkedin.com/in/pedro-henrique-7427b4261", link: true }
        ]
    },
    AboutMe: "Possuo com três anos de experiência em suporte técnico e atendimento ao usuário, atuando com manutenção de hardware, diagnóstico de sistemas e substituição de componentes. Em transição de carreira para a área de Desenvolvimento Web, com foco no aprendizado e aplicação de Python na resolução de problemas e no desenvolvimento de soluções. Perfil proativo, organizado e com facilidade para trabalho em equipe.",
    Experiences: [
        {
            enterprise: "MASTERDRIVE IMPORTAÇÃO",
            date: "Janeiro 2023 - Atual",
            role: "Auxiliar Administrativo - Suporte em TI",
            worktype: "Presencial",
            description: [
                "- Gerenciei o sistema ERP da empresa, prestando suporte técnico, realizando configurações e treinando aproximadamente 20 usuários, garantindo a utilização eficiente, contínua e padronizada da plataforma.",
                "- Executei a montagem, manutenção e reparo de mais de 30 máquinas, além da estruturação, cabeamento e organização da rede corporativa, assegurando estabilidade, desempenho e padronização da infraestrutura de TI.",
                "- Liderei o setor de helpdesk, oferecendo suporte direto aos colaboradores em demandas de hardware, software e conectividade, reduzindo falhas operacionais e garantindo o pleno funcionamento dos recursos tecnológicos da empresa.",
            ]
        }
    ],
    Academics: [
        {
            title: "Bacharelado em Ciências da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fev 2025 - Atual",
            description: "Redes de Computadores, Arquitetura de Computadores, Programação de Software em C, Estrutura de Dados, Computação em Nuvem, Git, Github"
        },
        {
            title: "Programação de Software",
            school: "UNICESUMAR",
            date: "440 Horas - 2022",
            description: "JavaScript, HTML, CSS"
        },
        {
            title: "Python e Algortimos",
            school: "Curso em Vídeo",
            date: "80 Horas",
            description: "Lógica de Programação, Programação Orientada a Objeto"
        },
        {
            title: "Ensino Médio",
            school: "SESI - JOSÉ RANULFO DA COSTA QUEIROZ",
            date: "Fev 2025 - Atual",
        }
    ]
}

export const NADSON: ProfileData = {
    slug: "nadson",
    Header: {
        Name: "NADSON ALEX DA SILVA",
        Subtitle: "Desenvolvedor Fullstack | Especialista em Node.js, React e TypeScript",
        Links: [
            { icon: Phone, text: "(81) 98978-5231", url: "tel:+5581989785231", link: true },
            { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com", link: true },
            { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex", link: true },
            { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson", link: true },
        ]
    },
    AboutMe: "Desenvolvedor Fullstack com foco em backend, especializado em Node.js, Fastify, TypeScript e PostgreSQL. Experiência no desenvolvimento de APIs REST multi-tenant, otimização de consultas SQL, estratégias de cache com Redis e aplicações React modernas. Graduando em Ciência da Computação (PROUNI integral).",
    Experiences: [
        {
            enterprise: "CATSUC LABS",
            date: "Maio 2026 - Atual",
            role: "Desenvolvedor Fullstack Júnior",
            worktype: "Presencial",
            description: [
                "Desenvolvi APIs REST multi-tenant com Node.js, Fastify e PostgreSQL, implementando isolamento por tenant, soft delete e controle de acesso aos dados.",
                "Modelei a arquitetura relacional do PostgreSQL utilizando tabelas de associação e regras de integridade para suportar a evolução da aplicação.",
                "Criei mais de 40 endpoints REST com Fastify, TypeScript e Zod utilizando arquitetura em camadas, validação type-safe e tratamento centralizado de erros, processando mais de 10.000 requisições por dia",
                "Implementei cache com Redis (ioredis) em mais de 30 funcionalidades da aplicação, incluindo endpoints, serviços e persistência de dados, reduzindo a carga no PostgreSQL e melhorando o tempo de resposta.",
                "Otimizei consultas SQL com Knex.js e SQL puro para relatórios analíticos, utilizando JOINs, agregações e relacionamentos complexos no PostgreSQL",
                "Contribuí para uma biblioteca interna com mais de 25 componentes React reutilizáveis utilizando TypeScript, Radix UI e TailwindCSS, além de criar formulários com React Hook Form e Zod, aplicando validações condicionais com superRefine e reduzindo código duplicado em mais de 15 telas.",
                "Implementei gerenciamento de estado assíncrono e cache com TanStack Query (React Query), utilizando queries, mutations e cache invalidation para otimizar requisições e melhorar a experiência do usuário",
                "Elevei a cobertura de testes de 12% para 67% com testes unitários, integração (Vitest e Jest) e end-to-end (Supertest), reduzindo regressões e garantindo qualidade durante as entregas"
            ]
        },
        {
            date: "Julho 2025 - Maio 2026",
            role: "Técnico de Suporte em TI",
            description: [
                "Realizei manutenção preventiva e corretiva em mais de 300 máquinas virtuais Linux (Ubuntu e CentOS), garantindo disponibilidade superior a 97% em todos os ambientes",
                "Automatizei mais de 18 processos operacionais com uma CLI em Python com Typer, Paramiko e Pydantic, economizando mais de 120 horas mensais e reduzindo tarefas de até 6 horas para cerca de 30 minutos",
                "Realizei diagnóstico e resolução de incidentes em ambientes Linux utilizando ferramentas como systemctl, journalctl, netstat e análise de logs, reduzindo o tempo de identificação e correção de falhas críticas",
                "Administrei mais de 200 configurações de rede utilizando Nginx e VyOS, implementando proxy reverso, DNS, regras de NAT e abertura de portas para garantir disponibilidade e roteamento seguro das aplicações",
                "Automatizei rotinas de backup para mais de 30 sistemas Linux e ambientes Docker, aumentando a segurança e reduzindo riscos de perda em caso de falhas"
            ]
        },
        // {
        //     enterprise: "PANIFICADORA JR",
        //     date: "Janeiro 2023 - Dezembro 2024",
        //     role: "Atendente",
        //     worktype: "Presencial",
        //     description: [
        //         "Atendi 50+ clientes/dia mantendo 95% de satisfação através de agilidade, organização e comunicação eficaz em ambiente de alta demanda",
        //         "Desenvolvi soft skills essenciais para ambientes tech: comunicação clara, trabalho sob pressão, resolução rápida de problemas e foco no cliente"
        //     ]
        // }
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
                "Formação Fullstack (380h) com foco em Node.js, React, TypeScript, PostgreSQL, Fastify, testes automatizados e Clean Architecture."
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
            "Frontend: React, Next.js 16, Vite, TypeScript, React Query, Zustand, TailwindCSS, Shadcn UI, React Hook Form, Zod",
            "DevOps & Infra: Docker, Docker Compose, Linux (Ubuntu, CentOS), Nginx, CI/CD, Git, GitHub Actions",
            "Testing & Tools: Vitest, Jest, Axios, Python (Pandas, Typer), REST APIs, WebSockets, Postman, VS Code"
        ]
    }
}

export const ANAJULIA: ProfileData = {
    slug: "ana-julia",
    Header: {
        Name: "ANA JÚLIA ALVES DA SILVA",
        Subtitle: "Acadêmica em Farmácia e Atendimento ao Público",
        Links: [
            { icon: Phone, text: "(81) 99745-8420", url: "", link: true },
            { icon: Mail, text: "anajuliaalvesdasilva00@gmail.com", url: "mailto:anajuliaalvesdasilva00@gmail.com", link: true },
            { icon: Linkedin, text: "linkedin.com/in/farm-ana-julia", url: "https://www.linkedin.com/in/farm-ana-julia", link: true },
            { icon: Globe, text: "Currículo Lattes", url: "https://lattes.cnpq.br/9584098191647265", link: true },
        ]
    },
    AboutMe:
        "Acadêmica em Farmácia pela UNIFAVIP Wyden, bolsista integral PROUNI e Presidente da Liga Acadêmica de Farmácia Clínica (LAFAC). Busco estágio em farmácia clínica, hospitalar ou de manipulação para aplicar e aprofundar conhecimentos em atenção farmacêutica, segurança do paciente e cuidado humanizado. Tenho experiência prática em aferição de pressão arterial, orientação em saúde e atendimento ao público, além de atuação acadêmica reconhecida com premiação Top Student 2025 e menção honrosa em resumo científico.",
    Experiences: [
        {
            enterprise: "Autônoma",
            date: "Março 2025 - Atual",
            role: "Promotora de Eventos",
            worktype: "Presencial",
            description: [
                "- Promovi estabelecimentos por meio da distribuição de mais de 800 panfletos diários, utilizando abordagem simpática e comunicação eficiente com o público",
                "- Realizei ações de degustação para promoção de produtos, atendendo mais de 80 pessoas diariamente e aumentando o interesse dos consumidores",
                "- Participei de ações práticas como estudante de Farmácia, incluindo limpeza de pele, aferição de pressão arterial e orientações básicas em saúde",
                "- Ofereci atendimento humanizado ao público, buscando orientar e proporcionar uma experiência positiva aos participantes das ações"
            ]
        },
        {
            enterprise: "Cursinho Exatas",
            date: "Março 2023 - Fevereiro 2024",
            role: "Auxiliar de Professor",
            worktype: "Presencial",
            description: [
                "- Acompanhei turmas da alfabetização infantil ao ensino médio, com foco em Matemática, Física e Química, oferecendo suporte personalizado aos alunos",
                "- Identifiquei dificuldades específicas de aprendizagem e adaptei explicações para melhorar engajamento e compreensão dos estudantes",
                "- Mantive comunicação constante com pais e professores, contribuindo para maior alinhamento pedagógico e evolução acadêmica",
                "- Auxiliei na organização das demandas do cursinho preparatório, colaborando para aumento da procura pelo curso"
            ]
        },
        {
            enterprise: "Lanchone Central",
            date: "Janeiro 2022 - Janeiro 2023",
            role: "Balconista e Operadora de Caixa",
            worktype: "Presencial",
            description: [
                "- Realizei atendimento direto ao público, garantindo agilidade, organização e atenção durante o serviço",
                "- Atuei em operações de caixa, preparo de pedidos e controle básico de estoque seguindo procedimentos organizacionais",
                "- Fui responsável pela abertura e fechamento do estabelecimento, assegurando o funcionamento diário da unidade",
                "- Desenvolvi habilidades de comunicação, resolução de problemas e trabalho sob pressão em ambiente de alta demanda"
            ]
        }
    ],

    Academics: [
        {
            title: "Bacharelado em Farmácia",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2024 - Dezembro 2028",
            description:
                "Bolsista integral PROUNI. Formação voltada para Farmácia Clínica, Atenção Farmacêutica, cuidado ao paciente e práticas laboratoriais. Presidente da Liga Acadêmica de Farmácia Clínica (LAFAC), participando ativamente de ações acadêmicas e práticas extensionistas."
        },
        {
            title: "Ensino Médio Completo",
            school: "Escola de Referência em Ensino Médio de Panelas",
            date: "Fevereiro 2020 - Dezembro 2022",
            description:
                "Formação concluída com participação ativa em atividades acadêmicas e desenvolvimento de habilidades interpessoais e organizacionais."
        }
    ],
    Certifications: [
        {
            title: "Unifavip Top Student 2025 - Farmácia",
            institution: "UNIFAVIP WYDEN",
            date: "2025",
            description: "Premiação concedida ao estudante com melhor desempenho acadêmico do curso de Farmácia, reconhecendo dedicação e excelência nos estudos."
        },
        {
            title: "Menção Honrosa em Resumo Científico",
            institution: "UNIFAVIP WYDEN",
            date: "2025",
            description: "Distinção acadêmica pelo trabalho \"O Papel da Farmácia Clínica e da Atenção Farmacêutica na Segurança do Paciente Hospitalar\", destacando contribuição relevante para a área clínica."
        },
        {
            title: "Minicurso - Desvendando as Interações Medicamentosas",
            institution: "UNIFAVIP WYDEN",
            date: "2025",
            description: "Capacitação prática sobre identificação e manejo de interações medicamentosas, com abordagem clínica voltada à segurança do paciente."
        }
    ],
    Competences: {
        data: [
            "- Atenção Farmacêutica e Seguimento Farmacoterapêutico",
            "- Orientação de Uso Racional de Medicamentos",
            "- Aferição de Pressão Arterial",
            "- Identificação de Interações Medicamentosas",
            "- Atendimento Humanizado ao Paciente",
            "- Comunicação Interpessoal",
            "- Educação em Saúde",
            "- Organização e Trabalho em Equipe",
            "- Inglês Instrumental (leitura científica)"
        ]
    }
}

export const PROFILES: ProfileData[] = [NADSON, PEDRO, ANAJULIA]

export function getProfileBySlug(slug?: string) {
    return PROFILES.find((profile) => profile.slug === slug)
}
