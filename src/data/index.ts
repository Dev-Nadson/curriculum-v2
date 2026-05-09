import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";

export interface ILinkProps {
    icon: LucideIcon
    text: string
    url: string
    link?: boolean
}

export interface IExperienceProps {
    description: string[]
    enterprise: string
    role: string
    worktype: string
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
    Experiences: IExperienceProps[]
    Academics: IAcademicProps[]
    TechStack: ICompetencesProps[]
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
    Subtitle: "Desenvolvedor Fullstack",
    Links: [
        { icon: Phone, text: "(81) 989785231", url: "tel:5581989785231", link: true },
        { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com", link: true },
        { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex", link: true },
        { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson", link: true },
        //{ icon: MapPin, text: "Caruaru, PE", url: "", link: false }
    ],
    // AboutMe: "",
    AboutMe: "Sou um desenvolvedor Fullstack focado em desenvolvimento backend. Graduando em Ciências da Computação na Unifavip, com bolsa integral pelo PROUNI. Busco criar APIs robustas, escaláveis e modernas, utilizando todo ecossistema Nodejs, principalmente a stack Fastify + Typescript e PostgreSQL como banco de dados, viso também construir interfaces amigáveis e responsivas com Nextjs, React e TailwindCSS",
    Experiences: [
        {
            enterprise: "CATSUC LABS",
            date: "Maio 2026 - Atual",
            role: "Desenvolvedor Fullstack Júnior",
            worktype: "Presencial",
            description: [
                "- Desenvolvimento front-end utilizando Next.js, React e TypeScript, com integração de APIs via Axios.",
                "- Criação e validação de formulários com React Hook Form e Zod, garantindo melhor controle de estado e performance.",
                "- Desenvolvimento back-end com Node.js, Fastify e TypeScript.",
                "- Deploy e manutenção de aplicações em servidores Linux Ubuntu.",
                "- Manipulação e gestão de banco de dados PostgreSQL com Knex.js.",
                "- Escrita de queries SQL avançadas para relatórios, utilizando JOINs, GROUP BY e outras operações complexas.",
                "- Uso de Docker com Docker Compose para ambientes de desenvolvimento e Dockerfile para build e deploy de aplicações.",
                "- Implementação de testes automatizados utilizando Vitest.",
            ]
        },
        {
            enterprise: "",
            date: "Julho 2025 - Maio 2026",
            role: "Técnico de suporte em TI",
            worktype: "Presencial",
            description: [
                "- Monitoramento de servidores Linux (Ubuntu/CentOS), reduzindo falhas de conexão com bancos de dados em 94% (de 52 para 3 ocorrências).",
                "- Desenvolvimento de scripts em Python com bibliotecas Typer (CLIs) e Pandas para análise e automação de dados.",
                "- Diagnóstico de incidentes em tempo real utilizando systemctl, netstat e análise de logs com journalctl.",
                "- Gestão e correção de falhas em bancos de dados PostgreSQL e otimização de performance de servidores.",
                "- Atendimento direto ao cliente com foco em triagem técnica e decomposição de problemas complexos.",
            ]
        },
        {
            enterprise: "PANIFICADORA JR",
            date: "Janeiro 2023 - Dezembro 2024",
            role: "Balconista / Atendimento ao Cliente",
            worktype: "Presencial",
            description: [
                "- Atendimento de alta volumetria (média de 50 clientes/dia), garantindo agilidade e satisfação no serviço.",
                "- Desenvolvimento de soft skills essenciais como gestão de tempo, comunicação clara e trabalho sob pressão em horários de pico.",
            ]
        }
    ],
    Academics: [
        {
            title: "Bacharelado em Ciências da Computação",
            school: "UNIFAVIP WYDEN",
            date: "Fevereiro 2025 - Atual",
            description: "Foco em Redes, Arquitetura de Computadores, Estrutura de Dados e Programação em C. Prática constante com Git e GitHub."
        },
        {
            title: "Certificação em Desenvolvimento Fullstack",
            school: "Rocketseat",
            date: "2025 - 380 Horas",
            description: "JavaScript, Node.js, Fastify, TypeScript, PostgreSQL, SQL, Knex, React, Next, TailwindCSS. Desenvolvimento de projetos práticos e aplicação de boas práticas de desenvolvimento."
        },
        {
            title: "Ensino Médio",
            school: "Escola de Referência em Ensino Médio de Panelas",
            date: "Fevereiro 2021 - Dezembro 2023",
            description: "Medalhista de Prata na Olimpíada Brasileira de Geografia e Menção Honrosa na Olimpíada Brasileira de Química."
        }
    ],
    TechStack: [
        {
            data: [
                "Backend: Node.js, Fastify, TypeScript, Python (Pandas/Typer), PostgreSQL",
                "Frontend: React, Next.js, TailwindCSS",
                "Infraestrutura: Linux (Ubuntu/CentOS), Redes, Gestão de Logs, Git/GitHub"

            ]
        }
    ]
}



