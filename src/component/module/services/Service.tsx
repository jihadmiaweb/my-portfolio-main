import { motion, type Variants, } from "framer-motion";

const HeroPrimaryColor = "#854FEE";
const HeroAccentColor = "#FF4D6D";
const HeroMidColor = "#4A90E2";

const ServiceData = [
  { id: 1, image: "/images/services/s1.png", name: "Wp Developing", details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  { id: 2, image: "/images/services/s2.png", name: "UI/UX Design", details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  { id: 3, image: "/images/services/s3.png", name: "Web Design", details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
  { id: 4, image: "/images/services/s4.png", name: "SEO Optimize", details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree" },
];

// TypeScript safe Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  hovered: { scale: 1.05, transition: { type: "spring", stiffness: 150, damping: 20 } },
};

const Service = () => {
  return (
    <section id="services" className="bg-[#0D1224] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            My{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r 
                         from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] 
                         bg-[length:200%_200%] animate-gradient-x"
            >
              Service Offers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-gray-400 sm:text-lg leading-relaxed"
          >
            Providing expert development services with a focus on modern, performant, and scalable web applications.
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial=""
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {ServiceData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              initial=""
              whileHover="hovered"
              className="group relative p-8 rounded-xl border border-gray-800 bg-[#0D1224] text-center overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  padding: "2px",
                  background: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                  WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  zIndex: 0,
                  opacity: 0,
                }}
                variants={{
                  hovered: { opacity: 1, transition: { duration: 0.5 } },
                  hidden: { opacity: 0 },
                }}
              />

              <div className="relative z-10">
                {/* Animated Gradient Icon */}
                <motion.div
                  className="mx-auto h-16 w-16 p-3 rounded-full flex items-center justify-center mb-6 shadow-lg
                             bg-clip-text text-transparent bg-gradient-to-r 
                             from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] 
                             bg-[length:200%_200%] animate-gradient-x"
                  variants={{
                    hovered: { scale: 1.1, transition: { type: "spring", stiffness: 150, damping: 20 } },
                    hidden: { scale: 1 },
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-10 w-10 object-contain filter brightness-125"
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{service.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
