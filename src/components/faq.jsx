"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
    const faqs = [
        {
            question: "Apakah benih tebu siap langsung ditanam?",
            answer:
                "Ya, benih tebu yang kami sediakan dalam bentuk mata tunas sudah siap tanam dan telah melalui proses seleksi kualitas.",
        },
        {
            question: "Apakah melayani pengiriman ke seluruh Indonesia?",
            answer:
                "Kami melayani distribusi ke berbagai wilayah Indonesia dengan sistem logistik yang terencana dan efisien.",
        },
        {
            question: "Apakah bisa untuk proyek skala besar?",
            answer:
                "Sangat bisa. Kami memiliki kapasitas produksi skala nasional yang mampu memenuhi kebutuhan proyek besar, baik pemerintah maupun swasta.",
        },
        {
            question: "Apakah tersedia dukungan teknis?",
            answer:
                "Kami menyediakan dukungan teknis perbenihan yang dapat disesuaikan dengan kebutuhan proyek Anda.",
        },
        {
            question: "Bagaimana cara melakukan pemesanan?",
            answer:
                "Anda dapat langsung menghubungi tim kami melalui WhatsApp atau kontak yang tersedia untuk konsultasi dan penawaran.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="margin spacing">
            <div className="">

                {/* HEADER */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                        FAQ
                    </h2>
                    <p className="text-muted-foreground">
                        Pertanyaan yang sering diajukan terkait produk dan layanan kami.
                    </p>
                </div>

                {/* ACCORDION */}
                <div className="space-y-3">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border rounded-xl overflow-hidden bg-thirdColor border-secondaryColor/20 w-full"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                                >
                                    <span className="font-medium">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 transition ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 text-sm text-muted-foreground">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-8 text-sm text-muted-foreground">
                    Masih punya pertanyaan?{" "}
                    <a
                        href="https://wa.me/6285117388880"
                        target="_blank"
                        className="text-primary font-medium underline underline-offset-4"
                    >
                        Hubungi tim kami
                    </a>
                </div>

            </div>
        </section>
    );
};