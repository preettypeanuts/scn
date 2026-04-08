import Image from "next/image"
import { Button } from "./ui/button"

export const HeroMain = () => {
    return (
        <div
            style={{ height: "calc(100vh - 1.50rem)" }}
            className="overflow-hidden relative m-3 rounded-main">
            <Image
                fill
                src="https://images.unsplash.com/photo-1655130944329-b3a63166f6b5?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Banner Image"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Layout wrapper */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-15">

                {/* Top: Brand name */}
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-white rounded-full"></div>
                    <p className="font-medium text-white text-sm md:text-base">
                        PT Semesta Cendikia Nusantara
                    </p>
                </div>

                {/* Bottom row: headline + card */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl leading-tight md:leading-20 font-semibold text-white max-w-xl md:max-w-none">
                        <span className="opacity-60">Penyedia </span>
                        <span className="opacity-100">Benih Tebu </span>
                        <br />
                        <span className="opacity-100">Berkualitas </span>
                        <span className="opacity-60">Nasional</span>
                    </h1>

                    {/* Card */}
                    <div className="w-full md:max-w-sm p-5 rounded-secondary bg-white/10 border border-neutral-200/20 backdrop-blur-xs backdrop-brightness-105 shrink-0">
                        <h2 className="text-white text-sm md:text-base">
                            Mitra strategis dalam penyediaan benih tebu skala besar dengan kualitas terjamin, distribusi luas, dan dukungan profesional untuk proyek nasional.
                        </h2>
                        <div className="flex gap-2 mt-5">
                            <Button variant="secondary">
                                Hubungi Kami
                            </Button>
                            <Button variant="outline" className="text-white">
                                Eksplore
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}