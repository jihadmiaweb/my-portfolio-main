import LeftHero from "./leftHero"
import RightHero from "./rightHero"

function MainHero() {
    return <>
        <div className="bg-[#0D1224] ">
            <div className=" my-container pt-25 grid grid-rows-1 md:grid-cols-2 px-4 bg-[#0D1224]  md:items-center md:pb-20 md:pt-20 lg:px-8">
                <LeftHero />
                <RightHero />
            </div>
        </div>
    </>
}

export default MainHero