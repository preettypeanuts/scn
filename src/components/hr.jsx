import {
    Users,
    Sprout,
    Leaf,
    Truck,
    ShieldCheck,
} from "lucide-react";

export const HumanResourcesCard = () => {
    const skills = [
        {
            title: "Perbenihan tebu",
            icon: Sprout,
        },
        {
            title: "Pengelolaan kebun",
            icon: Leaf,
        },
        {
            title: "Distribusi dan logistik",
            icon: Truck,
        },
        {
            title: "Pengawasan mutu",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="margin spacing">
            <div>
                <div className="relative rounded-3xl overflow-hidden shadow-lg group">

                    {/* IMAGE */}
                    <img
                        src="https://images.unsplash.com/photo-1631578114473-1a274776a08b?q=80&w=987&auto=format&fit=crop"
                        alt="Tim profesional agrikultur"
                        className="w-full h-130 object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* CONTENT */}
                    <div className="absolute inset-0 p-8 flex flex-row justify-between text-white">

                        {/* LEFT */}
                        <div className="self-end">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-6 h-6" />
                                <span className="uppercase text-sm tracking-wider text-white/80">
                                    Sumber Daya Manusia
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Tim Profesional & Berpengalaman
                            </h2>

                            <p className="text-white/85 mb-6 max-w-xl text-sm md:text-base">
                                Didukung oleh tenaga ahli yang berpengalaman di berbagai aspek
                                industri tebu, memastikan kualitas dan keberhasilan setiap proyek.
                            </p>
                        </div>

                        {/* RIGHT - SKILLS */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            {skills.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center gap-2 text-sm bg-white/10 p-4 rounded-xl aspect-square w-full h-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                        <span className="text-center leading-snug font-medium">
                                            {item.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};