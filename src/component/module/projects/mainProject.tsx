import CartProject from "./cartProject"
import HeaderProject from "./headerProject"

function MainProject() {
    return <>
        <div className="bg-[#0D1224]">
            <div id="projects" className=" my-container px-8 bg-[#0D1224]  text-white ">
                <HeaderProject />
                <CartProject />
            </div>
        </div>
    </>
}

export default MainProject