import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
    return (
        <section className="margin spacing">
            <div className="rounded-2xl relative overflow-hidden">
                <img
                    className="h-130 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1679543321530-4378c81af100?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="cta image"
                />

                <div className="absolute inset-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                        Butuh Pasokan Benih Tebu Skala Besar?
                    </h2>

                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Kami siap mendukung kebutuhan proyek Anda dengan pasokan benih
                        berkualitas tinggi, stabil, dan terjamin. Konsultasikan kebutuhan
                        Anda bersama tim kami sekarang.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* CTA Button */}
                        <a
                            href="https://wa.me/6285117388880"
                            target="_blank"
                            className=""
                        >
                            <Button
                                variant="secondary"
                                className=""
                                size="lg"
                            >
                                <PhoneCall />
                                Hubungi Sekarang
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};