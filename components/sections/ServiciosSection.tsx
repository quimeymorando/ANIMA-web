'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const servicios = [
    {
        numero: '01',
        titulo: 'Cultivo de Tejidos',
        subtitulo: 'Micropropagación de élite',
        descripcion:
            'Genética de cultivo de tejidos, clones listos para producción, restauración de cultivares y almacenamiento genético a largo plazo.',
        // CMS-ready: este campo puede ser editado desde Sanity/Contentful
        tag: 'Producción',
    },
    {
        numero: '02',
        titulo: 'Genética y Saneamiento',
        subtitulo: 'Integridad desde el origen',
        descripcion:
            'Diagnósticos moleculares avanzados, pruebas de HLVd, huella dactilar de ADN y detección de patógenos para proteger genética de alto valor.',
        tag: 'Laboratorio',
    },
    {
        numero: '03',
        titulo: 'I+D+i',
        subtitulo: 'Ciencia en movimiento',
        descripcion:
            'Investigación continua en biología de cultivo de tejidos, diagnóstico molecular y genómica del cannabis. Protocolos propietarios en desarrollo.',
        tag: 'Investigación',
    },
    {
        numero: '04',
        titulo: 'Consultoría AgTech',
        subtitulo: 'Estrategia para grandes productores',
        descripcion:
            'Acompañamiento técnico integral para productores autorizados que buscan escalar operaciones con integridad genética y trazabilidad total.',
        tag: 'Consultoría',
    },
]

function ServicioCard({
    servicio,
    index,
}: {
    servicio: (typeof servicios)[0]
    index: number
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
            className="card-servicio group cursor-default"
        >
            {/* Número + Tag */}
            <div className="flex items-start justify-between mb-6">
                <span
                    className="font-editorial text-4xl"
                    style={{ color: 'rgba(201,168,76,0.2)' }}
                >
                    {servicio.numero}
                </span>
                <span className="label-caps text-xs px-3 py-1 border border-[rgba(201,168,76,0.2)] text-[var(--dorado)] tracking-widest">
                    {servicio.tag}
                </span>
            </div>

            {/* Título */}
            <h3 className="heading-md text-[var(--texto-claro)] mb-1 group-hover:text-[var(--dorado-claro)] transition-colors duration-300">
                {servicio.titulo}
            </h3>

            {/* Subtítulo */}
            <p className="label-caps text-[var(--verde-brote)] tracking-widest text-xs mb-4">
                {servicio.subtitulo}
            </p>

            {/* Descripción */}
            <p className="text-[var(--texto-gris)] text-sm leading-relaxed">
                {servicio.descripcion}
            </p>
        </motion.article>
    )
}

export default function ServiciosSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="servicios"
            className="section-padding"
            style={{
                background: 'linear-gradient(180deg, #0d1f15 0%, #111f18 50%, #0d1f15 100%)',
            }}
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
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Catálogo de Servicios
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-claro)] mb-4"
                    >
                        Tecnología que{' '}
                        <span className="text-gradient-dorado">transforma</span>
                        <br />
                        la industria
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg text-[var(--texto-gris)] max-w-xl mx-auto"
                    >
                        Servicios diseñados para grandes productores que exigen
                        integridad genética, escalabilidad y resultados comprobados.
                    </motion.p>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                    {servicios.map((servicio, i) => (
                        <ServicioCard key={i} servicio={servicio} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <Link
                        href="/servicios"
                        className="btn-anima group inline-flex"
                    >
                        Ver Catálogo Completo de Servicios
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
