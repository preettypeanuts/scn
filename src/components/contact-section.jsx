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
            <div className="relative rounded-main overflow-hidden group m-3 min-h-screen md:h-200">

                {/* BG */}
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
                    alt="Perkebunan tebu"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col justify-between h-full gap-8 p-5 md:p-15 text-white">

                    {/* TOP */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
                        {/* Judul & deskripsi */}
                        <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                                Hubungi Kami
                            </h2>
                            <p className="text-white/85 leading-relaxed text-sm md:text-base">
                                PT Semesta Cendekia Nusantara siap menjadi mitra terpercaya dalam
                                penyediaan benih tebu berkualitas untuk mendukung peningkatan
                                produktivitas perkebunan di Indonesia.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="md:mt-8">
                            <p className="mb-3 text-sm text-white/80">
                                Butuh penawaran atau konsultasi proyek?
                            </p>
                            <a
                                href={waLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-primary px-5 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
                            >
                                Hubungi Kami Sekarang
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <p className="text-xs text-white/60 mt-3">
                                Respon cepat dalam 1x24 jam kerja
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* CARD 1 */}
                        <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <MessageCircle className="w-5 h-5" />
                                    <h3 className="font-semibold">Konsultasi Cepat</h3>
                                </div>
                                <p className="text-sm text-white/80">
                                    Hubungi tim kami untuk mendapatkan penawaran dan solusi terbaik sesuai kebutuhan proyek Anda.
                                </p>
                            </div>
                            <a href={waLink} target="_blank">
                                <Button className="w-full md:w-auto">
                                    Chat via WhatsApp
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-5 md:p-6 space-y-4">
                            <h3 className="font-semibold text-lg">Informasi Kontak</h3>
                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                                <span>(isi alamat lengkap)</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-5 h-5 shrink-0" />
                                <span>(isi email)</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-5 h-5 shrink-0" />
                                <span>(isi nomor)</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};