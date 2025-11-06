function CartProject() {
    return <>
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-25">
            {/* item 1 start */}
            <div className=" rounded-2xl overflow-hidden">
                <img src="/images/lending.png" alt="site-1" className="h-[45%] w-full cursor-pointer" />
                <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px]">
                    <h4 className="font-bold my-3 text-2xl">Modern Landing Page</h4>
                    <p className="text-[#9CA392]">A clean, responsive landing page designed for fast loading and smooth user experience.
                        Built with Tailwind CSS to look perfect on mobile, tablet, and desktop devices.</p>
                    <div className="flex flex-wrap gap-3.5 pt-3.5 ">
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Html
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Css
                        </span>
                    </div>
                </div>
            </div>
            {/* item 1 end */}

            {/* item 2 start */}
            <div className=" rounded-2xl overflow-hidden">
                <img src="/images/madrasha.png" alt="site-1" className="h-[45%] w-full cursor-pointer" />
                <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px]">
                    <h4 className="font-bold my-3 text-2xl">Educational Website</h4>
                    <p className="text-[#9CA392]">A full-featured school website showcasing courses, announcements, and an easy contact form.
                        Developed with HTML, CSS, and JavaScript for a clear UI.</p>
                    <div className="flex flex-wrap gap-3.5 pt-3.5">
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Html
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Css
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Tailwind
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Javascript
                        </span>
                    </div>
                </div>
            </div>
            {/* item 2 end */}

            {/* item 3 start */}
            <div className=" rounded-2xl overflow-hidden">
                <img src="/images/resturent.png" alt="site-1" className="h-[45%] w-full cursor-pointer" />
                <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px]">
                    <h4 className="font-bold my-3 text-2xl">Food Ordering</h4>
                    <p className="text-[#9CA392]">A stylish restaurant site featuring menu display, online reservations, and contact details.
                        Fully responsive so visitors can browse and book from any device.</p>
                    <div className="flex flex-wrap gap-3.5 pt-3.5">
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Html
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Css
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            Tailwind
                        </span>
                        <span className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm">
                            React
                        </span>
                    </div>
                </div>
            </div>
            {/* item 3 end */}

        </div>
    </>
}

export default CartProject