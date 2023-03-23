import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MyCarousel() {
    // Define your items and other configuration options here
    const items = [
        <div className="flex flex-col items-center fonteer justify-center mb-10">
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 fonteer dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>

        </div>,
        <div className="flex flex-col fonteer items-center justify-center">
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>
            <div id="item_1">
                <a href="#"
                   className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-teal-300 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://picsum.photos/200/300" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                            enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                        <div className="mt-4 bg-gray-300 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-green-500 text-xs font-extrabold text-white text-center p-0.5 leading-none rounded-full"
                                style={{width: '75%'}}> Completeness 75%
                            </div>
                        </div>

                        <div
                            className=" flex flex-col items-center mt-4 font-extrabold justify-center text-green-500">Click
                            to Visit
                        </div>
                    </div>
                </a>
            </div>

        </div>,

    ];
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
            slidesToSlide: 1 // optional, number of items to slide at once
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
            slidesToSlide: 1 // optional, number of items to slide at once
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, number of items to slide at once
        }
    };

    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
        >
            {items}
        </Carousel>
    );
}

export default MyCarousel