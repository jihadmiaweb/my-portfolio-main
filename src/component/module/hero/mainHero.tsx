import LeftHero from "./leftHero"
import RightHero from "./rightHero"

function MainHero() {
    return <>
        <div className=" grid grid-rows-1 md:grid-cols-2 px-4 bg-[#0D1224] pt-7 md:items-center md:pb-20 md:pt-20 lg:px-8">
            <LeftHero />
            <RightHero />
        </div>
    </>
}

export default MainHero