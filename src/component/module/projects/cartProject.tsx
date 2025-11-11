



function CartProject() {
    const projects = [
        {
            title: "Blog Site",
            img: "/images/3s.png",
            desc: "A responsive blog platform built with React.js and Tailwind CSS. It features a clean UI, smooth navigation, and fast performance, focusing on readability and user experience.",
            tech: ["HTML", "CSS", "Tailwind", "React.js", "React-Router",],
            site: "https://conten-bolog-site.vercel.app/",
        },
        {
            title: "Portfolio",
            img: "/images/2s.png",
            desc: "A modern and elegant personal portfolio website built with the latest web technologies. Designed with a clean UI, smooth animations, and a fully responsive layout that looks perfect on any device.",
            tech: ["HTML", "Tailwind", "React", "Framer-Motion"],
            site: "https://jihad-portfolio-main.vercel.app/",
        },
        {
            title: "Educational Website",
            img: "/images/1s.png",
            desc: "A modern, animated, and responsive Madrasah website with elegant design and smooth user experience.",
            tech: ["HTML5", "Tailwind", "React.js", "React-Router", "Framer-Motion"],
            site: "https://online-mdrasha-web-site.vercel.app/",
        },
    ];

    return (
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-25">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-2xl overflow-hidden group"
                >
                    <div className="relative h-[250px] overflow-hidden">
                        <a href={project.site} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-auto transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[60%] cursor-pointer"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                                <span className="text-gray-300 text-lg font-semibold tracking-wide">
                                    Click Here
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px] transition-all duration-300">
                        <h4 className="font-bold my-3 text-2xl">{project.title}</h4>
                        <p className="text-[#9CA392]">{project.desc}</p>

                        <div className="flex flex-wrap gap-3.5 pt-3.5">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default CartProject;
