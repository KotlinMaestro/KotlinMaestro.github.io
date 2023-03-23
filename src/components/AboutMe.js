import "../css/watermark.css"

function AboutMe() {
    return (
        <div className="items-center mt-20 justify-center flex flex-col">
            <div className="flex items-center mb-20 justify-center text-slate-700 fonteer">
                <h1>
                    <span className="border-b-2 border-green-500">KNOW ABOUT ME</span>
                </h1>
            </div>
            <div className="flex m-3 flex-row w-3/4">
                <div className="fonteer w-3/5 text-2xl text-slate-600 p-3">
                    <p className="font-semibold text-slate-700">I'm Pasili Vincent, a full-stack developer and software Engineer</p>
                    <p>
                        I help you build brand for your business at an affordable price. Thousands of clients have
                        procured exceptional results while working with our dedicated team. when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book.

                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem
                        Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                        Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a
                        galley.
                    </p>
                </div>
                <div className=" fonteer w-2/5 text-2xl p-3 text-slate-600">
                    <p className=" m-4 flex flex-row border-b-2 border-slate-500 "><h6
                        className="font-bold mr-2">Name:</h6> Vincent Pasili Imbumi
                    </p>
                    <p className=" m-4 flex text-green-500 flex-row border-b-2 border-slate-500"><h6
                        className="font-bold text-slate-600 mr-2">Email: </h6> servincentparsley@gmail.com
                    </p>
                    <p className="m-4 flex flex-row border-b-2 border-slate-500"><h6 className="font-bold mr-2">Age:</h6> 23
                    </p>
                    <p className="m-4 flex flex-row border-b-2 border-slate-500"><h6
                        className="font-bold mr-2">Occupation:</h6> Freelance Software Developer/Vendor
                    </p>
                    <p className="m-4 flex flex-row border-b-2 border-slate-500"><h6
                        className="font-bold mr-2">From:</h6> Nairobi, Kenya
                    </p>
                    <div className="flex items-center mt-7 justify-center">
                        <button type="button"
                                className="text-white fonteer bg-green-500 text-2xl hover:bg-green-900 focus:ring-4 focus:outline-none
                                 focus:ring-blue-300 font-bold rounded rounded-full text-base px-10 py-4 text-center
                                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV
                        </button>
                    </div>
                </div>
            </div>
            <div className=" w-full p-5 flex mt-11 mb-10 fonteer text-slate-600 flex-row">
                <div className=" flex flex-col items-center justify-center w-1/4">
                    <h1>2+</h1>
                    <p>Years Experience</p>
                </div>
                <div className=" flex flex-col items-center justify-center w-1/4">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
                <div className=" flex flex-col items-center justify-center w-1/4">
                    <h1>50+</h1>
                    <p>Projects Done</p>
                </div>
            <div className=" flex flex-col items-center justify-center w-1/4">
                    <h1>4</h1>
                    <p>Awards</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe