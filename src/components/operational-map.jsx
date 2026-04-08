"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Wheat, Truck } from "lucide-react";

const locations = [
    {
        id: "jateng",
        name: "Jawa Tengah",
        province: "Jawa",
        lat: -7.150975,
        lng: 110.1402594,
        color: "#e05d44",
        bg: "#fff0ee",
        description: "Pusat produksi benih tebu varietas unggul nasional",
        detail: "Kebun sumber terpadu & distribusi wilayah barat",
    },
    {
        id: "jatim",
        name: "Jawa Timur",
        province: "Jawa",
        lat: -7.5360639,
        lng: 112.2384017,
        color: "#e05d44",
        bg: "#fff0ee",
        description: "Sentra perbenihan tebu terbesar di Pulau Jawa",
        detail: "Mitra pabrik gula & pengadaan proyek besar",
    },
    {
        id: "sulsel",
        name: "Sulawesi Selatan",
        province: "Sulawesi",
        lat: -3.6687994,
        lng: 119.9740534,
        color: "#7b5ea7",
        bg: "#f3eeff",
        description: "Pengembangan tebu lahan kering kawasan timur",
        detail: "Distribusi benih & pendampingan teknis lapangan",
    },
    {
        id: "sultra",
        name: "Sulawesi Tenggara",
        province: "Sulawesi",
        lat: -4.14491,
        lng: 122.174605,
        color: "#7b5ea7",
        bg: "#f3eeff",
        description: "Ekspansi wilayah operasional baru kawasan timur",
        detail: "Proyek perbenihan skala besar & kemitraan daerah",
    },
];

const legend = [
    { label: "Jawa", color: "#e05d44" },
    { label: "Sulawesi", color: "#7b5ea7" },
];

const getMapConfig = () => {
    if (typeof window === "undefined") return { center: [-5.5, 116], zoom: 5 };
    const w = window.innerWidth;
    if (w < 480) return { center: [-5.5, 115], zoom: 4 };
    if (w < 768) return { center: [-5.5, 116], zoom: 5 };
    return { center: [-5.5, 116], zoom: 6 };
};

export const OperationalMap = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [activeLocation, setActiveLocation] = useState(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        let isMounted = true;

        const initMap = async () => {
            const L = (await import("leaflet")).default;
            await import("leaflet/dist/leaflet.css");

            if (!mapRef.current || !isMounted) return;
            if (mapInstanceRef.current) return;

            if (mapRef.current._leaflet_id) {
                delete mapRef.current._leaflet_id;
            }

            const { center, zoom } = getMapConfig();

            const map = L.map(mapRef.current, {
                center,
                zoom,
                zoomControl: false,
                scrollWheelZoom: false,
                attributionControl: false,
                dragging: window.innerWidth >= 768,
            });

            mapInstanceRef.current = map;

            L.control.zoom({ position: "topright" }).addTo(map);

            L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                { subdomains: "abcd", maxZoom: 19 }
            ).addTo(map);

            locations.forEach((loc) => {
                const icon = L.divIcon({
                    className: "",
                    html: `
                        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
                            <div style="
                                background:${loc.bg};
                                border:2px solid ${loc.color};
                                color:${loc.color};
                                font-size:11px;
                                font-weight:700;
                                font-family:system-ui,sans-serif;
                                white-space:nowrap;
                                padding:4px 10px;
                                border-radius:20px;
                                box-shadow:0 2px 10px rgba(0,0,0,0.18);
                                letter-spacing:0.01em;
                            ">${loc.name}</div>
                            <div style="width:2px;height:8px;background:${loc.color};"></div>
                            <div style="
                                width:11px;height:11px;
                                background:${loc.color};
                                border:2.5px solid white;
                                border-radius:50%;
                                box-shadow:0 2px 6px rgba(0,0,0,0.25);
                                margin-top:-1px;
                            "></div>
                        </div>
                    `,
                    iconSize: [140, 56],
                    iconAnchor: [70, 56],
                });

                L.marker([loc.lat, loc.lng], { icon }).addTo(map);
            });
        };

        initMap();

        return () => {
            isMounted = false;
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    const jawa = locations.filter((l) => l.province === "Jawa");
    const sulawesi = locations.filter((l) => l.province === "Sulawesi");

    return (
        <section className="margin spacing">
            {/* ── HEADER ── */}
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    Jangkauan Wilayah
                </p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            Wilayah Operasional
                        </h2>
                        <p className="text-muted-foreground mt-1.5 text-sm md:text-base">
                            Beroperasi di{" "}
                            <span className="font-semibold text-foreground">
                                4 provinsi
                            </span>{" "}
                            di Pulau Jawa dan Sulawesi
                        </p>
                    </div>

                    {/* Summary stats */}
                    <div className="flex gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">4</p>
                            <p className="text-xs text-muted-foreground">Provinsi</p>
                        </div>
                        <div className="w-px bg-border" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">2</p>
                            <p className="text-xs text-muted-foreground">Pulau</p>
                        </div>
                        <div className="w-px bg-border" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">∞</p>
                            <p className="text-xs text-muted-foreground">Nasional</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MAIN LAYOUT: Map + Cards ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* MAP — takes 2/3 width on desktop */}
                <div className="lg:col-span-2 relative rounded-2xl border bg-white overflow-hidden shadow-md">
                    <div ref={mapRef} className="h-72 sm:h-96 md:h-105 lg:h-full w-full min-h-80" />

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 py-1.5 px-3 bg-white/90 backdrop-blur-sm border rounded-full shadow-sm flex-wrap">
                        {legend.map((item) => (
                            <div key={item.label} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* LOCATION CARDS — 1/3 width on desktop */}
                <div className="flex flex-col gap-3">
                    {/* Jawa group */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: "#e05d44" }} />
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Pulau Jawa
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {jawa.map((loc) => (
                                <LocationCard
                                    key={loc.id}
                                    loc={loc}
                                    isActive={activeLocation === loc.id}
                                    onClick={() =>
                                        setActiveLocation(
                                            activeLocation === loc.id ? null : loc.id
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>



                    {/* Sulawesi group */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: "#7b5ea7" }} />
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Sulawesi
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {sulawesi.map((loc) => (
                                <LocationCard
                                    key={loc.id}
                                    loc={loc}
                                    isActive={activeLocation === loc.id}
                                    onClick={() =>
                                        setActiveLocation(
                                            activeLocation === loc.id ? null : loc.id
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-auto pt-2 flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/15">
                        <Truck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Distribusi benih menjangkau seluruh wilayah Indonesia melalui jaringan logistik nasional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ── Sub-component: Location Card ── */
function LocationCard({ loc, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left rounded-xl border p-4 transition-all duration-200 hover:shadow-md"
            style={{
                borderColor: isActive ? loc.color : undefined,
                backgroundColor: isActive ? loc.bg : undefined,
            }}
        >
            <div className="flex items-start gap-3">
                <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: loc.bg, border: `2px solid ${loc.color}` }}
                >
                    <MapPin className="w-4 h-4" style={{ color: loc.color }} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground leading-tight">
                        {loc.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {loc.description}
                    </p>

                    {/* Expandable detail */}
                    {isActive && (
                        <div
                            className="mt-2 pt-2 border-t text-xs leading-relaxed flex items-center gap-1.5"
                            style={{ borderColor: loc.color + "40", color: loc.color }}
                        >
                            <Wheat className="w-3.5 h-3.5 shrink-0" />
                            {loc.detail}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
}