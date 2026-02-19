import Link from 'next/link'

const footerLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#investigacion', label: 'Investigación' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
    return (
        <footer className="bg-[var(--fondo-oscuro)] border-t border-[rgba(201,168,76,0.12)]">
            <div className="container-anima py-6 md:py-8">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
                    {/* Logo + Tagline */}
                    <div className="text-center md:text-left">
                        <div className="font-editorial text-xl tracking-[0.25em] text-[var(--dorado-claro)] mb-1">
                            ANIMA
                        </div>
                        <p className="label-caps text-[var(--texto-gris)] tracking-widest text-xs">
                            Ciencia · Experiencia · Propósito
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center md:justify-end gap-5">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="label-caps text-[var(--texto-gris)] hover:text-[var(--dorado-claro)] transition-colors duration-300 text-xs"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center">
                    <p className="text-[var(--texto-gris)] text-xs">
                        © {new Date().getFullYear()} ANIMA. Todos los derechos reservados.
                    </p>
                    <p className="text-[var(--texto-gris)] text-xs">
                        Biotecnología vegetal · No transgénico · Trazabilidad total
                    </p>
                </div>
            </div>
        </footer>

    )
}
