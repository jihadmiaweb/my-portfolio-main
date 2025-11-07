import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";

function RightContact() {
    // Reusable Tailwind classes for icons
    const iconClasses =
        "bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300";

    const smallIconClasses =
        "bg-gray-500 cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300";

    return (
        <div className="lg:w-1/2 flex items-start">
            {/* Contact Info */}
            <div className="lg:pl-20 pt-8">
                {/* Email */}
                <div className="flex gap-5 mb-7 items-center">
                    <MdOutlineAlternateEmail className={smallIconClasses} />
                    <a
                        href="mailto:jihadmiaweb@gmail.com"
                        className="text-xl hover:underline"
                    >
                        jihadmiaweb@gmail.com
                    </a>
                </div>

                {/* Phone */}
                <div className="flex gap-5 mb-7 items-center">
                    <BiSolidPhoneCall className={smallIconClasses} />
                    <a
                        href="tel:+88010940386783"
                        className="font-semibold text-lg font-sans"
                    >
                        +88010940386783
                    </a>
                </div>


                {/* Location */}
                <div className="flex gap-5 items-center">
                    <LuMapPin className={smallIconClasses} />
                    <p className="text-xl">Dhaka, Bangladesh</p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-10 mt-12">
                    <a href="https://github.com/jihadmiaweb" aria-label="GitHub Profile">
                        <FaGithub className={iconClasses} />
                    </a>
                    <a href="#" aria-label="https://www.linkedin.com/in/jihad-mia-aa97a1395/">
                        <IoLogoLinkedin className={iconClasses} />
                    </a>
                    <a href="#" aria-label="Instagram Profile">
                        <FaInstagram className={iconClasses} />
                    </a>
                    <a href="#" aria-label="https://www.facebook.com/profile.php?id=61582888187110">
                        <TiSocialFacebookCircular className={`${iconClasses} hidden sm:block`} />
                    </a>
                </div>
            </div>

            {/* Vertical CONTACT Button */}
            <div className="ml-5">
                <button className="hidden sm:block font-bold border borderAnimation px-3 py-2 [writing-mode:vertical-rl] text-center relative">
                    CONTACT
                    <span className="absolute top-[102px] right-[17px] bg-white w-[1px] h-20 animated-line"></span>
                </button>
            </div>
        </div>
    );
}

export default RightContact;
