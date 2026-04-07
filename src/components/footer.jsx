import {
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer className="md:mb-0 mb-20">
            <div className="rounded-3xl bg-lightColor text-black p-8 md:p-18 space-y-10 m-3">

                {/* TOP */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            PT Semesta Cendekia Nusantara
                        </h3>
                        <p className="text-sm text-black/70 leading-relaxed">
                            Penyedia benih tebu berkualitas untuk mendukung peningkatan
                            produktivitas perkebunan di Indonesia.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h4 className="font-semibold mb-3">Navigasi</h4>
                        <ul className="space-y-2 text-sm text-black/70">
                            <li>
                                <a href="/" className="hover:text-black transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-black transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="hover:text-black transition">
                                    Product & Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-black transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="font-semibold mb-3">Kontak</h4>

                        <div className="space-y-3 text-sm text-black/70">
                            <a
                                href=""
                                className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>(isi alamat lengkap)</span>
                            </a>

                            <a
                                href="mailto:(isi email)"
                                className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>(isi email)</span>
                            </a>

                            <a
                                href="tel:(isi nomor)"
                                className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>(isi nomor)</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA STRIP */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-black/10 pt-9">
                    <p className="text-sm text-black/70">
                        Butuh penawaran atau konsultasi proyek?
                    </p>

                    <a
                        href="https://wa.me/6285117388880"
                        target="_blank"
                        className=""
                    >
                        <Button>
                            Hubungi Kami
                        </Button>
                    </a>
                </div>

                {/* BOTTOM */}
                <div className="text-xs text-black/50 text-center border-t border-black/10 pt-10 md:-mb-8">
                    © {new Date().getFullYear()} PT Semesta Cendekia Nusantara. All rights reserved.
                </div>

            </div>
        </footer>
    );
};