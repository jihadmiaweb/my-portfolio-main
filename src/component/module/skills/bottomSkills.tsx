const skills = [
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "Tailwind", icon: "/images/tailwind.svg" },
    { name: "Bootstrap", icon: "/images/bootstrap.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "Figma", icon: "/images/figma.svg" },
    { name: "Git", icon: "/images/git.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "Tailwind", icon: "/images/tailwind.svg" },
    { name: "Bootstrap", icon: "/images/bootstrap.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "Figma", icon: "/images/figma.svg" },
    { name: "Git", icon: "/images/git.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "Tailwind", icon: "/images/tailwind.svg" },
    { name: "Bootstrap", icon: "/images/bootstrap.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "Figma", icon: "/images/figma.svg" },
    { name: "Git", icon: "/images/git.svg" },
    { name: "React", icon: "/images/react.svg" },
];

function BottomSkills() {
    return (
        <div className="slider py-12 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center cursor-pointer bg-[#11152C] border border-[#1B1E37] border-t-[3px] 
                     px-6 py-5 rounded-xl shadow-lg h-[120px] min-w-[120px] sm:h-[150px] sm:min-w-[150px] 
                     hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-11 h-11 sm:w-16 sm:h-16 object-contain"
                    />
                    <p className="py-3 font-bold text-[18px] sm:text-2xl">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}

export default BottomSkills;
