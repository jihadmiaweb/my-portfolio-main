import { useState, useEffect } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

export default function HeroText() {
    const phoneNumber = "88010940386783"; // তোমার WhatsApp number (country code + number)
    const message = "Hi Jihad, I want to contact you regarding web development.";

    // URL encode message for WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const texts = ["Web Developer", "Front-End Developer"];
    const [textIndex, setTextIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [forward, setForward] = useState(true);

    useEffect(() => {
        const currentText = texts[textIndex];
        const speed = forward ? 150 : 80; // টাইপ স্পিড ও ডিলিট স্পিড

        const timer = setTimeout(() => {
            if (forward) {
                setDisplay(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setForward(false);
                    setTimeout(() => { }, 1000); // stop before delete
                }
            } else {
                setDisplay(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setForward(true);
                    setTextIndex((prev) => (prev + 1) % texts.length); // next text এ যাও
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, forward, texts, textIndex]);

    return (
        <section className=" bg-[#0D1224] pt-0 sm:pt-9">
            <div className="text-[30px] leading-[46px] sm:text-[40px] sm:leading-[56px] font-bold text-white">
                <h1 className="">
                    Hello,
                </h1>
                <h1 className="">
                    This is <span className="text-[#EC4899]">JIHAD MIA</span>,
                </h1>
                <h1 className="">
                    I'm a Professional
                </h1>

                {/* নিচের লাইন টাইপিং অ্যানিমেশন */}
                <h1 className=" text-[#16F2B3] text-[25px] md:text-[34px] lg:text-[40px]">
                    {display}
                    <span className="animate-pulse">_.</span>
                </h1>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-[25px]">
                <a href="https://github.com/jihadmiaweb">
                    <FaGithub className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="https://www.linkedin.com/in/jihad-mia-aa97a1395/">
                    <FaLinkedin className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582888187110">
                    <MdFacebook className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="">
                    <FaTwitterSquare className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-3.5 mt-15  md:mt-10">
                <a
                    href={whatsappLink}
                    target="_blank"                     // নতুন tab-এ খুলবে
                    rel="noopener noreferrer"
                >
                    <button className="flex gap-1.5 w-[130px] sm:w-fit items-center cursor-pointer uppercase px-6 py-3 border border-[#E8489C] rounded-lg text-white font-semibold 
                         hover:border-[#E8489C]
                         transition-all duration-300 transform hover:scale-105 origin-left">
                        Contact me
                        <BsFillPersonLinesFill />
                    </button>
                </a>



                <button className="flex gap-1.5 w-[130px] sm:w-fit items-center cursor-pointer uppercase px-6 py-3  rounded-lg text-white font-semibold bg-gradient-to-r from-[#863BE6] to-[#E8489C]
                     hover:from-[#E8489C] hover:to-[#863BE6] hover-gap-3 
                     transition-all duration-300 transform hover:scale-x-105 origin-left">
                    <a href="https://drive.google.com/file/d/1iA-SN3vdEYEQh1JrvXvYPCdNy3XZOaYb/view?usp=sharing">
                        RESUME
                    </a>

                    <IoMdDownload />
                </button>
            </div>
        </section>
    );
}
