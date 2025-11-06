import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Mainheader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#0D1224] w-full">
            {/* ব্যাকগ্রাউন্ড ওভারলে (শুধু মোবাইলে) */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                ></div>
            )}

            <div className="max-w-full shadow-lg fixed w-full bg-[#0D1224] mx-auto px-4 sm:px-6 lg:px-8 z-20">
                <div className="flex items-center justify-between h-16">

                    {/* লোগো */}
                    <a
                        href="#home"
                        className="flex items-center gap-3 focus:outline-none rounded-lg p-1 -m-1"
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg animate-gradient-logo"
                            style={{
                                background:
                                    "linear-gradient(270deg, #F472B6, #A78BFA, #60A5FA, #22D3EE)",
                                backgroundSize: "400% 400%",
                            }}
                        >
                            JM
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient-text">
                                Jihad Mia
                            </span>
                            <p className="text-sm font-medium bg-gradient-to-r from-teal-400 via-indigo-400 to-pink-500 text-transparent bg-clip-text animate-gradient-text">
                                Frontend Developer
                            </p>
                        </div>
                    </a>

                    {/* মোবাইলের জন্য হ্যামবার্গার বাটন */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white text-2xl"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* নেভিগেশন মেনু */}
                    <nav
                        className={`absolute top-16 left-0 w-full bg-[#0D1224] md:static md:flex md:w-auto transition-all duration-300 ease-in-out ${menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0"
                            }`}
                    >
                        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-0">
                            {[
                                { href: "#about", label: "About" },
                                { href: "#experience", label: "Experience" },
                                { href: "#skills", label: "Skills" },
                                { href: "#projects", label: "Projects" },
                                { href: "#contact", label: "Contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)} // ক্লিক করলে মেনু বন্ধ
                                        className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Mainheader;
