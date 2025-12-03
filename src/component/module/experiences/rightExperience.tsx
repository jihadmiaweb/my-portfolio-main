import { FaUserGraduate } from "react-icons/fa";

function RightExperience() {
    const experiences = [
        {
            period: "Jun 2025 - Present",
            title: "Front-End Developer",
            institute: "Ahmad's IT Institute",
        },
        {
            period: "November 2025 - Present",
            title: "Complete Web Development Course",
            institute: "Programming Hero",
        },
    ];

    return (
        <div className="flex flex-col px-2 sm:px-4 md:px-8 lg:px-0 justify-center items-center w-full lg:w-[50%] gap-6">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="glow-border w-full max-w-md sm:max-w-lg py-6 sm:py-7 px-4 sm:px-8 rounded-xl bg-[#11152C] shadow-lg"
                >
                    <h3 className="text-center text-[#1DD8AD] text-sm sm:text-base md:text-lg mb-4">
                        ({exp.period})
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        <FaUserGraduate className="text-3xl sm:text-4xl text-[#8B5BF6]" />
                        <div className="text-center sm:text-left">
                            <p className="text-lg sm:text-2xl font-semibold mb-1">{exp.title}</p>
                            <span className="text-gray-300 text-sm sm:text-base">{exp.institute}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RightExperience;
