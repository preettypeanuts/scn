import {
    Factory,
    Network,
    RefreshCw,
    Users,
    ShieldCheck,
    SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";

export const AdvantagesSection = () => {
    const items = [
        {
            title: "Kapasitas produksi skala nasional",
            icon: Factory,
            type: "large",
            img: "https://images.unsplash.com/photo-1772912139759-e51baf57c3a6?q=80&w=1695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Jaringan kebun luas dan terintegrasi",
            icon: Network,
            type: "image",
            img: "https://images.unsplash.com/photo-1516619774863-467b60d05aa0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Ketersediaan pasokan berkelanjutan",
            icon: RefreshCw,
            type: "small",
        },
        {
            title: "SDM berpengalaman",
            icon: Users,
            type: "large",
            img: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Komitmen terhadap kualitas & ketepatan waktu",
            icon: ShieldCheck,
            type: "large",
            img: "https://images.unsplash.com/photo-1585155113016-5b8eca4678d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Fleksibel untuk berbagai skala proyek",
            icon: SlidersHorizontal,
            type: "small",
        },
    ];

    return (
        <section className="margin spacing">
            <div className="space-y-8">

                {/* HEADER */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                        Keunggulan Kompetitif
                    </h2>
                    <p className="text-muted-foreground max-w-xl">
                        Keunggulan yang memastikan setiap kebutuhan klien terpenuhi dengan kualitas, efisiensi, dan keandalan.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {items.map((item, i) => {
                        const Icon = item.icon;

                        // layout rules
                        let className = "rounded-main overflow-hidden relative group";

                        if (item.type === "large") {
                            className += " md:col-span-1 md:row-span-2";
                        } else if (item.type === "image") {
                            className += " md:col-span-1 md:row-span-1";
                        } else {
                            className += " md:col-span-1 md:row-span-1 border bg-lightColor p-5 flex flex-col justify-between";
                        }

                        return (
                            <div key={i} className={className}>

                                {/* IMAGE TYPE */}
                                {(item.type === "large" || item.type === "image") && (
                                    <>
                                        <Image
                                            width={500}
                                            height={500}
                                            src={item.img}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0" />

                                        <div className="absolute inset-0 p-2 flex flex-col justify-end text-white">
                                            <div className="p-4 bg-darkColor/40 rounded-secondary backdrop-blur-xs border border-neutral-200/20">
                                                <Icon className="w-6 h-6 mb-2" />
                                                <p className="font-medium leading-snug">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* SMALL CARD */}
                                {item.type === "small" && (
                                    <>
                                        <Icon className="w-5 h-5 text-primary mb-3" />
                                        <p className="text-sm leading-relaxed">
                                            {item.title}
                                        </p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};