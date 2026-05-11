import type { IExperienceProps } from "../data";
import { Separator } from "./ui/Page";

export function WorkExperience({ contents }: { contents: IExperienceProps[] }) {
    return (
        <div className="flex flex-col gap-0.5" >
            <Separator title="Experiência" />
            {contents.map((content, index) => {
                return (
                    <main key={index}>
                        <header className="flex justify-between my-1">
                            <section className="flex flex-col ">
                                {content.enterprise && <h1 className="font-bold leading-5">{content.enterprise}</h1>}
                                <h2 className="ml-2">{content.role}</h2>
                            </section>
                            <section className="flex flex-col leading-5 text-end">
                                {content.worktype && <span>{content.worktype}</span>}
                                <span>{content.date}</span>
                            </section>
                        </header>

                        {content.description.map((item, i) => (
                            <ul key={i} className="ml-5 pr-8 text-justify">
                                <li className="text-wrap mb-1.5 leading-4.5">
                                    {item}
                                </li>
                            </ul>
                        ))}
                    </main>
                )
            })}
        </div>
    )
}



export function Experience({ experiences }: { experiences: IExperienceProps[] }) {
    return (
        <>
            {experiences.map((exp, index) => {
                return (
                    <div key={index} className="flex flex-col gap-0.5" >
                        <div className="flex justify-between mt-1">
                            <div className="flex flex-col ">
                                <h1 className="font-bold leading-5">{exp.enterprise}</h1>
                                <h2 className="ml-2">{exp.role}</h2>
                            </div>
                            <div className="flex flex-col leading-5 text-end">
                                <h2>{exp.worktype}</h2>
                                <h2>{exp.date}</h2>
                            </div>
                        </div>
                        <ul className="max-w-170 ml-5">
                            {exp.description.map((item, i) => (
                                <li key={i} className="text-wrap mb-1.5 leading-5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </>
    )
}