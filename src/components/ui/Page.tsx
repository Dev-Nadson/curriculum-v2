import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function PageContainer({ children, ...props }: React.ComponentProps<'div'>) {
    return (
        <div {...props} className='flex items-center flex-col font-serif'>
            {children}
            <Outlet />
        </div>
    )
}

export function CurriculumContainer({ children, ...props }: React.ComponentProps<'div'>) {
    // Sem h-screen: unidade de viewport torna a paginação do PDF imprevisível.
    return (
        <div {...props} className='w-185 print:w-full'>
            <div className='flex flex-col gap-1.5 mb-4 print:mb-0 text-[13px]'>
                {children}
                <Outlet />
            </div>
        </div>
    )
}

export function SessionContainer({ children, className }: React.ComponentProps<'div'>) {
    return (
        <section className={cn("flex flex-col gap-1 w-full", className)}>
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
            {title && <h3 className="text-[14px] font-bold uppercase tracking-wide leading-tight">{title}</h3>}
            <div className="rounded-full border-t border-stone-400"></div>
        </div>
    )
}