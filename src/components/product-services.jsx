import {
    Sprout,
    PackageCheck,
    Truck,
    Building2,
    Wrench,
} from "lucide-react";

export const offerings = [
    {
        kind: "product",
        icon: Sprout,
        img: "https://images.unsplash.com/photo-1558623252-d5609be26ef1?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Benih Tebu (Mata Tunas Siap Salur)",
        description:
            "Benih tebu dalam bentuk mata tunas berkualitas tinggi, siap tanam dan siap distribusi. Berasal dari kebun sumber yang terkelola dengan baik dan cocok untuk kebutuhan proyek skala besar.",
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
            <div className="space-y-6">
                {/* PRODUCT (BENTO HERO) */}
                {product && (
                    <div className="relative rounded-main overflow-hidden shadow-lg group">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-105 object-cover group-hover:scale-105 transition duration-500"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                            <product.icon className="w-10 h-10 mb-4" />

                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                {product.title}
                            </h2>

                            <p className="max-w-xl text-sm md:text-base text-white/90">
                                {product.description}
                            </p>
                        </div>
                    </div>
                )}

                {/* SERVICES (4 GRID) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-main border p-6 hover:shadow-md transition"
                        >
                            <item.icon className="w-8 h-8 mb-4 text-primary" />

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};