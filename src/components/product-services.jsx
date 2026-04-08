import {
    Sprout,
    PackageCheck,
    Truck,
    Building2,
    Wrench,
    ArrowRight,
    ChevronRight,
} from "lucide-react";
import { Title } from "./title";
import Link from "next/link";

export const offerings = [
    {
        kind: "product",
        icon: Sprout,
        img: "https://images.unsplash.com/photo-1558623252-d5609be26ef1?q=80&w=1674&auto=format&fit=crop",
        title: "Benih Tebu (Mata Tunas Siap Salur)",
        tagline: "Kualitas Unggul, Siap Distribusi Nasional",
        description:
            "Benih tebu dalam bentuk mata tunas berkualitas tinggi, siap tanam dan siap distribusi. Berasal dari kebun sumber yang terkelola dengan baik dan cocok untuk kebutuhan proyek skala besar.",
        highlights: [
            "Tingkat perkecambahan &gt;90%",
            "Bebas hama &amp; penyakit sistemik",
            "Tersertifikasi dan tertelusur",
            "Siap kirim ke seluruh Indonesia",
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1558623252-d5609be26ef1?q=80&w=800&auto=format&fit=crop",
                caption: "Mata Tunas Segar",
            },
            {
                src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
                caption: "Kebun Sumber",
            },
            {
                src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
                caption: "Seleksi Kualitas",
            },
        ],
    },
    {
        kind: "service",
        icon: PackageCheck,
        img: "/images/service-supply.jpg",
        title: "Penyediaan Benih Skala Besar",
        description:
            "Menyediakan benih tebu dalam jumlah besar untuk memenuhi kebutuhan industri dan proyek berskala nasional.",
    },
    {
        kind: "service",
        icon: Building2,
        img: "/images/service-procurement.jpg",
        title: "Pengadaan Proyek",
        description:
            "Melayani pengadaan benih tebu untuk proyek pemerintah maupun swasta dengan standar kualitas terjamin.",
    },
    {
        kind: "service",
        icon: Truck,
        img: "/images/service-distribution.jpg",
        title: "Distribusi Nasional",
        description:
            "Didukung sistem logistik yang memastikan pengiriman benih ke berbagai wilayah Indonesia secara tepat waktu.",
    },
    {
        kind: "service",
        icon: Wrench,
        img: "/images/service-support.jpg",
        title: "Dukungan Teknis",
        description:
            "Memberikan dukungan teknis perbenihan sesuai kebutuhan proyek untuk memastikan hasil tanam yang optimal.",
    },
];

export const ProductServices = () => {
    const product = offerings.find((item) => item.kind === "product");
    const services = offerings.filter((item) => item.kind === "service");

    return (
        <section className="margin spacing">
            {/* ── SECTION HEADER ── */}
            <div className="mb-10 space-y-3">
                <Title classText="text-black!" classPill="bg-darkColor!">
                    Produk &amp; Layanan
                </Title>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Solusi Perbenihan Tebu
                    <br className="hidden md:block" /> Terpadu &amp; Terpercaya
                </h2>
            </div>

            <div className="space-y-6">
                {/* ══════════════════════════════════════
                    PRODUK UTAMA — BENTO HERO EXPANDED
                    ══════════════════════════════════════ */}
                {product && (
                    <div className="rounded-main overflow-hidden border border-primary/20 bg-linear-to-br from-thirdColor/50 to-transparent shadow-mainShadow">
                        {/* Badge label */}
                        <div className="px-6 pt-5 pb-0 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                <product.icon className="w-3.5 h-3.5" />
                                Produk Unggulan
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* LEFT — Text content */}
                            <div className="p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-snug">
                                        {product.title}
                                    </h3>
                                    <p className="text-primary font-medium text-sm mb-4">
                                        {product.tagline}
                                    </p>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2.5 mb-8">
                                        {product.highlights?.map((h, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2.5 text-sm"
                                            >
                                                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                                                    <ChevronRight className="w-3 h-3 text-primary" />
                                                </span>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: h,
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <Link
                                        href="/produk-layanan"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:gap-3 group"
                                    >
                                        Lihat Selengkapnya
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT — Image gallery */}
                            <div className="p-4 md:p-6 flex flex-col gap-3">
                                {/* Main image */}
                                <div className="relative rounded-xl overflow-hidden h-52 md:h-64 shadow-md group">
                                    <img
                                        src={product.gallery?.[0].src}
                                        alt={product.gallery?.[0].caption}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                    <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                        {product.gallery?.[0].caption}
                                    </span>
                                </div>

                                {/* Thumbnail row */}
                                <div className="grid grid-cols-2 gap-3">
                                    {product.gallery?.slice(1).map((img, i) => (
                                        <div
                                            key={i}
                                            className="relative rounded-xl overflow-hidden h-32 shadow-sm group"
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.caption}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                            <span className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                                {img.caption}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════
                    LAYANAN — 4 GRID CARDS
                    ══════════════════════════════════════ */}
                <div>
                    {/* Sub-header for services */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">
                            Layanan Pendukung
                        </span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="min-h-80 group rounded-main border bg-card p-6 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                {/* Icon with accent bg */}
                                <div className="w-11 h-11 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>

                                <h3 className="font-semibold text-base mb-2 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                        {/* CTA tile */}
                        <Link
                            href="/produk-layanan"
                            className="w-auto group rounded-main border border-primary/10 bg-thirdColor p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 cursor-pointer"
                        >
                            <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                                <ArrowRight className="w-5 h-5 text-primary transition-transform duration-200 group-hover:translate-x-0.5" />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-sm text-primary">
                                    Lihat Semua
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    Produk &amp; Layanan
                                </p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};