import {
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";

export const ContactSection = () => {
    const phone = "6285117388880";

    const message = encodeURIComponent(
        "Halo, saya ingin konsultasi terkait kebutuhan benih tebu untuk proyek saya."
    );

    const waLink = `https://wa.me/${phone}?text=${message}`;

    return (
        <section>
            <div className="relative rounded-main overflow-hidden group m-3 h-200">

                {/* BG */}
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
                    alt="Perkebunan tebu"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-LIEAR-to-r from-black/20 via-black/10 to-black/00" />

                {/* CONTENT */}
                <div className="relative z-10 flex  flex-col justify-between h-full gap-10 p-8 md:p-15 text-white">

                    {/* LEFT */}
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Hubungi Kami
                            </h2>

                            <p className="text-white/85 leading-relaxed max-w-xl">
                                PT Semesta Cendekia Nusantara siap menjadi mitra terpercaya dalam
                                penyediaan benih tebu berkualitas untuk mendukung peningkatan
                                produktivitas perkebunan di Indonesia.
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="mb-4 text-sm text-white/80">
                                Butuh penawaran atau konsultasi proyek?
                            </p>

                            <a
                                href={waLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
                            >
                                Hubungi Kami Sekarang
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <p className="text-xs text-white/60 mt-3">
                                Respon cepat dalam 1x24 jam kerja
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* CARD 1 - QUICK CTA */}
                        <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-6 flex flex-col justify-between">
                            <div className="flex items-center gap-3 mb-3">
                                <MessageCircle className="w-5 h-5" />
                                <h3 className="font-semibold">
                                    Konsultasi Cepat
                                </h3>
                            </div>

                            <p className="text-sm text-white/80 mb-4">
                                Hubungi tim kami untuk mendapatkan penawaran dan solusi terbaik sesuai kebutuhan proyek Anda.
                            </p>

                            <a
                                href={waLink}
                                target="_blank"
                            >
                                <Button>

                                    Chat via WhatsApp
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        {/* CARD 2 - CONTACT INFO */}
                        <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-6 space-y-5">
                            <h3 className="font-semibold text-lg">
                                Informasi Kontak
                            </h3>

                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="w-5 h-5 mt-0.5" />
                                <span>(isi alamat lengkap)</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-5 h-5" />
                                <span>(isi email)</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-5 h-5" />
                                <span>(isi nomor)</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};