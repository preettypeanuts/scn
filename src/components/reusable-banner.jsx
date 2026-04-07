"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const WA_NUMBER = "6281234567890"; // ganti dengan nomor WA

export const ReusableBanner = ({
    title = "",
    description = "",
    imageUrl = ""
}) => {
    const handleExplore = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };

    const handleKontak = () => {
        window.open(`https://wa.me/${WA_NUMBER}`, "_blank");
    };

    return (
        <section className="m-3">
            <div className="rounded-main relative overflow-hidden">
                <Image
                    width={1000}
                    height={500}
                    className="h-100 md:h-130 w-full object-cover object-center"
                    src={imageUrl}
                    alt="banner image"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-0 left-0 flex flex-col m-5 md:m-15 space-y-3">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl leading-tight md:leading-20 font-semibold text-white">
                        {title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base max-w-2xl">
                        {description}
                    </p>
                    <div className="flex gap-2 pt-1">
                        <Button onClick={handleExplore} variant="secondary">
                            Explore
                        </Button>
                        <Button
                            onClick={handleKontak}
                            variant="outline"
                            className="text-white border-white/40 hover:bg-white/10 hover:text-white"
                        >
                            Kontak
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};