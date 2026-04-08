"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Info, Phone } from "lucide-react"
import { ScrollToTop } from "./scroll-to-top"
import { FloatingButtonWhatsapp } from "./floating-button-whatsapp"
import Image from "next/image"

const navItems = [
    { href: "/", labelMobile: "Home", label: "Home", icon: Home },
    { href: "/produk-layanan", labelMobile: "Produk", label: "Produk & Layanan", icon: Package },
    { href: "/tentang-kami", labelMobile: "Tentang", label: "Tentang Kami", icon: Info },
    { href: "/kontak", labelMobile: "Kontak", label: "Kontak", icon: Phone },
]

const NavLink = ({ children, href }) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link href={href} className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${isActive ? 'text-white bg-white/20' : 'text-white hover:text-white hover:bg-white/20'}`}>
            {children}
        </Link>
    )
}

const BottomNavItem = ({ href, labelMobile, icon: Icon }) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link href={href} className="flex flex-col items-center gap-1 flex-1 py-2">
            <div className={`p-1.5 rounded-full transition-colors ${isActive ? 'bg-white/20' : ''}`}>
                <Icon
                    size={20}
                    className={`transition-colors ${isActive ? 'text-white' : 'text-white/50'}`}
                    strokeWidth={isActive ? 2.5 : 1.8}
                />
            </div>
            <span className={`text-[9px] font-medium transition-colors leading-none ${isActive ? 'text-white' : 'text-white/50'}`}>
                {labelMobile}
            </span>
        </Link>
    )
}

export const Navbar = () => {
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden fixed top-8 z-999 left-1/2 -translate-x-1/2 md:flex items-center gap-2">
                <div className="bg-white/80 border border-neutral-500/20 backdrop-brightness-150 backdrop-blur-xl rounded-full px-3">
                    <Image src="/icon.webp"
                        alt="Logo PT Semesta Cendekia Nusantara"
                        width={40}
                        height={40}
                        className="brightness-110"
                    />
                </div>
                <div className="flex items-center gap-1 p-1 bg-black/40 rounded-full border border-neutral-200/20 backdrop-blur-xs">
                    {navItems.map(({ href, label }) => (
                        <NavLink key={href} href={href}>{label}</NavLink>
                    ))}
                </div>
                <FloatingButtonWhatsapp />
                <ScrollToTop />
            </nav>

            {/* Mobile Bottom Navbar */}
            <nav className="md:hidden fixed bottom-4 left-4 right-4 z-999">
                {/* safe area for notch phones */}
                <div className="bg-black/50 border border-neutral-200/20 backdrop-blur-sm rounded-full">
                    <div className="flex items-center">
                        {navItems.map(({ href, labelMobile, icon }) => (
                            <BottomNavItem key={href} href={href} labelMobile={labelMobile} icon={icon} />
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}