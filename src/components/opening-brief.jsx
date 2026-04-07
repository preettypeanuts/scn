import { Title } from "./title"

export const OpeningBrief = () => {
    return (
        <section className="margin spacing grid grid-cols-10 gap-10">
            <div className="text-left text-sm mb-10 col-span-2">
                <Title className="invert dark:invert-0">
                    Tentang Kami
                </Title>
            </div>
            <div className="space-y-5 col-span-8">
                <h2 className="text-left text-mainColor text-2xl font-medium tracking-wide">
                    PT Semesta Cendekia Nusantara adalah perusahaan yang bergerak di bidang penyediaan dan pengadaan benih tebu berkualitas untuk mendukung pengembangan sektor perkebunan di Indonesia.
                </h2>

                <h3 className="font-light">
                    Kami hadir sebagai mitra terpercaya dengan kapasitas besar, jaringan luas, dan sistem distribusi yang terintegrasi.
                </h3>
            </div>
        </section>
    )
}