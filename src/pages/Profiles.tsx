import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Download, Pencil, Plus } from "lucide-react"
import { Separator } from "@/components/ui/Page"
import { exportDb } from "@/lib/lowdb"
import { GetCurriculums } from "@/services/curriculum"
import type { ProfileData } from "@/typings"

export function Profiles() {
    const [profiles, setProfiles] = useState<ProfileData[]>([])

    useEffect(() => {
        GetCurriculums().then(setProfiles)
    }, [])

    return (
        <div className="w-185 flex flex-col gap-4 my-6">
            <div className="flex items-end justify-between gap-4">
                <div className="flex-1">
                    <Separator title="Currículos" />
                </div>

                <Link
                    to="/curriculo/novo"
                    className="flex shrink-0 items-center gap-1 rounded border border-stone-800 bg-stone-800 px-3 py-1.5 text-sm text-white transition-colors hover:bg-stone-700"
                >
                    <Plus className="size-3.5" />
                    Novo currículo
                </Link>
            </div>

            <section className="flex flex-col gap-3">
                {profiles.map((profile) => (
                    <div
                        key={profile.slug}
                        className="flex items-center gap-4 rounded border border-stone-300 p-4 transition-colors hover:bg-stone-50"
                    >
                        <Link to={`/curriculo/${profile.slug}`} className="flex flex-1 flex-col leading-5">
                            <h1 className="font-bold">{profile.Header.Name}</h1>
                            {profile.Header.Subtitle && (
                                <h2 className="ml-2 text-sm">{profile.Header.Subtitle}</h2>
                            )}
                        </Link>

                        <Link
                            to={`/curriculo/${profile.slug}/editar`}
                            className="flex shrink-0 items-center gap-1 text-sm text-blue-600 hover:underline"
                        >
                            <Pencil className="size-3.5" />
                            Editar
                        </Link>
                    </div>
                ))}
            </section>

            {/*
                As edições vivem no localStorage deste navegador. Em
                desenvolvimento elas são replicadas para src/data/db.json
                automaticamente; publicado, este botão é o caminho para levar o
                que foi editado de volta ao repositório.
            */}
            <button
                type="button"
                onClick={exportDb}
                className="flex items-center gap-1 self-start text-xs text-stone-500 hover:text-stone-800 hover:underline"
            >
                <Download className="size-3.5" />
                Exportar db.json
            </button>
        </div>
    )
}
