import * as React from "react"
import { Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Primitivos do formulário de currículo. Existem para que as oito seções não
 * repitam a mesma pilha de classes do Tailwind — e para que ajustar o visual do
 * formulário seja mudar um arquivo, não oito.
 */

const CONTROL = "rounded border border-stone-300 px-2 py-1.5 text-sm outline-none focus:border-stone-500"

type FieldProps = {
    label: string
    error?: string
    hint?: string
    className?: string
    children: React.ReactNode
}

/** Rótulo + controle + mensagem de erro. */
export function Field({ label, error, hint, className, children }: FieldProps) {
    return (
        <label className={cn("flex flex-col gap-1", className)}>
            <span className="text-xs font-bold uppercase tracking-wide text-stone-600">{label}</span>
            {children}
            {hint && !error && <span className="text-xs text-stone-500">{hint}</span>}
            {error && <span className="text-xs text-red-600">{error}</span>}
        </label>
    )
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
    return <input {...props} className={cn(CONTROL, className)} />
}

export function TextArea({ className, ...props }: React.ComponentProps<"textarea">) {
    return <textarea {...props} className={cn(CONTROL, "min-h-20 resize-y leading-relaxed", className)} />
}

export function Select({ className, ...props }: React.ComponentProps<"select">) {
    return <select {...props} className={cn(CONTROL, "bg-white", className)} />
}

export function Button({ className, type = "button", ...props }: React.ComponentProps<"button">) {
    return (
        <button
            {...props}
            type={type}
            className={cn(
                "rounded border border-stone-300 px-3 py-1.5 text-sm transition-colors",
                "hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
        />
    )
}

/** Bloco de uma seção do currículo. */
export function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="flex flex-col gap-3">
            <div className="w-full">
                <h3 className="text-[14px] font-bold uppercase tracking-wide leading-tight">{title}</h3>
                <div className="rounded-full border-t border-stone-400" />
            </div>
            {children}
        </section>
    )
}

type ArraySectionProps = {
    title: string
    addLabel: string
    empty: string
    count: number
    onAdd: () => void
    onRemove: (index: number) => void
    children: (index: number) => React.ReactNode
}

/**
 * Seção de lista: cartão por item com botão de remover, e um botão de
 * adicionar ao final. Serve links, experiências, formações, certificações e
 * projetos — todos têm exatamente essa mecânica.
 */
export function ArraySection({ title, addLabel, empty, count, onAdd, onRemove, children }: ArraySectionProps) {
    return (
        <FormSection title={title}>
            {count === 0 && <p className="text-sm text-stone-500">{empty}</p>}

            {Array.from({ length: count }, (_, index) => (
                <article key={index} className="flex flex-col gap-3 rounded border border-stone-200 p-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wide text-stone-500">
                            {title} {index + 1}
                        </span>
                        <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="flex items-center gap-1 text-xs text-red-600 hover:underline"
                        >
                            <Trash2 className="size-3.5" />
                            Remover
                        </button>
                    </div>
                    {children(index)}
                </article>
            ))}

            <Button onClick={onAdd} className="flex items-center gap-1 self-start">
                <Plus className="size-3.5" />
                {addLabel}
            </Button>
        </FormSection>
    )
}
