import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FormProvider, useForm } from "react-hook-form"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Button } from "@/components/form/Fields"
import {
    AboutMeFields,
    AcademicsFields,
    CertificationsFields,
    ExperiencesFields,
    HeaderFields,
    ProjectsFields,
    TextListFields,
} from "@/components/form/Sections"
import { CreateCurriculum, EditCurriculum, GetCurriculum, toFormValues } from "@/services/curriculum"
import {
    curriculumSchema,
    EMPTY_CURRICULUM,
    type CurriculumFormValues,
    type CurriculumInput,
} from "@/schemas/curriculum"

/**
 * Formulário de currículo, usado para criar e para editar.
 *
 * Sem `slug` na rota (/curriculo/novo), abre em branco. Com `slug`
 * (/curriculo/:slug/editar), carrega o currículo e faz `reset` nos valores.
 */
export function CurriculumForm() {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()

    const isEditing = Boolean(slug)
    const [loading, setLoading] = useState(isEditing)
    const [failure, setFailure] = useState<string>()

    const form = useForm<CurriculumFormValues, unknown, CurriculumInput>({
        resolver: standardSchemaResolver(curriculumSchema),
        defaultValues: EMPTY_CURRICULUM,
    })

    useEffect(() => {
        if (!slug) return

        let active = true

        GetCurriculum(slug).then((profile) => {
            if (!active) return

            // Currículo inexistente: volta para a lista em vez de deixar um
            // formulário vazio que salvaria por cima de nada.
            if (!profile) return navigate("/", { replace: true })

            form.reset(toFormValues(profile))
            setLoading(false)
        })

        return () => {
            active = false
        }
    }, [slug, form, navigate])

    async function onSubmit(input: CurriculumInput) {
        setFailure(undefined)

        try {
            const profile = slug ? await EditCurriculum(slug, input) : await CreateCurriculum(input)
            navigate(`/curriculo/${profile.slug}`)
        } catch (error) {
            setFailure(error instanceof Error ? error.message : "Não foi possível salvar o currículo.")
        }
    }

    if (loading) return <p className="my-6 text-sm text-stone-500">Carregando…</p>

    const { isSubmitting } = form.formState

    return (
        <div className="w-185 my-6">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">{isEditing ? "Editar currículo" : "Novo currículo"}</h1>
                <Link to={isEditing ? `/curriculo/${slug}` : "/"} className="text-sm text-blue-600 hover:underline">
                    Cancelar
                </Link>
            </div>

            {isEditing && (
                <p className="mb-4 text-xs text-stone-500">
                    O endereço <code>/curriculo/{slug}</code> não muda ao editar, para não quebrar links já
                    compartilhados.
                </p>
            )}

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <HeaderFields />
                    <AboutMeFields />
                    <ExperiencesFields />
                    <AcademicsFields />
                    <CertificationsFields />
                    <ProjectsFields />
                    <TextListFields />

                    {failure && <p className="text-sm text-red-600">{failure}</p>}

                    <div className="flex items-center gap-3 border-t border-stone-300 pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="border-stone-800 bg-stone-800 text-white hover:bg-stone-700"
                        >
                            {isSubmitting ? "Salvando…" : "Salvar currículo"}
                        </Button>

                        <span className="text-xs text-stone-500">
                            Seções deixadas em branco não aparecem no currículo.
                        </span>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
