import type { ICertificationsProps } from "../typings";
import { Separator, SessionContainer } from "./ui/Page";

export function Certifications({ contents }: { contents: ICertificationsProps[] }) {
    return (
        <SessionContainer>
            <Separator title="Certificações" />
            {contents.map((content, index) => (
                <section className="flex flex-col" key={index}>
                    <header className="flex flex-row justify-between leading-5">
                        <div className=" flex flex-col">
                            <h1 className="font-bold">{content.title}</h1>
                            <h2 className="ml-2">{content.institution}</h2>
                        </div>
                        <span>{content.date}</span>
                    </header>

                    <p className="ml-5 max-w-160 leading-5">
                        {content.description}
                    </p>
                </section>
            ))}
        </SessionContainer>
    )
}