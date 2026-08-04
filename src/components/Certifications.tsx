import type { ICertificationsProps } from "@/typings";
import { Separator, SessionContainer } from "./ui/Page";

export function Certifications({ contents }: { contents: ICertificationsProps[] }) {
    return (
        <SessionContainer>
            <Separator title="Certificações" />
            {contents.map((content, index) => (
                <section className="flex flex-col" key={index}>
                    <header className="flex flex-row justify-between leading-tight">
                        <div className="flex flex-row gap-1.5">
                            <h1 className="font-bold">{content.title}</h1>
                            <h2>— {content.institution}</h2>
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