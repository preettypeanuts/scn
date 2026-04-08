export const Maps = () => {
    return (
        <div className="rounded-main overflow-hidden margin spacing">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    Lokasi Kami
                </h2>
                <p className="text-muted-foreground">
                    Kantor pusat kami berlokasi strategis di Jakarta, memudahkan akses dan komunikasi dengan pelanggan di seluruh Indonesia.
                </p>
            </div>
            <iframe
                className="w-full h-100 rounded-main border-0 dark:invert dark:contrast-75"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0610851090046!2d106.8279946!3d-6.255683299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20f6bfe9853dcfa3%3A0x2ccb583ad9c6ca1b!2sGoSpace%20Mampang!5e0!3m2!1sid!2sid!4v1766980240365!5m2!1sid!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}