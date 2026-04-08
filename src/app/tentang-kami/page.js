import { AboutUsSection } from "@/components/about-us";
import { CommitmentSection } from "@/components/company-comitment";
import { HumanResourcesCard } from "@/components/hr";
import { ReusableBanner } from "@/components/reusable-banner";
import { VissionMissionSection } from "@/components/vision-mission";

export const metadata = {
    title:
        "Tentang Kami | PT Semesta Cendekia Nusantara - Supplier Benih Tebu Nasional",
    description:
        "Kenali PT Semesta Cendekia Nusantara, perusahaan penyedia benih tebu berkualitas yang berfokus pada pengadaan skala besar, distribusi nasional, dan dukungan industri perkebunan di Indonesia.",

    keywords: [
        "tentang PT Semesta Cendekia Nusantara",
        "perusahaan benih tebu Indonesia",
        "supplier benih tebu nasional",
        "profil perusahaan benih tebu",
        "penyedia benih tebu berkualitas",
        "distribusi benih tebu Indonesia",
    ],

    openGraph: {
        title:
            "Tentang PT Semesta Cendekia Nusantara",
        description:
            "Perusahaan penyedia benih tebu berkualitas untuk mendukung industri perkebunan nasional.",
        url: "https://scn.id/tentang-kami",
        siteName: "PT Semesta Cendekia Nusantara",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Tentang PT Semesta Cendekia Nusantara",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Tentang PT Semesta Cendekia Nusantara",
        description:
            "Profil perusahaan penyedia benih tebu berkualitas di Indonesia.",
        images: ["/og-image.webp"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function TentangKami() {
    return (
        <>
            <ReusableBanner
                title="Tentang Kami"
                imageUrl="https://images.unsplash.com/photo-1719424668314-a0def541377b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Kenali lebih jauh tentang PT Semesta Cendikia Nusantara, perusahaan yang berdedikasi dalam menyediakan benih tebu berkualitas tinggi untuk mendukung pertumbuhan industri tebu nasional. "
            />
            <AboutUsSection />
            <VissionMissionSection />
            <HumanResourcesCard />
            <CommitmentSection />
        </>
    )
}