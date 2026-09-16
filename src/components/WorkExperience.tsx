import type { IExperienceProps } from "@/typings";
import { Separator } from "./ui/Page";

export function WorkExperience({ contents }: { contents: IExperienceProps[] }) {
    return (
        <div className="flex flex-col gap-0.5" >
            <Separator title="Experiência" />
            {contents.map((content, index) => {
                return (
                    <article key={index}>
                        <header className="flex justify-between mt-1 leading-tight">
                            <section className="flex flex-col ">
                                {content.enterprise && <h1 className="font-bold">{content.enterprise}</h1>}
                                {/* A página usa font-serif, que só tem Regular e Bold: pesos
                                    intermediários (500/600) caem para um dos dois. O destaque do
                                    cargo vem então de tamanho e tracking, não de font-weight. */}
                                <h2 className="ml-2 text-[13.5px] tracking-[0.015em]">{content.role}</h2>
                            </section>
                            <section className="flex flex-col text-end">
                                {content.worktype && <span>{content.worktype}</span>}
                                <span>{content.date}</span>
                            </section>
                        </header>

                        <ul className="ml-4 list-disc">
                            {content.description.map((item, i) => (
                                <li key={i} className="text-wrap text-justify leading-snug mb-0.5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                )
            })}
        </div>
    )
}
