import { AdvantagesSection } from "@/components/advantages-section";
import { MainProductSection } from "@/components/main-product-section";
import { OperationalMap } from "@/components/operational-map";
import { ReusableBanner } from "@/components/reusable-banner";
import { ServicesSection } from "@/components/service-section";

export default function ProdukLayanan() {
    return (
        <>
            <ReusableBanner
                title="Produk & Layanan"
                imageUrl="https://images.unsplash.com/photo-1672359055393-8342b883802a?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Kenali lebih jauh tentang produk dan layanan yang kami tawarkan untuk mendukung pertumbuhan industri tebu nasional."
            />
            <MainProductSection />
            <ServicesSection />
            <AdvantagesSection />
            <OperationalMap />

        </>
    )
}