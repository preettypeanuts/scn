import { Target, CheckCircle2, EyeIcon } from "lucide-react";

export const VissionMissionSection = () => {
    const missions = [
        "Menyediakan benih tebu berkualitas tinggi yang memenuhi standar teknis",
        "Membangun jaringan kemitraan kebun yang luas dan berkelanjutan",
        "Mendukung program pemerintah dalam pengembangan perkebunan",
        "Memberikan pelayanan profesional dengan ketepatan mutu, jumlah, dan waktu",
        "Mengembangkan sistem distribusi yang efisien dan terintegrasi",
    ];

    return (
        <section className="margin spacing">
            <div className="">
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* VISI (LEFT - HERO CARD) */}
                    <div className="relative rounded-3xl bg-primary text-white p-10 flex flex-col justify-between overflow-hidden">
                        {/* subtle glow */}
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <EyeIcon className="w-6 h-6" />
                                <span className="uppercase text-sm tracking-wider opacity-80">
                                    Visi
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                                Menjadi perusahaan terpercaya dan terdepan dalam penyediaan
                                benih tebu berkualitas di Indonesia.
                            </h2>
                        </div>

                        <p className="text-white/70 text-sm mt-10">
                            Komitmen kami adalah membangun kepercayaan melalui kualitas,
                            konsistensi, dan kemitraan jangka panjang.
                        </p>
                    </div>

                    {/* MISI (RIGHT - GRID) */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div
                            className="rounded-2xl border p-5 bg-linear-to-b from-mainColor to-green-800 hover:shadow-md transition flex flex-col justify-between"
                        >
                            <Target className="w-8 h-8 text-white" />

                            <p className="text-3xl leading-relaxed self-end uppercase text-white -mb-2">
                                Misi
                            </p>
                        </div>
                        {missions.map((mission, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border p-5 bg-white hover:shadow-md transition"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />

                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {mission}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};