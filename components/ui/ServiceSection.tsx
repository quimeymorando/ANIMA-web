'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceSectionProps {
    numero: string
    tag: string
    titulo: string
    concepto: string
    descripcion: string
    highlights?: { label: string; valor: string }[]
    icono: LucideIcon
    invertido?: boolean
    visual: React.ReactNode
}

export default function ServiceSection({
    numero,
    tag,
    titulo,
    concepto,
    descripcion,
    highlights,
    icono: Icono,
    invertido = false,
    visual,
}: ServiceSectionProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const textContent = (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: invertido ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`flex flex-col justify-center order-1 ${invertido ? 'md:order-2' : 'md:order-1'}`}
        >
            {/* Número + Tag */}
            <div className="flex items-center gap-4 mb-6">
                <span
                    className="font-editorial text-5xl md:text-6xl leading-none"
                    style={{ color: 'rgba(201,168,76,0.15)', fontVariantNumeric: 'tabular-nums' }}
                >
                    {numero}
                </span>
                <div>
                    <span className="label-caps text-[var(--dorado)] tracking-[0.25em] text-xs block mb-1">
                        {tag}
                    </span>
                    <div
                        className="h-px w-12"
                        style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
                    />
                </div>
            </div>

            {/* Icono + Título */}
            <div className="flex items-start gap-3 mb-4">
                <div
                    className="mt-1 p-2 rounded-sm"
                    style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                    <Icono size={18} style={{ color: 'var(--dorado)' }} />
                </div>
                <h2 className="heading-md text-[var(--texto-claro)] leading-tight">{titulo}</h2>
            </div>

            {/* Concepto */}
            <p className="label-caps text-[var(--dorado-claro)] tracking-widest text-xs mb-5 opacity-80">
                — {concepto}
            </p>

            {/* Descripción */}
            <p className="body-lg text-[var(--texto-gris)] leading-relaxed mb-6 max-w-lg">
                {descripcion}
            </p>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-2">
                    {highlights.map((h) => (
                        <div
                            key={h.label}
                            className="px-4 py-3 rounded-sm"
                            style={{
                                background: 'rgba(26,58,42,0.4)',
                                border: '1px solid rgba(201,168,76,0.2)',
                            }}
                        >
                            <div className="font-editorial text-2xl text-gradient-dorado leading-normal mb-1">
                                {h.valor}
                            </div>
                            <div className="label-caps text-[var(--texto-gris)] text-xs tracking-widest">
                                {h.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    )

    const visualContent = (
        <motion.div
            initial={{ opacity: 0, x: invertido ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className={`relative flex items-center justify-center order-2 ${invertido ? 'md:order-1' : 'md:order-2'}`}
        >
            {visual}
        </motion.div>
    )

    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-24 border-b`}
            style={{ borderColor: 'rgba(201,168,76,0.08)' }}
        >
            {textContent}
            {visualContent}
        </div>
    )
}
