import {
    ShieldCheck,
    Boxes,
    Users,
    Target,
} from "lucide-react";

export const CommitmentSection = () => {
    const commitments = [
        {
            title: "Kualitas Terjaga",
            description:
                "Menjaga kualitas benih secara konsisten melalui standar produksi yang terkontrol.",
            icon: ShieldCheck,
        },
        {
            title: "Pasokan Terjamin",
            description:
                "Menjamin ketersediaan pasokan untuk memenuhi kebutuhan proyek secara berkelanjutan.",
            icon: Boxes,
        },
        {
            title: "Layanan Profesional",
            description:
                "Memberikan pelayanan yang responsif, tepat, dan berorientasi pada kepuasan klien.",
            icon: Users,
        },
        {
            title: "Keberhasilan Proyek",
            description:
                "Mendukung setiap proyek klien agar berjalan sukses dengan hasil yang optimal.",
            icon: Target,
        },
    ];

    return (
        <section className="margin spacing">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="p-10 bg-thirdColor/30 rounded-main backdrop-blur-lg border border-neutral-200/20 h-full flex flex-col justify-between">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-mainColor ">
                        Komitmen Perusahaan
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        Kami berkomitmen untuk menjaga kualitas, memastikan ketersediaan,
                        dan memberikan layanan terbaik demi keberhasilan setiap proyek klien.
                    </p>
                </div>

                {/* RIGHT SIDE (DIAGRAM) */}
                <div className="relative">

                    {/* Vertical line */}
                    <div className="absolute left-[17.5px] top-0 bottom-0 w-[1.5px] bg-mainColor/40" />

                    <div className="space-y-8">
                        {commitments.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="relative flex items-start gap-6">

                                    {/* DOT */}
                                    <div className="relative z-10">
                                        <div className="w-9 h-9 outline-4 outline-white rounded-full bg-mainColor flex items-center justify-center border border-primary/20">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    {/* CARD */}
                                    <div className="flex-1 rounded-2xl border border-mainColor/30 bg-mainColor/5 p-5 hover:shadow-md transition">
                                        <h3 className="font-semibold mb-1 text-mainColor">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};