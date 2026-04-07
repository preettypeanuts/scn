"use client";

import { useEffect, useRef } from "react";

const locations = [
    { name: "Jawa Tengah", lat: -7.150975, lng: 110.1402594, color: "#e05d44", bg: "#fff0ee" },
    { name: "Jawa Timur", lat: -7.5360639, lng: 112.2384017, color: "#e05d44", bg: "#fff0ee" },
    { name: "Sulawesi Selatan", lat: -3.6687994, lng: 119.9740534, color: "#7b5ea7", bg: "#f3eeff" },
    { name: "Sulawesi Tenggara", lat: -4.14491, lng: 122.174605, color: "#7b5ea7", bg: "#f3eeff" },
];

const legend = [
    { label: "Jawa", color: "#e05d44" },
    { label: "Sulawesi", color: "#7b5ea7" },
];

export const OperationalMap = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let isMounted = true;

        const initMap = async () => {
            const L = (await import("leaflet")).default;
            await import("leaflet/dist/leaflet.css");

            if (!mapRef.current || !isMounted) return;

            // Jika sudah ada instance, skip init ulang
            if (mapInstanceRef.current) return;

            // Bersihkan _leaflet_id yang mungkin tertinggal di DOM
            if (mapRef.current._leaflet_id) {
                delete mapRef.current._leaflet_id;
            }

            const map = L.map(mapRef.current, {
                center: [-5.5, 116],
                zoom: 6,
                zoomControl: true,
                scrollWheelZoom: false,
                attributionControl: false,
            });

            mapInstanceRef.current = map;

            L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                { subdomains: "abcd", maxZoom: 19 }
            ).addTo(map);

            locations.forEach((loc) => {
                const icon = L.divIcon({
                    className: "",
                    html: `
                        <div style="display:flex;flex-direction:column;align-items:center;">
                            <div style="
                                background:${loc.bg};
                                border:2px solid ${loc.color};
                                color:${loc.color};
                                font-size:12px;
                                font-weight:600;
                                font-family:system-ui,sans-serif;
                                white-space:nowrap;
                                padding:4px 10px;
                                border-radius:20px;
                                box-shadow:0 2px 8px rgba(0,0,0,0.15);
                            ">${loc.name}</div>
                            <div style="width:2px;height:8px;background:${loc.color};"></div>
                            <div style="
                                width:10px;height:10px;
                                background:${loc.color};
                                border:2.5px solid white;
                                border-radius:50%;
                                box-shadow:0 1px 4px rgba(0,0,0,0.25);
                                margin-top:-1px;
                            "></div>
                        </div>
                    `,
                    iconSize: [130, 54],
                    iconAnchor: [65, 54],
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

    return (
        <section className="margin spacing">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Wilayah Operasional
                </h2>
                <p className="text-muted-foreground mt-1">
                    Jangkauan distribusi kami di berbagai wilayah Indonesia
                </p>
            </div>

            <div className="relative rounded-2xl border bg-white overflow-hidden">
                <div ref={mapRef} className="h-105 w-full" />

                <div className="flex items-center gap-4 py-2 px-3.5 bg-lightColor border rounded-full flex-wrap absolute bottom-4 left-4">
                    {legend.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};