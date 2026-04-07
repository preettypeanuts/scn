import { Sprout, CheckCircle2 } from "lucide-react";

export const MainProductSection = () => {
    const specs = [
        "Benih dalam bentuk mata tunas berkualitas",
        "Siap tanam & siap distribusi",
        "Berasal dari kebun sumber benih terkelola",
        "Cocok untuk kebutuhan proyek skala besar",
    ];

    return (
        <section className="margin spacing">
            <div className="grid lg:grid-cols-2 gap-5 items-center">

                {/* IMAGE */}
                <div className="relative rounded-3xl overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop"
                        alt="Benih tebu"
                        className="w-full h-105 object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                    <div className="absolute bottom-0 left-5 flex flex-col gap-2 text-white">
                        <div className="flex items-center gap-2">
                            <Sprout className="w-5 h-5" />
                            <span className="text-sm uppercase tracking-wider">
                                Produk Utama
                            </span>
                        </div>


                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Benih Tebu (Mata Tunas Siap Salur)
                        </h2>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="bg-thirdColor w-full h-full rounded-main p-10 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6 max-w-xl">
                        Benih tebu berkualitas tinggi dalam bentuk mata tunas yang telah
                        melalui proses seleksi dan pengelolaan optimal, siap digunakan
                        untuk kebutuhan proyek skala besar.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {specs.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm p-5 bg-secondaryColor/10 rounded-secondary border border-secondaryColor/20">
                                <CheckCircle2 className="w-4 h-4 min-w-4 min-h-4 text-green-500 mt-0.5" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};