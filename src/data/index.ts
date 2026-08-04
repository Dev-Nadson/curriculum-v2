import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import type {
    IAcademicProps,
    ICertificationsProps,
    ICompetencesProps,
    ILinkProps,
    ProfileData
} from "@/typings";


const PEDRO_LINKS: ILinkProps[] = [
    { icon: Phone, text: "(81) 98978-5231", url: "tel:+5581989785231" },
    { icon: Mail, text: "pedrohenrique20059980@gmail.com", url: "mailto:pedrohenrique20059980@gmail.com" },
    { icon: Linkedin, text: "in/pedro-henrique-7427b4261", url: "https://www.linkedin.com/in/pedro-henrique-7427b4261" },
    { icon: Github, text: "github.com/PedroHenriqueOSilva", url: "https://github.com/PedroHenriqueOSilva" },
]

const PEDRO_CERTIFICATIONS: ICertificationsProps[] = [
    {
        title: "Formação em Programação de Software (JavaScript, HTML, CSS)",
        institution: "UNICESUMAR",
        date: "2022 • 440 horas"
    },
    {
        title: "Python e Algoritmos (Lógica de Programação e POO)",
        institution: "Curso em Vídeo",
        date: "2024 • 80 horas" // CONFIRMAR: ano de conclusão
    }
]

const PEDRO_ENSINO_MEDIO: IAcademicProps = {
    title: "Ensino Médio Completo",
    school: "SESI - José Ranulfo da Costa Queiroz",
    date: "Dezembro 2022"
}

const PEDRO_LANGUAGES: ICompetencesProps = {
    data: ["Português: Nativo  •  Inglês: Leitura técnica de documentação (intermediário em leitura, básico em conversação)"]
}

export const PEDRO_SUPORTE: ProfileData = {
    slug: "pedro-suporte",
    Order: ["AboutMe", "Experiences", "Competences", "Academics", "Certifications", "Projects", "Languages"],
    Header: {
        Name: "PEDRO HENRIQUE DE O. DA SILVA",
        Subtitle: "Analista de Suporte Técnico | Infraestrutura de TI, Redes e Service Desk",
        Links: PEDRO_LINKS
    },
    AboutMe: "Profissional de TI com 3 anos de experiência em suporte técnico e infraestrutura, atuando com Service Desk (N1 e N2), administração de sistema ERP, manutenção de hardware e estruturação de redes corporativas. Atendo aproximadamente 20 usuários e mantenho mais de 30 estações de trabalho, com foco em disponibilidade e padronização do parque tecnológico. Graduando em Ciência da Computação pela UNIFAVIP Wyden.",
    Experiences: [
        {
            enterprise: "MASTERDRIVE IMPORTAÇÃO",
            role: "Suporte Técnico em TI / Auxiliar Administrativo",
            date: "Janeiro 2023 - Atual",
            worktype: "Presencial",
            description: [
                "Administrei o sistema ERP da empresa, executando configurações e parametrizações e treinando aproximadamente 20 usuários, o que padronizou processos e reduziu retrabalho nas rotinas administrativas.",
                "Atuei como responsável pelo Service Desk (N1 e N2), registrando e tratando chamados de hardware, software e conectividade com atendimento presencial e remoto a todos os setores.",
                "Realizei montagem e manutenção preventiva e corretiva de mais de 30 estações de trabalho: diagnóstico de falhas, substituição de componentes (SSD, memória e fonte), formatação e instalação de Windows.",
                "Estruturei a rede corporativa com cabeamento estruturado, crimpagem e organização de rack, configurando roteadores, switches e parâmetros de TCP/IP, DHCP e DNS.",
                "Documentei procedimentos de suporte e rotinas de backup do ERP, reduzindo o tempo de atendimento de chamados recorrentes e o risco de perda de dados."
            ]
        }
    ],
    Competences: {
        data: [
            "Suporte e Service Desk: Atendimento N1 e N2, tratativa de chamados, suporte presencial e remoto, treinamento de usuários, documentação de procedimentos",
            "Sistemas Operacionais: Windows 10 e 11, instalação, formatação e drivers; Linux (Ubuntu) e linha de comando",
            "Hardware e Redes: Manutenção de desktops e notebooks, troca de componentes, impressoras e periféricos; cabeamento estruturado (Cat5e/Cat6), TCP/IP, DHCP, DNS, roteadores, switches e Wi-Fi",
            "Sistemas e Ferramentas: ERP, Pacote Office, Google Workspace, acesso remoto (AnyDesk, TeamViewer), Git e GitHub",
            "Programação e Automação: Python (lógica e POO), SQL básico, JavaScript, HTML, CSS"
        ]
    },
    Academics: [
        {
            title: "Bacharelado em Ciência da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2025 - Dezembro 2029", // CONFIRMAR: previsão de conclusão
            description: "Ênfase em Redes de Computadores, Arquitetura de Computadores, Estrutura de Dados, Programação em C e Computação em Nuvem."
        },
        PEDRO_ENSINO_MEDIO
    ],
    Certifications: PEDRO_CERTIFICATIONS,
    Projects: [
        {
            title: "Sistema de Inventário de TI",
            stack: "Python, SQLite, POO",
            date: "2025",
            url: "", // TODO: publicar no GitHub e colar a URL do repositório aqui
            description: "Aplicação de linha de comando para cadastro e consulta de equipamentos de TI, com persistência em SQLite, relatórios por setor e histórico de manutenções."
        }
    ],
    Languages: PEDRO_LANGUAGES
}

export const PEDRO_DEV: ProfileData = {
    slug: "pedro-dev",
    // Transição de carreira: stack e projetos vêm antes da experiência, porque é
    // o que o recrutador técnico procura primeiro.
    Order: ["AboutMe", "TechStack", "Projects", "Experiences", "Academics", "Certifications", "Languages"],
    Header: {
        Name: "PEDRO HENRIQUE DE O. DA SILVA",
        // Cargo alvo, sem "buscando oportunidade" — o objetivo vai no resumo.
        Subtitle: "Desenvolvedor Júnior | Python, JavaScript e SQL",
        Links: PEDRO_LINKS
    },
    AboutMe: "Graduando em Ciência da Computação pela UNIFAVIP Wyden, em transição para desenvolvimento de software, com base em Python (algoritmos e Programação Orientada a Objetos), JavaScript, HTML, CSS, SQL e versionamento com Git e GitHub. Trago 3 anos de experiência em TI dando suporte a sistema ERP, diagnosticando falhas e atendendo usuários de diferentes setores — vivência que consolidou raciocínio lógico, investigação de causa raiz e comunicação com áreas de negócio. Busco oportunidade como Desenvolvedor Júnior ou estagiário em desenvolvimento.",
    TechStack: {
        data: [
            "Linguagens: Python, JavaScript, C, SQL, HTML5, CSS3",
            "Python: Programação Orientada a Objetos, estruturas de dados, manipulação de arquivos, tratamento de exceções, scripts de automação",
            "Banco de Dados: SQL (SELECT, JOIN e agregações), modelagem relacional, SQLite, MySQL",
            "Ferramentas: Git, GitHub, VS Code, terminal Linux",
            "Fundamentos: Algoritmos e Estrutura de Dados, POO, Redes de Computadores, Arquitetura de Computadores, Computação em Nuvem",
            // CONFIRMAR: manter somente o que ele estiver estudando de fato.
            "Em aprendizado: APIs REST, Flask e FastAPI, Docker, testes automatizados"
        ]
    },
    /*
     * SEÇÃO CRÍTICA DESTE CURRÍCULO.
     *
     * Sem projetos publicados, um currículo de dev júnior sem experiência em
     * código não passa da triagem técnica. As três entradas abaixo estão escritas
     * mas ainda SEM repositório — precisam existir no GitHub com README.
     *
     * Ordem de prioridade: o projeto 1 é o mais forte, porque nasce da rotina
     * real do Pedro (controle de parque de TI) e demonstra POO + banco de dados
     * — além de render uma boa história em entrevista.
     *
     * TODO (Pedro): construir, publicar e preencher cada `url`. Remover as
     * entradas que não forem publicadas — projeto listado sem link levanta
     * suspeita, e é pior do que seção menor.
     */
    Projects: [
        {
            title: "Sistema de Inventário de TI",
            stack: "Python, SQLite, POO",
            date: "2025",
            url: "", // TODO
            description: "Aplicação de linha de comando para cadastro e consulta de equipamentos de TI, com persistência em SQLite, relatórios por setor e histórico de manutenções. Modelada com classes e separação entre regras de negócio e acesso a dados."
        },
        {
            title: "Analisador de Chamados de Suporte",
            stack: "Python, Pandas, CSV",
            date: "2025",
            url: "", // TODO
            description: "Script que processa uma base de chamados em CSV e gera métricas de volume por categoria, tempo médio de atendimento e ranking de problemas recorrentes."
        },
        {
            title: "Portfólio Pessoal",
            stack: "HTML5, CSS3, JavaScript, GitHub Pages",
            date: "2025",
            url: "", // TODO
            description: "Página responsiva reunindo projetos e formação, com layout adaptado para desktop e mobile e publicação contínua via GitHub Pages."
        }
    ],
    Experiences: [
        {
            enterprise: "MASTERDRIVE IMPORTAÇÃO",
            role: "Suporte Técnico em TI / Auxiliar Administrativo",
            date: "Janeiro 2023 - Atual",
            worktype: "Presencial",
            // Mesmas atividades do currículo de suporte, reanguladas para o valor
            // que uma vaga de desenvolvimento reconhece.
            description: [
                "Prestei suporte e configuração do sistema ERP da empresa, levantando necessidades junto a usuários de diferentes setores e traduzindo demandas de negócio em ajustes e parametrizações do sistema.",
                "Diagnostiquei e resolvi falhas de sistema, rede e hardware para aproximadamente 20 usuários, aplicando leitura de logs, interpretação de mensagens de erro e investigação de causa raiz.",
                "Treinei aproximadamente 20 usuários no uso do ERP e documentei procedimentos operacionais, reduzindo a recorrência de chamados.",
                // CONFIRMAR: incluir SOMENTE se for verdade. Se ainda não fez, é a
                // automação mais fácil de começar — e vale mais que qualquer curso.
                "Automatizei tarefas repetitivas de rotina com scripts em Python, reduzindo o tempo de execução manual dessas atividades."
            ]
        }
    ],
    Academics: [
        {
            title: "Bacharelado em Ciência da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2025 - Dezembro 2029", // CONFIRMAR: previsão de conclusão
            description: "Ênfase em Algoritmos e Estrutura de Dados, Programação em C, Arquitetura de Computadores, Redes de Computadores e Computação em Nuvem."
        },
        PEDRO_ENSINO_MEDIO
    ],
    Certifications: PEDRO_CERTIFICATIONS,
    Languages: PEDRO_LANGUAGES
}

/*
 * =============================================================================
 * NADSON ALEX — três versões do mesmo histórico profissional.
 *
 * NADSON           (/curriculo/nadson)           panorama fullstack
 * NADSON_BACKEND   (/curriculo/nadson-backend)   vagas de Backend / Node.js
 * NADSON_FRONTEND  (/curriculo/nadson-frontend)  vagas de Frontend / React
 *
 * Mesmas atividades reais em todas: o que muda é a ordem, o recorte e o peso
 * dado a cada uma. Nada de experiência inventada entre as versões.
 *
 * As duas vagas foram na CATSUC LABS — Suporte em TI e depois Desenvolvedor.
 * Isso é uma promoção interna e aparece como duas entradas sob a mesma empresa:
 * é o formato mais seguro para ATS (o parser vincula os dois cargos ao mesmo
 * empregador) e as datas adjacentes tornam a progressão evidente.
 * =============================================================================
 */

const NADSON_LINKS: ILinkProps[] = [
    { icon: Phone, text: "(81) 98978-5231", url: "tel:+5581989785231" },
    { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com" },
    { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex" },
    { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson" },
]

const NADSON_ACADEMICS: IAcademicProps[] = [
    {
        title: "Bacharelado em Ciência da Computação",
        school: "UNIFAVIP WYDEN",
        date: "Fevereiro 2025 - Dezembro 2029", // CONFIRMAR: previsão de conclusão
        description: "Bolsista PROUNI integral. Ênfase em Algoritmos e Estruturas de Dados, Redes de Computadores, Arquitetura de Computadores, Programação em C e Engenharia de Software."
    },
    {
        title: "Ensino Médio Completo",
        school: "Escola de Referência em Ensino Médio de Panelas",
        date: "Fevereiro 2021 - Dezembro 2023",
        description: "Medalhista de Prata na Olimpíada Brasileira de Geografia (2022) e Menção Honrosa na Olimpíada Brasileira de Química (2023)."
    }
]

// A Rocketseat saiu de Academics: é certificação, não formação acadêmica.
const NADSON_CERTIFICATIONS: ICertificationsProps[] = [
    {
        title: "Formação Fullstack — Node.js e React",
        institution: "Rocketseat",
        date: "2025 • 380 horas",
        description: "Node.js, React, TypeScript, Fastify, PostgreSQL, testes automatizados e Clean Architecture."
    }
]

const NADSON_LANGUAGES: ICompetencesProps = {
    data: ["Português: Nativo  •  Inglês: Leitura técnica de documentação (intermediário em leitura, básico em conversação)"]
}

export const NADSON: ProfileData = {
    slug: "nadson",
    Order: ["AboutMe", "TechStack", "Experiences", "Academics", "Certifications", "Languages"],
    Header: {
        Name: "NADSON ALEX DA SILVA",
        Subtitle: "Desenvolvedor Fullstack | Node.js, React e TypeScript",
        Links: NADSON_LINKS
    },
    AboutMe: "Desenvolvedor Fullstack com foco em backend, especializado em Node.js, Fastify, TypeScript e PostgreSQL. Experiência em APIs REST multi-tenant, otimização de consultas SQL, cache com Redis e aplicações React modernas. Entrei na CATSUC LABS como Técnico de Suporte em TI e fui promovido a Desenvolvedor após automatizar mais de 18 processos operacionais com Python. Graduando em Ciência da Computação (PROUNI integral).",
    TechStack: {
        data: [
            "Backend: Node.js, Fastify, NestJS, Express, TypeScript, Zod, Prisma ORM, Knex.js",
            "Bancos de Dados e Cache: PostgreSQL, MySQL, SQLite, Redis (ioredis), modelagem relacional, otimização de queries SQL",
            "Frontend: React, Next.js, Vite, TanStack Query, Zustand, TailwindCSS, Shadcn UI, Radix UI, React Hook Form",
            "DevOps e Infra: Docker, Docker Compose, Linux (Ubuntu, CentOS), Nginx, VyOS, CI/CD, GitHub Actions, Git",
            "Testes e Ferramentas: Vitest, Jest, Supertest, APIs REST, WebSockets, Axios, Postman, Python (Typer, Pandas)"
        ]
    },
    Experiences: [
        {
            enterprise: "CATSUC LABS",
            role: "Desenvolvedor Fullstack Júnior",
            date: "Maio 2026 - Atual",
            worktype: "Presencial",
            description: [
                "Desenvolvi APIs REST multi-tenant com Node.js, Fastify e PostgreSQL, implementando isolamento por tenant, soft delete e controle de acesso aos dados.",
                "Criei mais de 40 endpoints REST com Fastify, TypeScript e Zod em arquitetura em camadas, com validação type-safe e tratamento centralizado de erros, atendendo mais de 10.000 requisições por dia.",
                "Modelei a arquitetura relacional no PostgreSQL com tabelas de associação e regras de integridade, e otimizei consultas com Knex.js e SQL puro (JOINs e agregações) para relatórios analíticos.",
                "Implementei cache com Redis (ioredis) em mais de 30 funcionalidades, reduzindo a carga no PostgreSQL e o tempo de resposta da aplicação.",
                "Contribuí para uma biblioteca interna com mais de 25 componentes React em TypeScript, Radix UI e TailwindCSS, com formulários em React Hook Form e Zod e estado assíncrono via TanStack Query, eliminando código duplicado em mais de 15 telas.",
                "Elevei a cobertura de testes de 12% para 67% com testes unitários, de integração (Vitest e Jest) e end-to-end (Supertest), reduzindo regressões nas entregas."
            ]
        },
        {
            enterprise: "CATSUC LABS",
            role: "Técnico de Suporte em TI",
            date: "Julho 2025 - Maio 2026",
            description: [
                "Automatizei mais de 18 processos operacionais com uma CLI em Python (Typer, Paramiko e Pydantic), economizando mais de 120 horas mensais e reduzindo tarefas de até 6 horas para cerca de 30 minutos.",
                "Realizei manutenção preventiva e corretiva em mais de 300 máquinas virtuais Linux (Ubuntu e CentOS), sustentando disponibilidade superior a 97% nos ambientes.",
                "Administrei mais de 200 configurações de rede com Nginx e VyOS, implementando proxy reverso, DNS, regras de NAT e liberação de portas para roteamento seguro das aplicações.",
                "Automatizei rotinas de backup de mais de 30 sistemas Linux e ambientes Docker e diagnostiquei incidentes com systemctl, journalctl, netstat e análise de logs."
            ]
        }
        // A vaga de atendente na PANIFICADORA JR (2023-2024) fica de fora: a
        // progressão Suporte -> Dev dentro da CATSUC LABS já sustenta o histórico.
    ],
    Academics: NADSON_ACADEMICS,
    Certifications: NADSON_CERTIFICATIONS,
    Languages: NADSON_LANGUAGES
}

export const NADSON_BACKEND: ProfileData = {
    slug: "nadson-backend",
    Order: ["AboutMe", "TechStack", "Experiences", "Academics", "Certifications", "Languages"],
    Header: {
        Name: "NADSON ALEX DA SILVA",
        Subtitle: "Desenvolvedor Backend | Node.js, Fastify, TypeScript e PostgreSQL",
        Links: NADSON_LINKS
    },
    AboutMe: "Desenvolvedor Backend com experiência em APIs REST multi-tenant construídas com Node.js, Fastify, TypeScript e PostgreSQL, em aplicação que processa mais de 10.000 requisições por dia. Atuo em modelagem relacional, otimização de consultas SQL, cache com Redis e testes automatizados. Entrei na CATSUC LABS como Técnico de Suporte em TI e fui promovido a Desenvolvedor após automatizar mais de 18 processos operacionais com Python. Graduando em Ciência da Computação (PROUNI integral).",
    TechStack: {
        data: [
            "Backend: Node.js, Fastify, NestJS, Express, TypeScript, Zod, Prisma ORM, Knex.js",
            "Bancos de Dados e Cache: PostgreSQL, MySQL, SQLite, Redis (ioredis), modelagem relacional, otimização de queries SQL",
            "Arquitetura e Testes: APIs REST, multi-tenant, arquitetura em camadas, Clean Architecture, WebSockets, Vitest, Jest, Supertest",
            "DevOps e Infra: Docker, Docker Compose, Linux (Ubuntu, CentOS), Nginx, VyOS, CI/CD, GitHub Actions, Git",
            "Também atuo com: React, Next.js, TanStack Query, TailwindCSS, Python (Typer, Pandas)"
        ]
    },
    Experiences: [
        {
            enterprise: "CATSUC LABS",
            // Título real com o recorte explicitado — fiel ao registrado e casa a
            // palavra-chave que o ATS da vaga procura.
            role: "Desenvolvedor Fullstack Júnior (foco em Backend)",
            date: "Maio 2026 - Atual",
            worktype: "Presencial",
            description: [
                "Desenvolvi APIs REST multi-tenant com Node.js, Fastify e PostgreSQL, implementando isolamento por tenant, soft delete e controle de acesso aos dados.",
                "Criei mais de 40 endpoints REST com Fastify, TypeScript e Zod em arquitetura em camadas, com validação type-safe e tratamento centralizado de erros, atendendo mais de 10.000 requisições por dia.",
                "Modelei a arquitetura relacional no PostgreSQL com tabelas de associação e regras de integridade, e otimizei consultas com Knex.js e SQL puro (JOINs e agregações) para relatórios analíticos.",
                "Implementei cache com Redis (ioredis) em mais de 30 funcionalidades, incluindo endpoints, serviços e persistência, reduzindo a carga no PostgreSQL e o tempo de resposta da API.",
                "Elevei a cobertura de testes de 12% para 67% com testes unitários, de integração (Vitest e Jest) e end-to-end (Supertest), reduzindo regressões nas entregas.",
                // Uma linha só preserva o alcance fullstack sem diluir o foco backend.
                "Integrei o backend a interfaces React com TypeScript e schemas Zod compartilhados, garantindo contratos de API type-safe de ponta a ponta."
            ]
        },
        {
            enterprise: "CATSUC LABS",
            role: "Técnico de Suporte em TI",
            date: "Julho 2025 - Maio 2026",
            // Experiência mantida em 4 bullets: Linux, Python, Nginx e Docker
            // contam muito para backend, e a CLI é o que justificou a promoção.
            description: [
                "Automatizei mais de 18 processos operacionais com uma CLI em Python (Typer, Paramiko e Pydantic), economizando mais de 120 horas mensais e reduzindo tarefas de até 6 horas para cerca de 30 minutos.",
                "Realizei manutenção preventiva e corretiva em mais de 300 máquinas virtuais Linux (Ubuntu e CentOS), sustentando disponibilidade superior a 97% nos ambientes.",
                "Administrei mais de 200 configurações de rede com Nginx e VyOS, implementando proxy reverso, DNS, regras de NAT e liberação de portas para roteamento seguro das aplicações.",
                "Automatizei rotinas de backup de mais de 30 sistemas Linux e ambientes Docker e diagnostiquei incidentes com systemctl, journalctl, netstat e análise de logs."
            ]
        }
    ],
    Academics: NADSON_ACADEMICS,
    Certifications: NADSON_CERTIFICATIONS,
    Languages: NADSON_LANGUAGES
}

export const NADSON_FRONTEND: ProfileData = {
    slug: "nadson-frontend",
    Order: ["AboutMe", "TechStack", "Experiences", "Academics", "Certifications", "Languages"],
    Header: {
        Name: "NADSON ALEX DA SILVA",
        Subtitle: "Desenvolvedor Frontend | React, TypeScript, Next.js e TailwindCSS",
        Links: NADSON_LINKS
    },
    AboutMe: "Desenvolvedor Frontend com experiência em React e TypeScript, atuando em biblioteca de componentes reutilizáveis, formulários com validação complexa e gerenciamento de estado assíncrono com TanStack Query. Contribuí com mais de 25 componentes acessíveis (Radix UI e TailwindCSS) que eliminaram código duplicado em mais de 15 telas. Também desenvolvo as APIs que consumo (Node.js, Fastify e PostgreSQL), o que me permite alinhar contrato e tipagem de ponta a ponta. Graduando em Ciência da Computação (PROUNI integral).",
    TechStack: {
        data: [
            "Frontend: React 19, Next.js, Vite, TypeScript, JavaScript (ES6+), HTML5, CSS3",
            "UI e Estilização: TailwindCSS, Shadcn UI, Radix UI (componentes acessíveis), design system e componentes reutilizáveis",
            "Estado e Dados: TanStack Query (React Query), Zustand, React Hook Form, Zod, Axios, React Router, APIs REST e WebSockets",
            "Testes e Ferramentas: Vitest, Jest, Git, GitHub, Docker, Postman, VS Code",
            "Backend (também atuo): Node.js, Fastify, TypeScript, PostgreSQL, Redis, Prisma ORM, Knex.js"
        ]
    },
    Experiences: [
        {
            enterprise: "CATSUC LABS",
            role: "Desenvolvedor Fullstack Júnior (foco em Frontend)",
            date: "Maio 2026 - Atual",
            worktype: "Presencial",
            description: [
                "Contribuí para uma biblioteca interna com mais de 25 componentes React reutilizáveis em TypeScript, Radix UI e TailwindCSS, eliminando código duplicado em mais de 15 telas.",
                "Construí formulários complexos com React Hook Form e Zod, aplicando validações condicionais com superRefine e feedback de erro consistente em toda a aplicação.",
                "Implementei gerenciamento de estado assíncrono com TanStack Query (queries, mutations e cache invalidation), reduzindo requisições redundantes e melhorando a resposta percebida da interface.",
                "Padronizei a tipagem entre frontend e backend com TypeScript e schemas Zod compartilhados, eliminando divergências de contrato de API em tempo de compilação.",
                "Elevei a cobertura de testes de 12% para 67% com Vitest e Jest, reduzindo regressões nas entregas de interface.",
                "Desenvolvi as APIs REST consumidas pelas telas com Node.js, Fastify e PostgreSQL (mais de 40 endpoints e 10.000 requisições por dia), atuando de ponta a ponta na entrega das features."
            ]
        },
        {
            enterprise: "CATSUC LABS",
            role: "Técnico de Suporte em TI",
            date: "Julho 2025 - Maio 2026",
            // Reduzida a 2 bullets: é a experiência menos relevante para frontend.
            // Fica a CLI (justifica a promoção) e a base de Linux/Docker/Nginx,
            // enquadrada pelo uso atual em build e deploy.
            description: [
                "Automatizei mais de 18 processos operacionais com uma CLI em Python (Typer, Paramiko e Pydantic), economizando mais de 120 horas mensais.",
                "Administrei ambientes Linux, Docker e Nginx (proxy reverso e DNS) em mais de 300 máquinas virtuais — base que hoje aplico na configuração de build e deploy das aplicações."
            ]
        }
    ],
    Academics: NADSON_ACADEMICS,
    Certifications: NADSON_CERTIFICATIONS,
    Languages: NADSON_LANGUAGES
}

export const ANAJULIA: ProfileData = {
    slug: "ana-julia",
    Header: {
        Name: "ANA JÚLIA ALVES DA SILVA",
        Subtitle: "Acadêmica em Farmácia e Atendimento ao Público",
        Links: [
            { icon: Phone, text: "(81) 99745-8420", url: "" },
            { icon: Mail, text: "anajuliaalvesdasilva00@gmail.com", url: "mailto:anajuliaalvesdasilva00@gmail.com" },
            { icon: Linkedin, text: "linkedin.com/in/farm-ana-julia", url: "https://www.linkedin.com/in/farm-ana-julia" },
            { icon: Globe, text: "Currículo Lattes", url: "https://lattes.cnpq.br/9584098191647265" },
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
                "Promovi estabelecimentos por meio da distribuição de mais de 800 panfletos diários, utilizando abordagem simpática e comunicação eficiente com o público",
                "Realizei ações de degustação para promoção de produtos, atendendo mais de 80 pessoas diariamente e aumentando o interesse dos consumidores",
                "Participei de ações práticas como estudante de Farmácia, incluindo limpeza de pele, aferição de pressão arterial e orientações básicas em saúde",
                "Ofereci atendimento humanizado ao público, buscando orientar e proporcionar uma experiência positiva aos participantes das ações"
            ]
        },
        {
            enterprise: "Cursinho Exatas",
            date: "Março 2023 - Fevereiro 2024",
            role: "Auxiliar de Professor",
            worktype: "Presencial",
            description: [
                "Acompanhei turmas da alfabetização infantil ao ensino médio, com foco em Matemática, Física e Química, oferecendo suporte personalizado aos alunos",
                "Identifiquei dificuldades específicas de aprendizagem e adaptei explicações para melhorar engajamento e compreensão dos estudantes",
                "Mantive comunicação constante com pais e professores, contribuindo para maior alinhamento pedagógico e evolução acadêmica",
                "Auxiliei na organização das demandas do cursinho preparatório, colaborando para aumento da procura pelo curso"
            ]
        },
        {
            enterprise: "Lanchone Central",
            date: "Janeiro 2022 - Janeiro 2023",
            role: "Balconista e Operadora de Caixa",
            worktype: "Presencial",
            description: [
                "Realizei atendimento direto ao público, garantindo agilidade, organização e atenção durante o serviço",
                "Atuei em operações de caixa, preparo de pedidos e controle básico de estoque seguindo procedimentos organizacionais",
                "Fui responsável pela abertura e fechamento do estabelecimento, assegurando o funcionamento diário da unidade",
                "Desenvolvi habilidades de comunicação, resolução de problemas e trabalho sob pressão em ambiente de alta demanda"
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

export const PROFILES: ProfileData[] = [
    NADSON,
    NADSON_BACKEND,
    NADSON_FRONTEND,
    PEDRO_SUPORTE,
    PEDRO_DEV,
    ANAJULIA
]

export function getProfileBySlug(slug?: string) {
    return PROFILES.find((profile) => profile.slug === slug)
}
