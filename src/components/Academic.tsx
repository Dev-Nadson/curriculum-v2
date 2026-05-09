import type { IAcademicProps } from "../data";
import { Separator, SessionContainer } from "./ui/Page";

export function Academic({ contents }: { contents: IAcademicProps[] }) {
    return (
        <SessionContainer>
            <Separator title="Formação Acadêmica" />
            {contents.map((content, index) => (
                <section className="flex flex-col" key={index}>
                    <header className="flex flex-row justify-between leading-5">
                        <div className=" flex flex-col">
                            <h1 className="font-bold">{content.title}</h1>
                            <h2 className="ml-2">{content.school}</h2>
                        </div>
                        <span>{content.date}</span>
                    </header>

                    <p className="ml-5 max-w-160">
                        {content.description}
                    </p>
                </section>
            ))}
        </SessionContainer>
    )
}