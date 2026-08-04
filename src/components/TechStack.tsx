import type { ITechStackProps } from "@/typings";
import { Separator, SessionContainer } from "./ui/Page";

export function TechStack({ content }: { content: ITechStackProps }) {
    return (
        <SessionContainer>
            <Separator title="Stack Técnica" />
            <section className="flex flex-col leading-snug">
                {content.data.map((tech, index) => (
                    <p key={index} className="text-justify">
                        {tech}
                    </p>
                ))}
            </section>
        </SessionContainer>
    )
}
