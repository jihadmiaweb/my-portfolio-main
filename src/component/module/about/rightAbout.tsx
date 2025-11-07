import { motion } from "framer-motion";

function RightAbout() {
    return (
        <motion.div
            className="w-[100%] mr-[70px] md:w-[50%] flex items-center gap-5"
            initial={{ opacity: 0, x: 50 }}       // শুরুতে right-এ এবং invisible
            whileInView={{ opacity: 1, x: 0 }}   // scroll করলে আসবে
            viewport={{ once: true, amount: 0.5 }} // একবার effect হবে
            transition={{ duration: 0.8 }}
        >
            <div className="w-[20%]">
                <button className="hidden md:block border borderAnimation px-1.5 py-1 sm:px-3 sm:py-2 [writing-mode:vertical-rl] text-center relative">
                    ABOUT ME
                    <span className="absolute hidden md:block top-[104px] right-[17px] bg-white w-[1px] h-15 animated-line"></span>
                </button>
            </div>
            <div className="w-[95%] sm:w-[80%] md:w-[80%]">
                <motion.img
                    src="/images/jihad.png"
                    alt="photo"
                    className="w-[100%] rounded-2xl transition duration-300 ease"
                    whileHover={{ scale: 1.05, rotate: 5 }} // hover effect
                />
            </div>
        </motion.div>
    );
}

export default RightAbout;
