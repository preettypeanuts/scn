import Link from "next/link"

const NavLink = ({ children, href }) => {
    return (
        <Link href={href} className="text-sm font-medium text-white hover:text-white px-4 py-1.5 rounded-full transition-colors hover:bg-white/20">
            {children}
        </Link>
    )
}

export const Navbar = () => {
    return (
        <>
            <nav className="fixed top-8 z-999 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 p-1 bg-black/40 rounded-full border border-neutral-200/20 backdrop-blur-xs">
                    <NavLink href="/" >
                        Home
                    </NavLink>
                    <NavLink href="/produk-layanan" >
                        Produk & Layanan
                    </NavLink>
                    <NavLink href="/tentang-kami" >
                        Tentang Kami
                    </NavLink>
                    <NavLink href="/kontak" >
                        Kontak
                    </NavLink>

                </div>
            </nav>
        </>
    )
}