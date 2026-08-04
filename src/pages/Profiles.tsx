import { Link } from "react-router-dom"
import { PROFILES } from "@/data"
import { Separator } from "@/components/ui/Page"

export function Profiles() {
    return (
        <div className="w-185 flex flex-col gap-4 my-6">
            <Separator title="Currículos" />

            <section className="flex flex-col gap-3">
                {PROFILES.map((profile) => (
                    <Link
                        key={profile.slug}
                        to={`/curriculo/${profile.slug}`}
                        className="flex flex-col rounded border border-stone-300 p-4 leading-5 transition-colors hover:bg-stone-50"
                    >
                        <h1 className="font-bold">{profile.Header.Name}</h1>
                        {profile.Header.Subtitle && (
                            <h2 className="ml-2 text-sm">{profile.Header.Subtitle}</h2>
                        )}
                    </Link>
                ))}
            </section>
        </div>
    )
}
