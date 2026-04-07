import { AboutUsSection } from "@/components/about-us";
import { CommitmentSection } from "@/components/company-comitment";
import { HumanResourcesCard } from "@/components/hr";
import { ReusableBanner } from "@/components/reusable-banner";
import { VissionMissionSection } from "@/components/vision-mission";

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