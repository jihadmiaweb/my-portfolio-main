


export default function RightHero({
    name = "JIHAD MIA",
    skills = [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Figma",
    ],
}) {
    return (
        <div className="w-[250px] bg-[#0D1224]   sm:w-fit md:w-full mx-auto pt-7 ">
            {/* Window shell */}
            <div className="rounded-xl overflow-hidden border border-gray-400 bg-gradient-to-b from-[#0b1220] to-[#071026] shadow-[0_8px_30px_rgba(13,18,30,0.6)]">
                {/* Top bar with three dots */}
                <div className="flex items-center gap-3 sm:px-4 px-1 py-3 bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.03)]">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#ff6b6b] block" />
                        <span className="h-3 w-3 rounded-full bg-[#ffd66b] block" />
                        <span className="h-3 w-3 rounded-full bg-[#76f2c0] block" />
                    </div>
                    <div className="ml-auto text-xs text-[rgba(255,255,255,0.18)] tracking-wide">
                        <span className="px-2 py-0.5 rounded-md">index.js</span>
                    </div>
                </div>

                {/* Code area */}
                <div className="relative sm:p-6 p-1">
                    {/* subtle grid background (like image) */}
                    <div
                        className="pointer-events-none absolute inset-6 rounded-lg opacity-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgb(255 255 255 / 2%) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 2%) 1px, transparent 1px)",
                            backgroundSize: "48px 48px, 48px 48px",
                            zIndex: 0,
                        }}
                    />

                    <pre
                        className="relative z-10 m-0 text-sm leading-6 text-[rgba(255,255,255,0.92)] overflow-auto"
                        aria-hidden="false"
                    >
                        <code>
                            {`const coder = {`}
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  name</span>
                            <span className="text-white">: </span>
                            <span className="text-amber-300">'${name}'</span>
                            <span className="text-white">,</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  skills</span>
                            <span className="text-white">: [</span>
                            <span className="text-cyan-300">
                                {skills.map((s, i) => `'${s}'${i + 1 !== skills.length ? ", " : ""}`)}
                            </span>
                            <span className="text-white">],</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  hardWorker</span>
                            <span className="text-white">: </span>
                            <span className="text-green-300">true</span>
                            <span className="text-white">,</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  quickLearner</span>
                            <span className="text-white">: </span>
                            <span className="text-green-300">true</span>
                            <span className="text-white">,</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  problemSolver</span>
                            <span className="text-white">: </span>
                            <span className="text-green-300">true</span>
                            <span className="text-white">,</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-pink-400">  hireable</span>
                            <span className="text-white">: </span>
                            <span className="text-white">function</span>
                            <span className="text-white"> () {'{'}</span>
                        </code>
                        <code className="block pl-6">
                            <span className="text-white">    return (</span>
                        </code>
                        <code className="block pl-8">
                            <span className="text-cyan-200">this.hardWorker</span>
                            <span className="text-white"> &&</span>
                        </code>
                        <code className="block pl-8">
                            <span className="text-cyan-200">this.problemSolver</span>
                            <span className="text-white"> &&</span>
                        </code>
                        <code className="block pl-8">
                            <span className="text-cyan-200">this.skills.length</span>
                            <span className="text-white"> &gt;= </span>
                            <span className="text-amber-300">5</span>
                        </code>
                        <code className="block pl-6">
                            <span className="text-white">    );</span>
                        </code>
                        <code className="block pl-2">
                            <span className="text-white">  {'}'},</span>
                        </code>
                        <code>
                            {`};`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
