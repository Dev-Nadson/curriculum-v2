import { Mail, Phone, Linkedin, Github } from "lucide-react"
import type { ILinkProps } from "../data"

export function Header() {
    const links = [
        { icon: Phone, text: "(81) 989785231", url: "tel:5581989785231", link: true },
        { icon: Mail, text: "nadson.pros@gmail.com", url: "mailto:nadson.pros@gmail.com", link: true },
        { icon: Linkedin, text: "linkedin.com/in/nadson-alex", url: "https://linkedin.com/in/nadson-alex", link: true },
        { icon: Github, text: "github.com/Dev-Nadson", url: "https://github.com/Dev-Nadson", link: true },
    ]

    return (
        <header className="flex flex-col items-center leading-8 my-2">
            <h1 className="text-[40px]">NADSON ALEX DA SILVA</h1>

            <h3 className="text-[1.25rem]">
                Desenvolvedor Fullstack - <span className="text-[1.1rem]">Caruaru, Pernambuco</span>
            </h3>

            <section className="flex gap-4">
                {links.map((link: ILinkProps) => {
                    return (
                        <a href={link.url} className='flex text-sm items-center gap-1.5 text-blue-600'>
                            <link.icon className="size-5" />
                            <span>{link.text}</span>
                        </a>
                    )
                })}
            </section>
        </header>
    )
}
