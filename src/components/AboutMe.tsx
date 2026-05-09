import { Separator, SessionContainer } from "./ui/Page";

export function AboutMe({ content }: { content: string }) {
    return (
        <SessionContainer>
            <Separator title="Sobre" />
            <p className="text-justify pl-3 leading-5">
                {content}
            </p>
        </SessionContainer >
    )
}