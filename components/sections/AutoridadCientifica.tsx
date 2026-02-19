'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metricas = [
    {
        valor: '4x – 8x',
        label: 'Multiplicación de productividad',
        descripcion: 'Escalamos la producción de plantas cada tres semanas mediante micropropagación del meristema.',
        icono: '⬡',
        grande: false,
    },
    {
        valor: '8x',
        label: 'Reducción de tiempo',
        descripcion: 'En Doble Haploide: de 8 años a 1 año en desarrollo de variedades estables.',
        icono: '◎',
        grande: false,
    },
    {
        valor: '+40',
        label: 'Protocolos establecidos',
        descripcion: 'Protocolos exclusivos de cultivo validados y documentados en múltiples especies.',
        icono: '◈',
        grande: false,
    },
    {
        valor: '100%',
        label: 'Saneamiento de origen',
        descripcion: 'Eliminación de virus desde el inicio. Plantas sanas, libres de patógenos, con vigor superior.',
        icono: '◉',
        grande: false,
    },
]

const badges = [
    'No Transgénico',
    'Seguridad Alimentaria',
    'Trazabilidad Total',
    'Referentes Internacionales',
]

function MetricaCard({
    metrica,
    index,
}: {
    metrica: (typeof metricas)[0]
    index: number
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
            className="metrica-card"
        >
            {/* Icono decorativo */}
            <div className="text-[var(--dorado)] text-2xl mb-4" style={{ opacity: 0.4 }}>
                {metrica.icono}
            </div>

            {/* Valor */}
            <div className="font-editorial text-gradient-dorado mb-2 text-4xl sm:text-5xl">
                {metrica.valor}
            </div>

            {/* Label */}
            <div className="label-caps text-[var(--verde-musgo)] tracking-widest text-xs mb-3">
                {metrica.label}
            </div>

            {/* Descripción */}
            <p className="text-[var(--texto-oscuro)] text-sm leading-relaxed" style={{ opacity: 0.75 }}>
                {metrica.descripcion}
            </p>

            {/* Línea inferior dorada */}
            <div
                className="mt-4 h-px"
                style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
            />
        </motion.div>
    )
}

export default function AutoridadCientifica() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="autoridad"
            className="section-padding section-clara"
        >
            <div className="container-anima">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Autoridad Científica
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-oscuro)] mb-4"
                    >
                        Datos que respaldan
                        <br />
                        <span className="text-gradient-verde">nuestra innovación</span>
                    </motion.h2>

                    {/* Badge VITRON */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex justify-center mb-5"
                    >
                        <span
                            className="label-caps text-xs px-4 py-2 rounded-full tracking-widest"
                            style={{
                                border: '1px solid rgba(201,168,76,0.45)',
                                color: 'var(--dorado)',
                                background: 'rgba(201,168,76,0.06)',
                            }}
                        >
                            Impulsado por <strong>VITRON</strong>
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg max-w-xl mx-auto"
                        style={{ color: 'var(--verde-musgo)' }}
                    >
                        Más de tres décadas de investigación aplicada, protocolos exclusivos
                        y resultados comprobados en cultivos de alto valor.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {metricas.map((metrica, i) => (
                        <MetricaCard key={i} metrica={metrica} index={i} />
                    ))}
                </div>

                {/* Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mt-12"
                >
                    {badges.map((badge) => (
                        <span
                            key={badge}
                            className="label-caps text-xs px-4 py-2 border border-[rgba(201,168,76,0.3)] text-[var(--verde-musgo)] tracking-widest"
                        >
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
