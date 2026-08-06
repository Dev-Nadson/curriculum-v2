import { Globe } from "lucide-react"
import { ICONS } from "@/lib/icons"
import type { IHeaderProps, ILinkProps } from "@/typings"

export function Header({ content }: { content: IHeaderProps }) {

    return (
        <header className="flex flex-col items-center leading-tight mb-1">
            <h1 className="text-[26px] font-bold">{content.Name}</h1>

            {content.Subtitle && (
                <h2 className="text-[18px] mt-0.5">
                    {content.Subtitle}
                </h2>
            )}

            {/* nowrap por item + wrap no container: se não couber em uma linha,
                quebra entre os contatos, nunca no meio de um e-mail ou URL. */}
            <section className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1">
                {content.Links.map((link: ILinkProps, index: number) => {
                    const isExternal = link.url.startsWith("http")
                    // Globe como fallback: um db.json editado à mão pode trazer
                    // um nome de ícone que não existe no mapa.
                    const Icon = ICONS[link.icon] ?? Globe

                    return (
                        <a
                            // Índice, e não a url: há perfis com mais de um link
                            // sem url preenchida, que colidiriam como chave.
                            key={index}
                            href={link.url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                            className='flex text-xs items-center gap-1 text-blue-600 whitespace-nowrap'
                        >
                            <Icon className="size-3.5 shrink-0" />
                            <span>{link.text}</span>
                        </a>
                    )
                })}
            </section>
        </header>
    )
}
