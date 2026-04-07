import Image from "next/image";

export const ReusableBanner = ({
    title = "",
    description = "",
    imageUrl = ""
}) => {
    return (
        <section className="m-3">
            <div className="rounded-main relative overflow-hidden">
                <Image
                    width={1000}
                    height={500}
                    className="h-130 w-full object-cover object-center"
                    src={imageUrl}
                    alt="banner image"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-0 left-0 flex flex-col m-15 space-y-3">
                    <h2 className="text-7xl leading-20 font-semibold text-white">
                        {title}
                    </h2>

                    <p className="text-white/90 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

            </div>
        </section>
    );
}