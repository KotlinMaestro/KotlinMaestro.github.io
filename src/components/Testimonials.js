import Tesrousel from "./Tesrousel";
import MonialCard from "./MonialCard";

function Testimonials(){
    return (
       <div className="flex mt-20 text-slate-600 flex-col fonteer items-center justify-center">
           <div className="flex mb-20 items-center justify-center mb-10 fonteer">
               <h1>
                   <span className="border-b-2 text-slate-700 border-green-500">TESTIMONIALS</span>
               </h1>
           </div>
           <div className="w-4/5 mb-10">
               {/*<Tesrousel/>*/}
               <MonialCard/>
           </div>
       </div>
    )
}
export default Testimonials