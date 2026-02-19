'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fragmentos = [
    'Durante mucho tiempo, hemos separado la ciencia de la experiencia.',
    'Hemos separado la biología de la conciencia.',
    'Hemos separado la planta del propósito.',
    'Hoy elegimos recordar.',
]

const manifiesto = [
    { texto: 'ANIMA no es una marca. Es un espacio.', destacado: true },
    {
        texto: 'Un espacio donde la ciencia sirve a la expansión humana. Donde la experiencia se honra con rigor. Donde la comunidad reemplaza la competencia.',
        destacado: false,
    },
    { texto: 'No venimos a vender una planta.', destacado: false },
    { texto: 'Venimos a elevar la conversación.', destacado: true },
    { texto: 'No venimos a imponer una verdad.', destacado: false },
    { texto: 'Venimos a explorarla juntos.', destacado: true },
]

function AnimatedLine({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default function ManifiestoSection() {
    return (
        <section
            id="manifiesto"
            className="relative section-padding overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #060f09 0%, #0d1f15 30%, #111f18 70%, #0d1f15 100%)',
            }}
        >
            {/* Motivo visual de fondo */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, rgba(74,140,92,0.06) 0%, transparent 50%)`,
                }}
            />

            {/* Contenido — márgenes amplios para que respire */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">

                {/* ── Nuevo Titular ─────────────────────────────────────── */}
                <AnimatedLine className="mb-14">
                    <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-gradient-dorado leading-tight">
                        Esencia ANIMA
                    </h2>
                </AnimatedLine>

                {/* ── Fragmentos introductorios ─────────────────────────── */}
                <div className="mb-14 space-y-4">
                    {fragmentos.map((frag, i) => (
                        <AnimatedLine key={i} delay={i * 0.12}>
                            <p
                                className={`text-lg md:text-xl leading-relaxed ${i === fragmentos.length - 1
                                    ? 'text-[var(--dorado-claro)] font-medium mt-6 italic font-editorial'
                                    : 'text-[var(--texto-gris)]'
                                    }`}
                            >
                                {frag}
                            </p>
                        </AnimatedLine>
                    ))}
                </div>

                {/* ── Divisor ───────────────────────────────────────────── */}
                <AnimatedLine delay={0.4} className="mb-14">
                    <div className="divider-dorado" />
                </AnimatedLine>

                {/* ── Manifiesto principal ──────────────────────────────── */}
                <div className="space-y-6">
                    {manifiesto.map((item, i) => (
                        <AnimatedLine key={i} delay={i * 0.1}>
                            {item.destacado ? (
                                /* Frases destacadas — serif dorado en cursiva */
                                <p className="font-editorial text-2xl md:text-3xl text-gradient-dorado italic leading-snug">
                                    {item.texto}
                                </p>
                            ) : (
                                /* Frases normales — más grandes que antes */
                                <p className="text-lg md:text-xl text-[var(--texto-claro)] leading-relaxed">
                                    {item.texto}
                                </p>
                            )}
                        </AnimatedLine>
                    ))}
                </div>

                {/* ── Cierre ────────────────────────────────────────────── */}
                <div className="mt-20">
                    <AnimatedLine delay={0.2} className="py-8">
                        <div className="divider-dorado" />
                    </AnimatedLine>
                    <AnimatedLine delay={0.4}>
                        <p className="font-editorial text-xl md:text-2xl text-[var(--dorado-claro)] italic mb-6 leading-relaxed">
                            &ldquo;Si sientes que el mundo necesita una relación más madura,
                            <br className="hidden md:block" />
                            más elegante y más responsable con el cannabis&hellip;&rdquo;
                        </p>
                    </AnimatedLine>
                    <AnimatedLine delay={0.6}>
                        <p className="font-editorial text-3xl md:text-4xl text-[var(--texto-claro)]">
                            Ya eres parte de ANIMA.
                        </p>
                    </AnimatedLine>
                    <AnimatedLine delay={0.8}>
                        <p className="label-caps text-[var(--dorado)] tracking-[0.4em] mt-8 text-xs">
                            Bienvenidos.
                        </p>
                    </AnimatedLine>
                </div>
            </div>
        </section>
    )
}
