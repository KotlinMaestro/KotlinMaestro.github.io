import MyCarousel from "./Carousel";

function Portfolio() {
    return (
        <div className=" co-background bg-teal-50 bg-opacity-75 bg-blend-multiply">
            <div className="bg-teal-50 rounded-tl-full shadow bg-transparent shadow-slate-100 mt-20 text-slate-600 flex flex-col items-center justify-center">
                <div className="flex items-center my-20 text-slate-700 justify-center mb-10 fonteer">
                    <h1>
                        <span className="border-b-2 border-green-500">PORFOLIO</span>
                    </h1>
                </div>

                <div className=" flex mb-20 flex-col mt-10 w-3/4">
                    <div className=" flex flex-row w-1/2 items-end justify-end">
                        <h3 className="mb-4 text-2xl fonteer font-bold">Previous and ongoing projects</h3>
                    </div>
                    <MyCarousel />
                </div>
            </div>
        </div>

)
}
export default Portfolio