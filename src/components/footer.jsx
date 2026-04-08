import {
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import { contactInfo } from "@/app/data";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="md:mb-0 mb-20">
            <div className="rounded-3xl bg-lightColor text-black p-8 md:p-18 space-y-10 m-3">

                {/* TOP */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* BRAND */}
                    <div>
                        <Image
                            src="/icon.webp"
                            alt="Logo PT Semesta Cendekia Nusantara"
                            width={140}
                            height={40}
                            className="brightness-110 -ml-2"
                        />
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
                                <Link href="/" className="hover:text-black transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-black transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-black transition">
                                    Product & Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-black transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="font-semibold mb-3">Kontak</h4>

                        <div className="space-y-3 text-sm text-black/70">
                            {contactInfo.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="flex items-start gap-2"
                                >
                                    <item.icon className="w-4 h-4 min-w-4 min-h-4 mt-0.5" />
                                    <span>{item.value}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA STRIP */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-black/10 pt-9">
                    <p className="text-sm text-black/70">
                        Butuh penawaran atau konsultasi proyek?
                    </p>

                    <Link
                        href="https://wa.me/6285117388880"
                        target="_blank"
                        className=""
                    >
                        <Button>
                            Hubungi Kami
                        </Button>
                    </Link>
                </div>

                {/* BOTTOM */}
                <div className="text-xs text-black/50 text-center border-t border-black/10 pt-10 md:-mb-8">
                    © {new Date().getFullYear()} PT Semesta Cendekia Nusantara. All rights reserved.
                </div>

            </div>
        </footer>
    );
};