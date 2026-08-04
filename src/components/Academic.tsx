import type { IAcademicProps } from "@/typings";
import { Separator, SessionContainer } from "./ui/Page";

export function Academic({ contents }: { contents: IAcademicProps[] }) {
    return (
        <SessionContainer>
            <Separator title="Formação Acadêmica" />
            {contents.map((content, index) => (
                <section className="flex flex-col" key={index}>
                    <header className="flex flex-row justify-between leading-tight">
                        <div className=" flex flex-col">
                            <h1 className="font-bold">{content.title}</h1>
                            <h2 className="ml-2">{content.school}</h2>
                        </div>
                        <span className="shrink-0">{content.date}</span>
                    </header>

                    {content.description && (
                        <p className="ml-4 leading-snug">
                            {content.description}
                        </p>
                    )}
                </section>
            ))}
        </SessionContainer>
    )
}