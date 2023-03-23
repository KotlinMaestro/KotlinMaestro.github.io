import Headline from "./Headline";
import "../css/Home.css"
import HomeButton from "./HomeButton";
import Navbar from "./NavBar";

function Home() {

    return (
        <div id="Home" className="bg-background rounded-b-2xl object-cover h-full w-full bg-teal-800 bg-cover bg-center h-screen bg-opacity-100 bg-blend-multiply">
            <Navbar/>
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 className="text-white mb-4 font-extrabold text-3xl">Welcome</h1>
                <Headline/>
                <h3 className="text-white text-3xl mb-5 mt-6">Based In Nairobi, Kenya</h3>
                <HomeButton/>
            </div>
        </div>
    )
}

export default Home