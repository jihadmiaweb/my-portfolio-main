const projects = [
    {
        title: "Modern Landing Page",
        description:
            "A clean, responsive landing page designed for fast loading and smooth user experience. Built with Tailwind CSS to look perfect on mobile, tablet, and desktop devices.",
        img: "/images/lending.png",
        link: "",
        tech: ["Html", "React", "Css", "Tailwind", "Javascript"],
    },
    {
        title: "Educational Website",
        description:
            "A full-featured school website showcasing courses, announcements, and an easy contact form. Developed with HTML, CSS, and JavaScript for a clear UI.",
        img: "/images/mardasa.png",
        link: "https://online-mdrasha-web-site.vercel.app/",
        tech: ["Html", "React", "Css", "Tailwind", "Javascript"],
    },
    {
        title: "Porsonal Wevsite",
        description:
            "A stylish restaurant site featuring menu display, online reservations, and contact details. Fully responsive so visitors can browse and book from any device.",
        img: "/images/resturent.png",
        link: "https://porsonal-wevsite.vercel.app/",
        tech: ["Html", "Css", "Javascript", "Tailwind", "React"],
    },
];

function CartProject() {
    return (
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-24">
            {projects.map((project, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-[45%] w-full cursor-pointer"
                        />
                    </a>
                    <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px]">
                        <h4 className="font-bold my-3 text-2xl">
                            {project.title}
                        </h4>
                        <p className="text-[#9CA392]">{project.description}</p>
                        <div className="flex flex-wrap gap-3.5 pt-3.5 pb-20">
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