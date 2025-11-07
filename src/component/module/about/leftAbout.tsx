import { motion } from "framer-motion";

function LeftAbout() {
    return (
        <motion.div
            className="md:w-[50%] justify-between pt-15"
            initial={{ opacity: 0, y: -50 }}   // শুরুতে left-এ এবং invisible
            whileInView={{ opacity: 1, y: 0 }} // scroll করলে আসবে
            viewport={{ once: true, amount: 0.5 }} // একবার দেখানোর জন্য
            transition={{ duration: 0.8 }}
        >
            <h3 className="w-[90%] text-[#16F2B3] text-center font-bold text-[27px] mb-3">
                Who Am I?
            </h3>
            <p className="w-[90%] text-[17px] font-[400] leading-[27px] text-justify">
                Hi, I'm Jihad Mia — a dedicated and motivated Front-End Web Developer
                with a strong passion for building modern, responsive, and user-friendly
                web applications. I specialize in HTML5, Tailwind CSS, Bootstrap,
                JavaScript, React.js and I love turning creative ideas into real-world
                projects. I'm experienced with tools and libraries like React Router,
                Context API, and localStorage, and I'm also comfortable working with
                backend technologies like Node.js, Express.js, Firebase, and MongoDB for
                full-stack development.
            </p>
        </motion.div>
    );
}

export default LeftAbout;
