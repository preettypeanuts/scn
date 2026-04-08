import { AdvantagesSection } from "@/components/advantages-section";
import { MainProductSection } from "@/components/main-product-section";
import { OperationalMap } from "@/components/operational-map";
import { ReusableBanner } from "@/components/reusable-banner";
import { ServicesSection } from "@/components/service-section";

export const metadata = {
    title:
        "Produk & Layanan Benih Tebu | PT Semesta Cendekia Nusantara",
    description:
        "Temukan produk benih tebu berkualitas dan layanan pengadaan untuk proyek skala besar. PT Semesta Cendekia Nusantara menyediakan benih siap tanam, distribusi nasional, dan dukungan teknis profesional.",

    keywords: [
        "produk benih tebu",
        "layanan benih tebu",
        "supplier benih tebu Indonesia",
        "pengadaan benih tebu proyek",
        "distribusi benih tebu nasional",
        "benih tebu siap tanam",
        "jual benih tebu skala besar",
        "supplier tebu untuk proyek",
    ],

    openGraph: {
        title: "Produk & Layanan Benih Tebu Berkualitas",
        description:
            "Solusi lengkap benih tebu untuk kebutuhan proyek skala besar di Indonesia.",
        url: "https://scn.id/produk-layanan",
        siteName: "PT Semesta Cendekia Nusantara",
        images: [
            {
                url: "https://scn.id/images/og-product.jpg",
                width: 1200,
                height: 630,
                alt: "Produk dan Layanan Benih Tebu",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Produk & Layanan Benih Tebu",
        description:
            "Benih tebu siap tanam dan layanan distribusi nasional untuk proyek besar.",
        images: ["https://scn.id/images/og-product.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

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