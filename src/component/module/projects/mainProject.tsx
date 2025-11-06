import CartProject from "./cartProject"
import HeaderProject from "./headerProject"

function MainProject() {
    return <>
        <div id="projects" className=" px-8 bg-[#0D1224] text-white ">
            <HeaderProject />
            <CartProject />
        </div>
    </>
}

export default MainProject