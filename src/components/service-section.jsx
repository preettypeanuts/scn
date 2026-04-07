import {
    PackageCheck,
    Building2,
    Truck,
    Wrench,
    ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

export const ServicesSection = () => {
    const services = [
        {
            title: "Penyediaan Benih Tebu Skala Besar",
            icon: PackageCheck,
        },
        {
            title: "Pengadaan Benih Proyek Pemerintah & Swasta",
            icon: Building2,
        },
        {
            title: "Distribusi ke Berbagai Wilayah Indonesia",
            icon: Truck,
        },
        {
            title: "Dukungan Teknis Perbenihan",
            icon: Wrench,
        },
    ];

    const phone = "6285117388880";

    return (
        <section className="margin spacing">
            <div className="space-y-8">

                {/* HEADER */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Layanan Kami
                    </h2>
                    <p className="text-muted-foreground">
                        Solusi lengkap untuk kebutuhan benih tebu Anda, dari penyediaan hingga distribusi.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((item, index) => {
                        const Icon = item.icon;

                        const message = encodeURIComponent(
                            `Halo, saya tertarik dengan layanan "${item.title}". Mohon informasi lebih lanjut.`
                        );

                        const waLink = `https://wa.me/${phone}?text=${message}`;

                        return (
                            <div
                                key={index}
                                className="rounded-main border bg-thirdColor border-secondaryColor/20 p-6 min-h-90 flex flex-col justify-between hover:shadow-md transition"
                            >
                                {/* TOP */}
                                <div>
                                    <Icon className="w-8 h-8 text-primary mb-4" />

                                    <h3 className="font-semibold mb-2 leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* CTA */}
                                <a
                                    href={waLink}
                                    target="_blank"
                                    className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
                                >
                                    <Button>
                                        Konsultasi Layanan <ArrowRight />
                                    </Button>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};