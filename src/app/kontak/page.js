import { ContactSection } from "@/components/contact-section";
import { ReusableBanner } from "@/components/reusable-banner";


export default function KontakPage() {
    return (
        <>
            <ReusableBanner
                title="Kontak Kami"
                imageUrl="https://images.unsplash.com/photo-1672359055393-8342b883802a?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Hubungi kami untuk informasi lebih lanjut atau konsultasi proyek."
            />
            <ContactSection />
        </>
    )
}