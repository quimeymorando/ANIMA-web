import HeroSection from '@/components/sections/HeroSection'
import ManifiestoSection from '@/components/sections/ManifiestoSection'
import AutoridadCientifica from '@/components/sections/AutoridadCientifica'
import ServiciosSection from '@/components/sections/ServiciosSection'
import VisionFuturo from '@/components/sections/VisionFuturo'
import ContactoSection from '@/components/sections/ContactoSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ManifiestoSection />
            <AutoridadCientifica />
            <ServiciosSection />
            <VisionFuturo />
            <ContactoSection />
        </>
    )
}
