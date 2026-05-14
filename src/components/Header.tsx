import type { IHeaderProps, ILinkProps } from "../typings"

export function Header({ content }: { content: IHeaderProps }) {

    return (
        <header className="flex flex-col items-center leading-8 my-2">
            <h1 className="text-[40px]">{content.Name}</h1>

            {content.Subtitle && (
                <h2 className="text-[1.25rem]">
                    {content.Subtitle}
                </h2>
            )}

            <section className="flex gap-4">
                {content.Links.map((link: ILinkProps) => {
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
