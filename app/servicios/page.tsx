'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useAnimationFrame } from 'framer-motion'
import {
    Microscope,
    Dna,
    FlaskConical,
    ShieldCheck,
    ArrowRight,
    Leaf,
} from 'lucide-react'
import ServiceSection from '@/components/ui/ServiceSection'

// ─── Visuals para cada servicio ───────────────────────────────────────────────

function VisualMicropropagacion() {
    return (
        <div
            className="relative w-full aspect-square max-w-sm mx-auto rounded-sm overflow-hidden"
            style={{ background: 'rgba(26,58,42,0.25)', border: '1px solid rgba(201,168,76,0.15)' }}
        >
            {/* Grid de placas de petri */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-6">
                {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="rounded-full flex items-center justify-center"
                        style={{
                            background: `radial-gradient(circle, rgba(26,58,42,0.8) 0%, rgba(13,31,21,0.9) 100%)`,
                            border: '1px solid rgba(201,168,76,0.25)',
                            aspectRatio: '1',
                        }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1/2 h-1/2 rounded-full"
                            style={{
                                background: `radial-gradient(circle, rgba(74,124,89,0.6) 0%, transparent 70%)`,
                            }}
                        />
                    </motion.div>
                ))}
            </div>
            {/* Overlay de datos técnicos */}
            <div className="absolute bottom-4 left-4 right-4">
                <div
                    className="px-3 py-2 rounded-sm text-xs font-mono"
                    style={{
                        background: 'rgba(13,31,21,0.85)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        color: 'var(--dorado-claro)',
                    }}
                >
                    <span style={{ opacity: 0.5 }}>PROTOCOLO:</span> Micropropagación del Meristema v4.2
                </div>
            </div>
            {/* Etiqueta superior */}
            <div
                className="absolute top-4 left-4 label-caps text-xs tracking-widest"
                style={{ color: 'var(--dorado)', opacity: 0.7 }}
            >
                Cultivo In-Vitro
            </div>
        </div>
    )
}

function HelixSVG() {
    const STEPS = 12
    const CX = 60
    const AMPLITUDE = 20
    const SPACING = 14

    const [phase, setPhase] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    useAnimationFrame((t) => {
        if (mounted) setPhase(t * 0.0008)
    })

    if (!mounted) return null

    const nodes = Array.from({ length: STEPS }, (_, i) => {
        const angle = phase + (i / STEPS) * Math.PI * 2
        const xOffset = Math.sin(angle) * AMPLITUDE
        const depth = Math.cos(angle)
        const r = 3 + depth * 1.5
        const opacity = 0.4 + (depth + 1) * 0.3
        return {
            cy: 14 + i * SPACING,
            leftCx: CX - xOffset,
            rightCx: CX + xOffset,
            r: Math.max(1.5, r),
            opacity,
            bridgeOpacity: Math.abs(depth) * 0.6 + 0.1,
        }
    })

    return (
        <svg viewBox="0 0 120 220" className="w-2/5 h-auto py-2">
            <defs>
                <linearGradient id="helixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#4a7c59" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.9" />
                </linearGradient>
            </defs>
            {nodes.map((n, i) => (
                <line key={`b-${i}`} x1={n.leftCx} y1={n.cy} x2={n.rightCx} y2={n.cy}
                    stroke="rgba(201,168,76,0.5)" strokeWidth={n.bridgeOpacity * 2} opacity={n.bridgeOpacity} />
            ))}
            {nodes.map((n, i) => (
                <circle key={`l-${i}`} cx={n.leftCx} cy={n.cy} r={n.r} fill="url(#helixGrad)" opacity={n.opacity} />
            ))}
            {nodes.map((n, i) => (
                <circle key={`r-${i}`} cx={n.rightCx} cy={n.cy} r={n.r} fill="url(#helixGrad)" opacity={n.opacity} />
            ))}
        </svg>
    )
}

function VisualSaneamiento() {
    return (
        <div
            className="relative w-full aspect-square max-w-sm mx-auto rounded-sm overflow-hidden flex items-center justify-center"
            style={{ background: 'rgba(13,31,21,0.4)', border: '1px solid rgba(201,168,76,0.15)' }}
        >
            <HelixSVG />

            {/* Badge HLVd */}
            <div
                className="absolute top-4 right-4 px-2 py-1 label-caps text-xs"
                style={{
                    background: 'rgba(26,58,42,0.8)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'var(--dorado-claro)',
                }}
            >
                HLVd FREE
            </div>
            <div
                className="absolute bottom-4 left-4 right-4 px-3 py-2 rounded-sm text-xs font-mono"
                style={{
                    background: 'rgba(13,31,21,0.85)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: 'var(--dorado-claro)',
                }}
            >
                <span style={{ opacity: 0.5 }}>STATUS:</span> Doble Haploide — Variedad Estable
            </div>
        </div>
    )
}


function VisualIDI() {
    const protocolos = ['+40', '3', '∞', '100%']
    const labels = ['Protocolos', 'Décadas', 'Especies', 'No-OGM']
    return (
        <div
            className="relative w-full max-w-sm mx-auto rounded-sm p-5"
            style={{ background: 'rgba(26,58,42,0.2)', border: '1px solid rgba(201,168,76,0.15)' }}
        >
            <div className="grid grid-cols-2 gap-4">
                {protocolos.map((val, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="flex flex-col items-center justify-center rounded-sm py-8"
                        style={{
                            background: 'rgba(13,31,21,0.5)',
                            border: '1px solid rgba(201,168,76,0.15)',
                        }}
                    >
                        <span className="font-editorial text-3xl text-gradient-dorado leading-normal mb-1">
                            {val}
                        </span>
                        <span className="label-caps text-xs tracking-widest" style={{ color: 'var(--texto-gris)' }}>
                            {labels[i]}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function VisualTrazabilidad() {
    const pasos = ['Laboratorio', 'Saneamiento', 'Genómica', 'Cultivo', 'Entrega']
    return (
        <div
            className="relative w-full aspect-square max-w-sm mx-auto rounded-sm overflow-hidden flex flex-col items-center justify-center gap-2 p-6"
            style={{ background: 'rgba(13,31,21,0.4)', border: '1px solid rgba(201,168,76,0.15)' }}
        >
            {pasos.map((paso, i) => (
                <motion.div
                    key={paso}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="w-full flex items-center gap-3"
                >
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono flex-shrink-0"
                        style={{
                            background: 'rgba(201,168,76,0.15)',
                            border: '1px solid rgba(201,168,76,0.4)',
                            color: 'var(--dorado)',
                        }}
                    >
                        {i + 1}
                    </div>
                    <div
                        className="flex-1 h-px"
                        style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}
                    />
                    <span
                        className="label-caps text-xs tracking-widest"
                        style={{ color: 'var(--texto-gris)' }}
                    >
                        {paso}
                    </span>
                </motion.div>
            ))}
            <div
                className="mt-4 px-3 py-2 w-full text-center label-caps text-xs"
                style={{
                    background: 'rgba(26,58,42,0.5)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: 'var(--dorado-claro)',
                }}
            >
                Trazabilidad 100% verificada
            </div>
        </div>
    )
}

// ─── Página principal ──────────────────────────────────────────────────────────

export default function ServiciosPage() {
    const heroRef = useRef(null)
    const heroInView = useInView(heroRef, { once: true })
    const ctaRef = useRef(null)
    const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

    return (
        <main className="min-h-screen bg-[var(--fondo-oscuro)]">

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section className="relative min-h-[90vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">

                <div ref={heroRef} className="container-anima relative z-10 text-center py-24 md:py-40">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Biotecnología de Precisión
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-editorial text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--texto-claro)] leading-[1.15] mb-6 max-w-4xl mx-auto px-2"
                    >
                        Ingeniería Consciente:{' '}
                        <br className="block md:hidden" />
                        <em className="text-gradient-dorado not-italic">La Ciencia</em>
                        <br className="hidden md:block" />
                        {' '}al Servicio de{' '}
                        <br className="block md:hidden" />
                        <em className="text-gradient-verde not-italic">la Vida.</em>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg text-lg md:text-base text-[var(--texto-gris)] max-w-2xl mx-auto mb-10 px-4"
                    >
                        Elevamos el estándar genético y productivo del cannabis a través de biotecnología de precisión.
                    </motion.p>

                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {['No Transgénico', 'Seguridad Alimentaria', '+40 Protocolos', 'Trazabilidad Total'].map((b) => (
                            <span
                                key={b}
                                className="label-caps text-xs px-4 py-2"
                                style={{
                                    border: '1px solid rgba(201,168,76,0.25)',
                                    color: 'var(--texto-gris)',
                                }}
                            >
                                {b}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
            <section className="section-padding">
                <div className="container-anima">

                    {/* Servicio 1 — Micropropagación */}
                    <ServiceSection
                        numero="01"
                        tag="Escalabilidad Masiva"
                        titulo="Micropropagación y Cultivo de Tejidos"
                        concepto="Multiplicación exponencial, calidad uniforme"
                        descripcion="Multiplicamos la producción de plantas entre 4x y 8x cada tres semanas mediante micropropagación del meristema. Material vegetal uniforme, vigoroso y listo para producción. Una ventaja que ningún vivero tradicional puede igualar."
                        highlights={[
                            { valor: '4x–8x', label: 'Multiplicación' },
                            { valor: '3 sem.', label: 'Ciclo de producción' },
                        ]}
                        icono={Microscope}
                        invertido={false}
                        visual={<VisualMicropropagacion />}
                    />

                    {/* Servicio 2 — Saneamiento y Genética */}
                    <ServiceSection
                        numero="02"
                        tag="Pureza desde el Origen"
                        titulo="Saneamiento y Genética"
                        concepto="El punto de partida limpio que todo cultivo merece"
                        descripcion="Eliminamos los virus desde el origen. Saneamiento de cultivos y genética libre de patógenos, incluyendo HLVd. Garantizamos la integridad genética de cada variedad. Nuestra tecnología de Doble Haploide reduce el tiempo de desarrollo de variedades estables de 8 años a tan solo 1 año."
                        highlights={[
                            { valor: '8 → 1', label: 'Años a meses (Doble Haploide)' },
                            { valor: '100%', label: 'Libre de HLVd' },
                        ]}
                        icono={Dna}
                        invertido={true}
                        visual={<VisualSaneamiento />}
                    />

                    {/* Servicio 3 — I+D+i */}
                    <ServiceSection
                        numero="03"
                        tag="Rigor Científico"
                        titulo="I+D+i y Protocolos Exclusivos"
                        concepto="Más de tres décadas de investigación aplicada"
                        descripcion="Más de 40 protocolos establecidos y documentados en múltiples especies. No somos transgénicos; somos perfeccionistas de la naturaleza. Desarrollamos soluciones a medida para la industria del THC y grandes empresas que buscan diferenciarse con ciencia real. Fundados en los años 90, con conocimiento transmitido por generaciones."
                        highlights={[
                            { valor: '+40', label: 'Protocolos exclusivos' },
                            { valor: '30+', label: 'Años de investigación' },
                        ]}
                        icono={FlaskConical}
                        invertido={false}
                        visual={<VisualIDI />}
                    />

                    {/* Servicio 4 — Seguridad y Trazabilidad */}
                    <ServiceSection
                        numero="04"
                        tag="Confianza Global"
                        titulo="Seguridad y Trazabilidad"
                        concepto="Del laboratorio al cultivo final, sin interrupciones"
                        descripcion="Referentes en seguridad alimentaria. Ofrecemos trazabilidad completa desde la planta en laboratorio hasta el producto final. Producción sin tierra, en medios hidropónicos que aseguran sanidad total. Una ventaja que genera confianza y valor agregado en mercados internacionales como China, Alemania y Estados Unidos."
                        highlights={[
                            { valor: '100%', label: 'Trazabilidad verificada' },
                            { valor: 'Global', label: 'Alcance internacional' },
                        ]}
                        icono={ShieldCheck}
                        invertido={true}
                        visual={<VisualTrazabilidad />}
                    />

                </div>
            </section>

            {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
            <section
                ref={ctaRef}
                className="relative section-padding overflow-hidden"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(26,58,42,0.5) 0%, var(--fondo-oscuro) 70%)' }}
            >
                <div className="container-anima relative z-10 text-center">
                    {/* Icono */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <div
                            className="p-4 rounded-full"
                            style={{
                                background: 'rgba(201,168,76,0.08)',
                                border: '1px solid rgba(201,168,76,0.25)',
                            }}
                        >
                            <Leaf size={28} style={{ color: 'var(--dorado)' }} />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-claro)] mb-4"
                    >
                        ¿Listo para evolucionar
                        <br />
                        <span className="text-gradient-dorado">tu cultivo?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg text-[var(--texto-gris)] max-w-xl mx-auto mb-10"
                    >
                        Trabajamos con grandes productores que buscan diferenciarse con ciencia real.
                        Agendá una consultoría técnica y descubrí cómo ANIMA puede transformar tu operación.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-6"
                    >
                        <a
                            href="/#contacto"
                            className="btn-anima group text-sm"
                        >
                            Agendar Consultoría Técnica
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="/"
                            className="label-caps text-[var(--texto-gris)] hover:text-[var(--dorado-claro)] transition-colors duration-300 text-xs tracking-widest"
                        >
                            ← Volver al inicio
                        </a>
                    </motion.div>


                </div>
            </section>

        </main>
    )
}
