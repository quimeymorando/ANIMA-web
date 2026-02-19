'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Building2, MessageSquare } from 'lucide-react'

export default function ContactoSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // CMS-ready: aquí se conectará con el backend o servicio de email
        setEnviado(true)
    }

    return (
        <section
            id="contacto"
            className="section-padding section-clara"
        >
            <div className="container-anima">
                <div ref={ref} className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7 }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                            <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                                Contacto
                            </span>
                            <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="heading-lg text-[var(--texto-oscuro)] mb-4"
                        >
                            Iniciemos una
                            <br />
                            <span className="text-gradient-verde">conversación</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="body-lg text-[var(--verde-musgo)]"
                        >
                            Trabajamos con grandes productores y empresas que buscan
                            elevar sus operaciones con biotecnología de vanguardia.
                        </motion.p>
                    </div>

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        {!enviado ? (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Nombre */}
                                <div className="relative">
                                    <label htmlFor="nombre" className="label-caps text-xs text-[var(--verde-musgo)] tracking-widest block mb-2">
                                        Nombre
                                    </label>
                                    <div className="relative">
                                        <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--dorado)]" style={{ opacity: 0.5 }} />
                                        <input
                                            id="nombre"
                                            type="text"
                                            required
                                            placeholder="Tu nombre o empresa"
                                            className="w-full pl-10 pr-4 py-3 bg-white border border-[rgba(201,168,76,0.2)] text-[var(--texto-oscuro)] placeholder-[var(--texto-gris)] text-sm focus:outline-none focus:border-[var(--dorado)] transition-colors duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="label-caps text-xs text-[var(--verde-musgo)] tracking-widest block mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--dorado)]" style={{ opacity: 0.5 }} />
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="tu@empresa.com"
                                            className="w-full pl-10 pr-4 py-3 bg-white border border-[rgba(201,168,76,0.2)] text-[var(--texto-oscuro)] placeholder-[var(--texto-gris)] text-sm focus:outline-none focus:border-[var(--dorado)] transition-colors duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="label-caps text-xs text-[var(--verde-musgo)] tracking-widest block mb-2">
                                        Mensaje
                                    </label>
                                    <div className="relative">
                                        <MessageSquare size={16} className="absolute left-4 top-4 text-[var(--dorado)]" style={{ opacity: 0.5 }} />
                                        <textarea
                                            id="mensaje"
                                            required
                                            rows={4}
                                            placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                                            className="w-full pl-10 pr-4 py-3 bg-white border border-[rgba(201,168,76,0.2)] text-[var(--texto-oscuro)] placeholder-[var(--texto-gris)] text-sm focus:outline-none focus:border-[var(--dorado)] transition-colors duration-300 resize-none"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn-anima w-full justify-center group">
                                    Enviar Mensaje
                                    <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-16 border border-[rgba(201,168,76,0.2)]"
                            >
                                <div className="text-4xl mb-4">🌿</div>
                                <h3 className="heading-md text-[var(--texto-oscuro)] mb-2">Mensaje recibido</h3>
                                <p className="text-[var(--verde-musgo)] text-sm">
                                    Nos pondremos en contacto contigo pronto.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
