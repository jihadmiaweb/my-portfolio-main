import CartProject from "./cartProject"
import HeaderProject from "./headerProject"

function MainProject() {
    return <>
        <div id="projects" className=" px-8 bg-gray-950  text-white ">
            <HeaderProject />
            <CartProject />
        </div>
    </>
}

export default MainProject