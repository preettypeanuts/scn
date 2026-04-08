import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const contactInfo = [
    {
        type: "address",
        icon: MapPin,
        label: "Alamat",
        value:
            "Gedung Fancy Mampang, Jl. Mampang Prpt. Raya No.151 Lantai 4 Unit A7, Jakarta Selatan 12760",
        href: "https://maps.app.goo.gl/y84c92Cd5gBfBL4r5",
    },
    {
        type: "phone",
        icon: Phone,
        label: "Telepon",
        value: "081121203090",
        href: "tel:081121203090",
    },
    {
        type: "email",
        icon: Mail,
        label: "Email",
        value: "semestacendekianusantara@gmail.com",
        href: "mailto:semestacendekianusantara@gmail.com",
    },
    {
        type: "whatsapp",
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+62 811 2120 3090",
        href: "https://wa.me/6281121203090",
    },

];