import {
    Users,
    Sprout,
    Leaf,
    Truck,
    ShieldCheck,
} from "lucide-react";

export const HumanResourcesCard = () => {
    const skills = [
        { title: "Perbenihan tebu", icon: Sprout },
        { title: "Pengelolaan kebun", icon: Leaf },
        { title: "Distribusi dan logistik", icon: Truck },
        { title: "Pengawasan mutu", icon: ShieldCheck },
    ];

    return (
        <section className="margin spacing">
            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <img
                    src="https://images.unsplash.com/photo-1631578114473-1a274776a08b?q=80&w=987&auto=format&fit=crop"
                    alt="Tim profesional agrikultur"
                    className="w-full h-150 sm:h-100 md:h-130 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 p-5 md:p-8 flex flex-col md:flex-row justify-between text-white">
                    {/* LEFT */}
                    <div className="self-end md:self-end">
                        <div className="flex items-center gap-2 mb-2 md:mb-4">
                            <Users className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="uppercase text-xs md:text-sm tracking-wider text-white/80">
                                Sumber Daya Manusia
                            </span>
                        </div>
                        <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                            Tim Profesional & Berpengalaman
                        </h2>
                        <p className="text-white/85 mb-4 md:mb-6 max-w-xl text-xs md:text-base">
                            Didukung oleh tenaga ahli yang berpengalaman di berbagai aspek
                            industri tebu, memastikan kualitas dan keberhasilan setiap proyek.
                        </p>
                    </div>

                    {/* RIGHT - SKILLS */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3 md:self-end">
                        {skills.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="aspect-square flex flex-col items-center justify-center gap-1 md:gap-2 text-xs md:text-sm bg-white/10 p-2 md:p-4 rounded-xl md:w-28 md:h-28 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
                                >
                                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                                    <span className="text-center leading-snug font-medium">
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};