import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq";
import { Maps } from "@/components/maps";
import { ReusableBanner } from "@/components/reusable-banner";

export const metadata = {
    title:
        "Kontak PT Semesta Cendekia Nusantara | Supplier Benih Tebu Indonesia",
    description:
        "Hubungi PT Semesta Cendekia Nusantara untuk kebutuhan benih tebu berkualitas. Konsultasi proyek, pengadaan skala besar, dan distribusi nasional tersedia untuk seluruh Indonesia.",

    keywords: [
        "kontak supplier benih tebu",
        "hubungi penyedia benih tebu",
        "alamat PT Semesta Cendekia Nusantara",
        "supplier benih tebu Indonesia kontak",
        "konsultasi benih tebu proyek",
        "pengadaan benih tebu Indonesia",
    ],

    openGraph: {
        title:
            "Hubungi PT Semesta Cendekia Nusantara",
        description:
            "Konsultasi kebutuhan benih tebu untuk proyek skala besar dan distribusi nasional.",
        url: "https://scn.id/contact",
        siteName: "PT Semesta Cendekia Nusantara",
        images: [
            {
                url: "https://scn.id/images/og-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Kontak PT Semesta Cendekia Nusantara",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Kontak Supplier Benih Tebu",
        description:
            "Hubungi kami untuk konsultasi dan penawaran benih tebu.",
        images: ["https://scn.id/images/og-contact.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function KontakPage() {
    return (
        <>
            <ReusableBanner
                title="Kontak Kami"
                imageUrl="https://images.unsplash.com/photo-1672359055393-8342b883802a?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Hubungi kami untuk informasi lebih lanjut atau konsultasi proyek."
            />
            <ContactSection />
            <Maps />
            <FAQSection />
        </>
    )
}