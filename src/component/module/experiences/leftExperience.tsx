import { motion } from "framer-motion";

function LeftExperience() {
    return (
        <motion.div
            className=" pl-20 md:pt-10 lg:flex w-full lg:w-[50%] justify-center lg:justify-start px-5 lg:pl-20"
            initial={{ opacity: 0, x: -120, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.img
                src="/images/le.png"
                alt="leptop"
                className="w-full max-w-[200px] bg-[#0D1224] sm:max-w-[220px] md:max-w-[250px] rounded-2xl shadow-2xl hover:shadow-glow transition-shadow duration-300"
                animate={{ y: [0, -10, 0] }} // subtle vertical bounce
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08, rotate: 5 }}
            />
        </motion.div>
    );
}

export default LeftExperience;


