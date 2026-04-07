import {
    Factory,
    Map,
    RefreshCw,
    Users,
    Building2,
} from "lucide-react";
import Image from "next/image";

const highlights = [
    {
        icon: Factory,
        useImg: false,
        img: "",
        title: "Kapasitas Produksi Besar",
        description:
            "Mampu menyediakan hingga 1,2 miliar mata tebu untuk memenuhi kebutuhan skala nasional, baik proyek besar maupun distribusi berkelanjutan.",
    },
    {
        icon: Map,
        useImg: true,
        img: "https://images.unsplash.com/photo-1573605954553-a39394846cfc?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Jaringan Kebun Luas",
        description:
            "Didukung oleh jaringan kebun yang tersebar di berbagai wilayah Indonesia, memastikan distribusi lebih cepat dan efisien.",
    },
    {
        icon: RefreshCw,
        useImg: true,
        img: "https://images.unsplash.com/photo-1558623252-d5609be26ef1?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Pasokan Stabil",
        description:
            "Sistem produksi dan distribusi yang terorganisir memastikan ketersediaan pasokan yang konsisten sepanjang waktu.",
    },
    {
        icon: Users,
        useImg: false,
        img: "",
        title: "Tim Profesional",
        description:
            "Didukung oleh tenaga ahli dan tim berpengalaman di bidang agrikultur dan distribusi benih tebu.",
    },
    {
        icon: Building2,
        useImg: false,
        img: "",
        title: "Siap Proyek Skala Besar",
        description:
            "Berpengalaman dalam menangani kebutuhan proyek pemerintah maupun swasta dengan standar kualitas tinggi.",
    },
];

export const HightlightPoints = () => {
    return (
        <>
            <div className="margin pb-20 flex items-center gap-5">
                {highlights.map((item, index) => (
                    <div
                        className={`
                                    min-h-90 h-90 rounded-main p-5 flex flex-col justify-between relative
                                    ${item.useImg === true ? "bg-linear-to-t from-darkColor/70 text-white!" : "bg-thirdColor"}
                                    `}
                        key={index}
                    >
                        {item.useImg === true && (
                            <div className="absolute inset-0">
                                <Image
                                    fill
                                    src={item.img}
                                    alt={item.title}
                                    className="object-cover rounded-main -z-20"
                                />
                            </div>
                        )}
                        <div>
                            <item.icon size={42} className={`${item.useImg ? "text-white bg-darkColor/20 rounded-full backdrop-blur-sm" : "text-mainColor"} p-2`} />
                        </div>
                        <div className="space-y-3">
                            <h2 className={`font-medium text-lg ${item.useImg ? "text-white" : "text-mainColor"}`}>{item.title}</h2>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}