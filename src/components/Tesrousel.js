import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Tesrousel() {
    // Define your items and other configuration options here
    const items = [
        <div className="bg-blue-700 m-10 w-3/4">Item 1</div>,
        <div className="bg-blue-700 m-10 w-3/4">Item 2</div>,
        <div className="bg-blue-700 m-10 w-3/4">Item 3</div>,
        <div className="bg-blue-700 m-10 w-3/4">Item 4</div>
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, number of items to slide at once
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, number of items to slide at once
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
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
            autoPlaySpeed={11000}
        >
            {items}
        </Carousel>
    );
}
export default Tesrousel