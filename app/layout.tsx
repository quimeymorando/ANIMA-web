import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
    title: 'ANIMA — Ciencia. Experiencia. Propósito.',
    description:
        'ANIMA es el puente entre la biotecnología de vanguardia y la expansión humana consciente. Cultivo de tejidos, genética, saneamiento e I+D+i en cannabis.',
    keywords: [
        'cannabis biotecnología',
        'cultivo de tejidos cannabis',
        'genética cannabis',
        'AgTech cannabis',
        'saneamiento cultivos',
        'ANIMA cannabis',
    ],
    openGraph: {
        title: 'ANIMA — Ciencia. Experiencia. Propósito.',
        description:
            'El puente entre lo que somos biológicamente y lo que podemos ser conscientemente.',
        type: 'website',
        locale: 'es_ES',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className="antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
