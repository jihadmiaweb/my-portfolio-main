import TopSkills from "./bottomSkills"
import BottomSkills from "./topSkills"

function MainSkills() {
    return <>
        <div className="bg-[#0D1224]">
            <div id="skills" className="my-container  bg-[#0D1224] pb-20 pt-20 lg:px-8 text-white overflow-hidden">
                <BottomSkills />

                <TopSkills />

            </div>
        </div>
    </>
}

export default MainSkills