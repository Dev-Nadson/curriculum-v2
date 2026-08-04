import type { ICompetencesProps } from "@/typings";
import { Separator, SessionContainer } from "./ui/Page";

interface ICompetencesComponentProps {
    content: ICompetencesProps
    title?: string
}

export function Competences({ content, title = "Competências Técnicas" }: ICompetencesComponentProps) {
    return (
        <SessionContainer>
            <Separator title={title} />
            <section className="flex flex-col leading-snug">
                {content.data.map((item, index) => (
                    <p key={index} className="text-justify">
                        {item}
                    </p>
                ))}
            </section>
        </SessionContainer>
    )
}
