import Service from "./Service";

function Services() {
    return (
        <div className="">
            <div className="bg-teal-50 mt-20 items-center rounded-bl-full rounded-tr-full justify-center text-slate-600 flex flex-col">
                <div className="flex mt-20 items-center justify-center mb-20 fonteer">
                    <h1>
                        <span className="border-b-2 border-green-500">WHAT I DO</span>
                    </h1>
                </div>
                <div className="flex flex-row p-5 w-3/4">
                    <div className=" w-1/2 p-3 flex flex-col">
                        <Service/>
                        <Service/>
                        <Service/>
                    </div>
                    <div className=" w-1/2 p-3 flex flex-col">
                        <Service/>
                        <Service/>
                        <Service/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services