import LeftAbout from "./leftAbout"
import RightAbout from "./rightAbout"

function MainAbout() {
    return <>
        <div id="about" className=" flex flex-col justify-center items-center md:flex-row md:justify-normal gap-10 text-white bg-[#0D1224] pb-10 pt-10   md:pt-20 md:pb-20 px-8">
            <LeftAbout />

            <RightAbout />
        </div>
    </>
}

export default MainAbout