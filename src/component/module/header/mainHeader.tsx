import React, { useState } from 'react';

// --- SVG Props Type ---
// React.SVGProps<SVGSVGElement> দিয়ে সব SVG props type safe হয়
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- Navigation Item Type ---
type NavItem = {
    href: string;
    label: string;
};

// --- Header Component ---
export const Mainheader: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const handleNavLinkClick = () => setMenuOpen(false);

    return (
        <header className=" fixed border-b border-[#1E293B] top-0 left-0 w-full z-50  ">
            {/* Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                ></div>
            )}

            <div className="max-w-7xl my-container  shadow-lg  bg-[#0D1224] mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between relative z-50">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-3 p-1 -m-1 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
                >
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-md"
                        style={{
                            background:
                                "linear-gradient(270deg, #F472B6, #A78BFA, #60A5FA, #22D3EE)",
                        }}
                    >
                        JM
                    </div>

                    <div className="hidden sm:block">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                            Jihad Mia
                        </span>
                        <p className="text-sm font-medium bg-gradient-to-r from-teal-400 via-indigo-400 to-pink-500 text-transparent bg-clip-text">
                            Frontend Developer
                        </p>
                    </div>
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white w-9 h-9 md:hidden p-2 rounded-full hover:bg-[#1E293B] transition"
                >
                    {menuOpen ? <XIcon /> : <MenuIcon />}
                </button>

                {/* Nav Menu */}
                <nav
                    className={`absolute md:static top-16 right-0 
            w-64 md:w-auto bg-[#0D1224] md:bg-transparent 
            transition-all duration-300 shadow-xl md:shadow-none 
            p-5 md:p-0 rounded-b-lg 
            ${menuOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-full md:opacity-100 md:translate-x-0 pointer-events-none md:pointer-events-auto"
                        }
            z-50`}
                >
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={handleNavLinkClick}
                                    className="block py-2 px-3 md:p-0 text-white uppercase font-medium text-sm tracking-wider relative group hover:text-pink-500 transition"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="https://drive.google.com/file/d/1iA-SN3vdEYEQh1JrvXvYPCdNy3XZOaYb/view?usp=sharing"
                                onClick={handleNavLinkClick}
                                className="inline-block px-5 py-2 text-white font-bold text-sm rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-pink-500/50 transform hover:scale-105"
                            >
                                RESUME
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};
