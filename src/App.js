import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <div id={`home`}>
                <Home/>
            </div>
            <div id={`about-me`}>
                <AboutMe/>
            </div>
            <div id={`services`}>
                <Services/>
            </div>
            <div id={`resume`}>
                <Resume/>
            </div>
            <div id={`portfolio`}>
                <Portfolio/>
            </div>
            <div id={`testimonials`}>
                <Testimonials/>
            </div>
            <div id={`contact`}>
                <Contact/>
            </div>
        </div>
    );
}

export default App;