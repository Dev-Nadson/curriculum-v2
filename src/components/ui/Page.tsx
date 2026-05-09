import * as React from 'react'
import { cn } from '../../lib/utils'

export function PageContainer({ children, ...props }: React.ComponentProps<'body'>) {
    return (
        <body {...props} className='flex items-center flex-col font-serif'>
            {children}
        </body>
    )
}

export function CurriculumContainer({ children, ...props }: React.ComponentProps<'div'>) {
    return (
        <div {...props} className='w-185 h-screen'>
            <div className='flex flex-col gap-2 my-4'>
                {children}
            </div>
        </div>
    )
}

export function SessionContainer({ children, className }: React.ComponentProps<'div'>) {
    return (
        <section className={cn("flex flex-col gap-2 w-full", className)}>
            {children}
        </section>
    )
}

interface ISeparatorProps {
    title?: string
}

export function Separator({ title }: ISeparatorProps) {
    return (
        <div className="w-full">
            {title && <h3>{title}</h3>}
            <div className="rounded-full border border-stone-300"></div>
        </div>
    )
}