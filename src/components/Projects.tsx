import type { IProjectProps } from "@/typings";
import { Separator, SessionContainer } from "./ui/Page";

export function Projects({ contents }: { contents: IProjectProps[] }) {
    return (
        <SessionContainer>
            <Separator title="Projetos" />
            {contents.map((content, index) => (
                <section className="flex flex-col" key={index}>
                    <header className="flex flex-row justify-between leading-tight">
                        <div className="flex flex-row gap-1.5">
                            <h1 className="font-bold">{content.title}</h1>
                            {content.stack && <h2>— {content.stack}</h2>}
                        </div>
                        <div className="flex flex-col text-end shrink-0">
                            {content.url ? (
                                // O texto visível é a própria URL: parsers de ATS leem o texto, não o href.
                                <a
                                    href={content.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600"
                                >
                                    {content.url.replace(/^https?:\/\//, "")}
                                </a>
                            ) : (
                                content.date && <span>{content.date}</span>
                            )}
                        </div>
                    </header>

                    <p className="ml-4 leading-snug">
                        {content.description}
                    </p>
                </section>
            ))}
        </SessionContainer>
    )
}
