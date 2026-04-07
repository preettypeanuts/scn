import Image from "next/image"

export const AboutUsSection = () => {
    return (
        <>
            <div className="relative h-screen overflow-hidden m-3 rounded-main">
                <Image
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1640579567700-3847f4f3eefd?q=80&w=1671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-0 left-0 flex flex-col m-15 space-y-3">
                    <div className="text-white space-y-2 max-w-xl p-5 bg-darkColor/30 rounded-main backdrop-blur-sm border border-neutral-200/20">
                        <h1 className="text-7xl leading-20 font-semibold text-white">
                            <span className="opacity-70">
                                Tentang {" "}
                            </span>
                            Perusahaan
                        </h1>
                        <p>
                            PT Semesta Cendekia Nusantara merupakan perusahaan yang fokus pada penyediaan benih tebu berkualitas sebagai bagian dari penguatan sektor perkebunan nasional.
                        </p>

                        <p>
                            Dengan dukungan jaringan kebun yang luas serta kemitraan strategis di berbagai wilayah, perusahaan mampu menyediakan benih tebu siap salur dalam jumlah besar dengan kualitas terjamin.
                        </p>

                        <p>
                            Kami berkomitmen untuk menjadi bagian dari solusi dalam meningkatkan produktivitas perkebunan tebu di Indonesia melalui layanan yang profesional, tepat waktu, dan terpercaya.
                        </p>
                    </div>
                </div>


            </div>
        </>
    )
}