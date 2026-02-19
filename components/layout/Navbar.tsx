'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
    { href: '/servicios', label: 'Servicios', isPage: true },
    { href: '#investigacion', label: 'Investigación', isPage: false },
    { href: '#nosotros', label: 'Nosotros', isPage: false },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setMenuOpen(false)
        if (pathname !== '/') {
            router.push('/' + href)
            return
        }
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    const handleContacto = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.preventDefault()
        setMenuOpen(false)
        if (pathname !== '/') {
            router.push('/#contacto')
            return
        }
        document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-[rgba(13,31,21,0.85)] backdrop-blur-md border-b border-[rgba(201,168,76,0.15)]'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container-anima">
                    <nav className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="font-editorial text-xl md:text-2xl tracking-[0.2em] text-[var(--texto-claro)] hover:text-[var(--dorado-claro)] transition-colors duration-300"
                        >
                            ANIMA
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) =>
                                link.isPage ? (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="label-caps text-[var(--texto-gris)] hover:text-[var(--dorado-claro)] transition-colors duration-300 relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--dorado)] group-hover:w-full transition-all duration-300" />
                                    </Link>
                                ) : (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleAnchorClick(e, link.href)}
                                        className="label-caps text-[var(--texto-gris)] hover:text-[var(--dorado-claro)] transition-colors duration-300 relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--dorado)] group-hover:w-full transition-all duration-300" />
                                    </a>
                                )
                            )}
                        </div>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#contacto"
                                onClick={handleContacto}
                                className="hidden md:inline-flex btn-anima text-xs"
                            >
                                Contactar
                            </a>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden p-2 text-[var(--texto-claro)] hover:text-[var(--dorado-claro)] transition-colors"
                                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            >
                                {menuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-40 bg-[var(--fondo-oscuro)] flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-5 right-5 p-2 text-[var(--texto-claro)]"
                            aria-label="Cerrar menú"
                        >
                            <X size={24} />
                        </button>

                        <div className="font-editorial text-3xl tracking-[0.3em] text-[var(--dorado-claro)] mb-12">
                            ANIMA
                        </div>

                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) =>
                                link.isPage ? (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-editorial text-2xl text-[var(--texto-claro)] hover:text-[var(--dorado-claro)] transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleAnchorClick(e, link.href)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                        className="font-editorial text-2xl text-[var(--texto-claro)] hover:text-[var(--dorado-claro)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </motion.a>
                                )
                            )}

                            <motion.a
                                href="#contacto"
                                onClick={handleContacto}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 btn-anima"
                            >
                                Contactar
                            </motion.a>
                        </nav>

                        <p className="absolute bottom-10 label-caps text-[var(--texto-gris)] tracking-widest">
                            Ciencia · Experiencia · Propósito
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
