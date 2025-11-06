import LeftExperience from "./leftExperience"
import RightExperience from "./rightExperience"

function MainExperience() {
    return <>
        <div id="experience" className="px-8 py-20 bg-[#0D1224] text-white border-y-[1px] border-transparent [border-image:linear-gradient(to_right,#0D1224,#9ca3af,#0D1224)_1]">
            <button className="borderAnimation border  ml-[30%] sm:ml-[43%] bg-[#1A1443] px-3 py-2 text-center relative ">
                EXPERIENCES <span className="hidden sm:block absolute top-[20px] right-32.5 bg-white w-55 h-[1px] animated-line"></span>
                <span className="hidden sm:block absolute top-[20px] left-32.5 bg-white w-55 h-[1px] animated-line"></span>
            </button>
            <div className="flex mt-30">
                <LeftExperience />
                <RightExperience />
            </div>
        </div>
    </>
}


export default MainExperience