'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col pattern-celular"
            style={{
                background: 'radial-gradient(ellipse at 40% 50%, #1a3a2a 0%, #0d1f15 60%, #060f09 100%)',
                overflow: 'hidden',
                padding: 0,
                margin: 0,
            }}
        >
            {/* Orbes de luz de fondo */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(74,140,92,0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />
            <div
                className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
            />

            {/* Línea decorativa superior */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                className="absolute top-0 left-0 right-0 h-px origin-left"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
            />

            {/* Etiqueta superior — centrada, se mantiene en su lugar */}
            <div className="relative z-10 flex justify-center pt-24 md:pt-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="inline-flex items-center gap-3"
                >
                    <span className="h-px w-8 bg-[var(--dorado)]" />
                    <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                        Biotecnología · Cannabis · Consciencia
                    </span>
                    <span className="h-px w-8 bg-[var(--dorado)]" />
                </motion.div>
            </div>

            {/* Layout: flex-col en mobile (imagen arriba, texto abajo), flex-row en desktop */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end flex-1 w-full pt-4 md:pt-0 h-full">

                {/* Imagen — align a la izquierda en mobile para mantener el estilo, abajo a la izquierda en desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
                    className="flex-shrink-0 self-start md:self-end mt-2 md:mt-0"
                    style={{
                        width: 'clamp(260px, 70vw, 580px)',
                        marginLeft: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingBottom: 0,
                        lineHeight: 0,
                    }}
                >
                    <img
                        src="/anima2.png"
                        alt="Hoja de cannabis"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            margin: 0,
                            padding: 0,
                            verticalAlign: 'bottom',
                        }}
                    />
                </motion.div>

                {/* Texto — centrado en mobile, a la derecha en desktop */}
                <div className="flex-1 flex items-center justify-center md:justify-start text-center md:text-left pb-20 md:pb-28 px-4 sm:px-6 md:px-10 z-20">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        className="heading-xl text-[var(--texto-claro)]"
                        style={{ lineHeight: '1.2' }}
                    >
                        El puente entre lo{' '}
                        <br className="block md:hidden" />
                        que somos{' '}
                        <em className="text-gradient-dorado not-italic block md:inline">biológicamente</em>
                        <br className="hidden md:block" />
                        y lo que podemos ser{' '}
                        <em className="text-gradient-verde not-italic block md:inline">conscientemente.</em>
                    </motion.h1>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown size={20} className="text-[var(--dorado)]" style={{ opacity: 0.6 }} />
                </motion.div>
            </motion.div>

            {/* Línea decorativa inferior */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
            />
        </section>
    )
}
