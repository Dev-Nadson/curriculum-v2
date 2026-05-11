import type { ICompetencesProps } from "../data";
import { Separator } from "./ui/Page";

export function TechStack({ content }: { content: ICompetencesProps }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <Separator title="Tecnologias" />
            <section className="flex flex-col leading-5">
                {content.data.map((tech, index) => (
                    <p key={index} className="text-justify">
                        {tech}
                    </p>
                ))}
            </section>
        </div>
    )
}