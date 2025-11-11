// import React from "react";

// // --- Type Definitions ---
// interface Project {
//     id: number;
//     title: string;
//     description: string;
//     img: string;
//     link?: string; // optional link
//     tech: string[];
// }

// // --- Projects Data ---
// const PROJECTS_DATA: Project[] = [
//     {
//         id: 1,
//         title: "Modern Landing Page",
//         description:
//             "A clean, responsive landing page designed for fast loading and smooth user experience. Built with Tailwind CSS to look perfect on mobile, tablet, and desktop devices.",
//         img: "/images/lending.png",
//         link: "https://potpoufile.vercel.app/",
//         tech: ["HTML", "React", "CSS", "Tailwind", "JavaScript"],
//     },
//     {
//         id: 2,
//         title: "Educational Website",
//         description:
//             "A full-featured school website showcasing courses, announcements, and an easy contact form. Developed with HTML, CSS, and JavaScript for a clear UI.",
//         img: "/images/2.png",
//         link: "https://online-mdrasha-web-site.vercel.app/",
//         tech: ["HTML", "React", "CSS", "Tailwind", "TypeScript"],
//     },
//     {
//         id: 3,
//         title: "Personal Website",
//         description:
//             "A stylish restaurant site featuring menu display, online reservations, and contact details. Fully responsive so visitors can browse and book from any device.",
//         img: "/images/3.png",
//         link: "https://porsonal-wevsite.vercel.app/",
//         tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
//     },
// ];

// // --- Custom Hook ---
// const useProjects = (): Project[] => PROJECTS_DATA;

// // --- Tech Stack Component ---
// interface TechStackProps {
//     tech: string[];
// }

// const TechStack: React.FC<TechStackProps> = ({ tech }) => (
//     <div className="flex flex-wrap gap-2 mt-4" aria-label="Technologies used">
//         {tech.map((skill) => (
//             <span
//                 key={skill}
//                 className="px-3 py-1 rounded-full border border-purple-500 text-purple-300 text-xs font-medium bg-gray-700/50 hover:bg-purple-900 transition duration-150"
//             >
//                 {skill}
//             </span>
//         ))}
//     </div>
// );

// // --- Project Card Component ---
// interface ProjectCardProps {
//     project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//     const hasLink = !!project.link;
//     const overlayText = hasLink ? "View Live Site" : "Details Coming Soon";

//     const cardContent = (
//         <div className="h-full rounded-2xl overflow-hidden shadow-xl bg-gray-900 transition duration-300 transform hover:shadow-2xl hover:scale-[1.02] flex flex-col group">
//             {/* Image & Hover Overlay */}
//             <div className="relative aspect-video overflow-hidden">
//                 <img
//                     loading="lazy"
//                     src={project.img}
//                     alt={`Preview of ${project.title}`}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div
//                     className={`absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 ${hasLink ? "group-hover:opacity-100 cursor-pointer" : ""
//                         }`}
//                 >
//                     <span className="text-white text-lg font-bold border-2 border-purple-400 px-6 py-2 rounded-full uppercase tracking-wide">
//                         {overlayText}
//                     </span>
//                 </div>
//             </div>

//             {/* Card Content */}
//             <div className="flex-grow bg-gray-800 p-6 border-t-4 border-purple-500 flex flex-col justify-between transition duration-300">
//                 <div>
//                     <h4 className="text-white font-extrabold text-xl mb-2 tracking-wide">
//                         {project.title}
//                     </h4>
//                     <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
//                 </div>
//                 <TechStack tech={project.tech} />
//             </div>
//         </div>
//     );

//     if (hasLink) {
//         return (
//             <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`View live project: ${project.title}`}
//                 className="block h-full"
//             >
//                 {cardContent}
//             </a>
//         );
//     }

//     return cardContent;
// };

// // --- Main Projects Container ---
// const CartProject: React.FC = () => {
//     const projects = useProjects();

//     return (
//         <section className="container mx-auto px-4 py-16">
//             <h2 className="sr-only">Project Portfolio</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default CartProject;



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
