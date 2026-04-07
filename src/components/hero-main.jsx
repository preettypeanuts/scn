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
            />
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="absolute inset-0 w-auto h-auto m-15">
                <div className="flex flex-col justify-between h-full">

                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-5 bg-white rounded-full"></div>
                        <p className="font-medium text-white">
                            PT Semesta Cendikia Nusantara
                        </p>
                    </div>
                    <h1 className="text-7xl leading-20 font-semibold text-white">
                        <span className="opacity-60">
                            Penyedia {" "}
                        </span>
                        <span className="opacity-100">
                            Benih Tebu {" "}
                        </span>
                        <br />

                        <span className="opacity-100">
                            Berkualitas  {" "}
                        </span>
                        <span className="opacity-60">
                            Nasional
                        </span>
                    </h1>
                    
                </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-15 max-w-sm p-5 rounded-secondary bg-white/10 border border-neutral-200/20 backdrop-blur-xs backdrop-brightness-105">
                <h2 className="text-white">
                    Mitra strategis dalam penyediaan benih tebu skala besar dengan kualitas terjamin, distribusi luas, dan dukungan profesional untuk proyek nasional.
                </h2>
                <div className="space-x-2">
                    <Button variant="secondary" className="mt-5">
                        Hubungi Kami
                    </Button>
                    <Button variant="outline" className="mt-5 text-white">
                        Eksplore
                    </Button>
                </div>
            </div>

        </div>
    )
}
