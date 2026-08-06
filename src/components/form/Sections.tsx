import { useFieldArray, useFormContext } from "react-hook-form"
import { ICON_LABELS, ICON_NAMES } from "@/lib/icons"
import { EMPTY_ITEMS, type CurriculumFormValues } from "@/schemas/curriculum"
import { ArraySection, Field, FormSection, Input, Select, TextArea } from "./Fields"

/**
 * Uma seção do formulário por seção do currículo, espelhando os componentes de
 * exibição (@/components/*). Todas consomem o formulário via `useFormContext`,
 * em vez de receber `control` por prop, para não encadear props por três níveis.
 *
 * As listas de texto (competências, stack, idiomas e os bullets de experiência)
 * são um textarea com uma linha por item; a conversão para array acontece no
 * schema (@/schemas/curriculum).
 */

const LINE_HINT = "Uma linha por item."

function useCurriculumForm() {
    return useFormContext<CurriculumFormValues>()
}

export function HeaderFields() {
    const { register, control, formState } = useCurriculumForm()
    const { errors } = formState
    const links = useFieldArray({ control, name: "Header.Links" })

    return (
        <>
            <FormSection title="Identificação">
                <Field label="Nome" error={errors.Header?.Name?.message}>
                    <Input {...register("Header.Name")} placeholder="NADSON ALEX DA SILVA" />
                </Field>

                <Field
                    label="Subtítulo"
                    hint="Cargo alvo e principais tecnologias."
                    error={errors.Header?.Subtitle?.message}
                >
                    <Input
                        {...register("Header.Subtitle")}
                        placeholder="Desenvolvedor Fullstack | Node.js, React e TypeScript"
                    />
                </Field>
            </FormSection>

            <ArraySection
                title="Contato"
                addLabel="Adicionar contato"
                empty="Nenhum contato adicionado."
                count={links.fields.length}
                onAdd={() => links.append(EMPTY_ITEMS.link)}
                onRemove={links.remove}
            >
                {(index) => (
                    <div className="grid grid-cols-[8rem_1fr_1fr] gap-3">
                        <Field label="Ícone">
                            <Select {...register(`Header.Links.${index}.icon`)}>
                                {ICON_NAMES.map((name) => (
                                    <option key={name} value={name}>
                                        {ICON_LABELS[name]}
                                    </option>
                                ))}
                            </Select>
                        </Field>

                        <Field label="Texto" error={errors.Header?.Links?.[index]?.text?.message}>
                            <Input {...register(`Header.Links.${index}.text`)} placeholder="github.com/usuario" />
                        </Field>

                        <Field label="URL" hint="tel:, mailto: ou https://">
                            <Input {...register(`Header.Links.${index}.url`)} placeholder="https://github.com/usuario" />
                        </Field>
                    </div>
                )}
            </ArraySection>
        </>
    )
}

export function AboutMeFields() {
    const { register } = useCurriculumForm()

    return (
        <FormSection title="Sobre">
            <Field label="Resumo" hint="Deixe em branco para omitir a seção do currículo.">
                <TextArea {...register("AboutMe")} rows={5} />
            </Field>
        </FormSection>
    )
}

export function ExperiencesFields() {
    const { register, control, formState } = useCurriculumForm()
    const { errors } = formState
    const experiences = useFieldArray({ control, name: "Experiences" })

    return (
        <ArraySection
            title="Experiência"
            addLabel="Adicionar experiência"
            empty="Nenhuma experiência adicionada."
            count={experiences.fields.length}
            onAdd={() => experiences.append(EMPTY_ITEMS.experience)}
            onRemove={experiences.remove}
        >
            {(index) => (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Empresa">
                            <Input {...register(`Experiences.${index}.enterprise`)} placeholder="CATSUC LABS" />
                        </Field>

                        <Field label="Cargo" error={errors.Experiences?.[index]?.role?.message}>
                            <Input
                                {...register(`Experiences.${index}.role`)}
                                placeholder="Desenvolvedor Fullstack Júnior"
                            />
                        </Field>

                        <Field label="Período" error={errors.Experiences?.[index]?.date?.message}>
                            <Input {...register(`Experiences.${index}.date`)} placeholder="Maio 2026 - Atual" />
                        </Field>

                        <Field label="Modalidade">
                            <Input {...register(`Experiences.${index}.worktype`)} placeholder="Presencial" />
                        </Field>
                    </div>

                    <Field label="Atividades" hint={LINE_HINT}>
                        <TextArea {...register(`Experiences.${index}.description`)} rows={6} />
                    </Field>
                </>
            )}
        </ArraySection>
    )
}

export function AcademicsFields() {
    const { register, control, formState } = useCurriculumForm()
    const { errors } = formState
    const academics = useFieldArray({ control, name: "Academics" })

    return (
        <ArraySection
            title="Formação"
            addLabel="Adicionar formação"
            empty="Nenhuma formação adicionada."
            count={academics.fields.length}
            onAdd={() => academics.append(EMPTY_ITEMS.academic)}
            onRemove={academics.remove}
        >
            {(index) => (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Curso" error={errors.Academics?.[index]?.title?.message}>
                            <Input
                                {...register(`Academics.${index}.title`)}
                                placeholder="Bacharelado em Ciência da Computação"
                            />
                        </Field>

                        <Field label="Instituição" error={errors.Academics?.[index]?.school?.message}>
                            <Input {...register(`Academics.${index}.school`)} placeholder="UNIFAVIP WYDEN" />
                        </Field>
                    </div>

                    <Field label="Período" error={errors.Academics?.[index]?.date?.message}>
                        <Input {...register(`Academics.${index}.date`)} placeholder="Fevereiro 2025 - Dezembro 2029" />
                    </Field>

                    <Field label="Descrição">
                        <TextArea {...register(`Academics.${index}.description`)} rows={3} />
                    </Field>
                </>
            )}
        </ArraySection>
    )
}

export function CertificationsFields() {
    const { register, control, formState } = useCurriculumForm()
    const { errors } = formState
    const certifications = useFieldArray({ control, name: "Certifications" })

    return (
        <ArraySection
            title="Certificação"
            addLabel="Adicionar certificação"
            empty="Nenhuma certificação adicionada."
            count={certifications.fields.length}
            onAdd={() => certifications.append(EMPTY_ITEMS.certification)}
            onRemove={certifications.remove}
        >
            {(index) => (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Título" error={errors.Certifications?.[index]?.title?.message}>
                            <Input
                                {...register(`Certifications.${index}.title`)}
                                placeholder="Formação Fullstack — Node.js e React"
                            />
                        </Field>

                        <Field label="Instituição" error={errors.Certifications?.[index]?.institution?.message}>
                            <Input {...register(`Certifications.${index}.institution`)} placeholder="Rocketseat" />
                        </Field>
                    </div>

                    <Field label="Data" error={errors.Certifications?.[index]?.date?.message}>
                        <Input {...register(`Certifications.${index}.date`)} placeholder="2025 • 380 horas" />
                    </Field>

                    <Field label="Descrição">
                        <TextArea {...register(`Certifications.${index}.description`)} rows={3} />
                    </Field>
                </>
            )}
        </ArraySection>
    )
}

export function ProjectsFields() {
    const { register, control, formState } = useCurriculumForm()
    const { errors } = formState
    const projects = useFieldArray({ control, name: "Projects" })

    return (
        <ArraySection
            title="Projeto"
            addLabel="Adicionar projeto"
            empty="Nenhum projeto adicionado."
            count={projects.fields.length}
            onAdd={() => projects.append(EMPTY_ITEMS.project)}
            onRemove={projects.remove}
        >
            {(index) => (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Título" error={errors.Projects?.[index]?.title?.message}>
                            <Input {...register(`Projects.${index}.title`)} placeholder="Sistema de Inventário de TI" />
                        </Field>

                        <Field label="Stack">
                            <Input {...register(`Projects.${index}.stack`)} placeholder="Python, SQLite, POO" />
                        </Field>

                        {/* Sem url, o currículo exibe a data no lugar do link. */}
                        <Field label="URL" hint="Sem URL, a data aparece no lugar do link.">
                            <Input {...register(`Projects.${index}.url`)} placeholder="https://github.com/..." />
                        </Field>

                        <Field label="Data">
                            <Input {...register(`Projects.${index}.date`)} placeholder="2025" />
                        </Field>
                    </div>

                    <Field label="Descrição">
                        <TextArea {...register(`Projects.${index}.description`)} rows={3} />
                    </Field>
                </>
            )}
        </ArraySection>
    )
}

export function TextListFields() {
    const { register } = useCurriculumForm()

    return (
        <>
            <FormSection title="Competências Técnicas">
                <Field label="Competências" hint={LINE_HINT}>
                    <TextArea {...register("Competences")} rows={5} />
                </Field>
            </FormSection>

            <FormSection title="Stack Técnica">
                <Field label="Stack" hint={LINE_HINT}>
                    <TextArea {...register("TechStack")} rows={5} />
                </Field>
            </FormSection>

            <FormSection title="Idiomas">
                <Field label="Idiomas" hint={LINE_HINT}>
                    <TextArea {...register("Languages")} rows={3} />
                </Field>
            </FormSection>
        </>
    )
}
