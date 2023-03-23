import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComputer} from "@fortawesome/free-solid-svg-icons";

function  Service(){
    return(
        <div className="flex flex-row ml-5 mb-20">
            <div className="mr-3 shadow-lg shadow-green-900 rounded-lg bg-white">
                <FontAwesomeIcon icon={faComputer} className=" m-1 text-green-500 fa-4x" />
            </div>
            <div>
                <h5 className="mb-2 fonteer text-2xl font-extrabold text-slate-700">Front End Development</h5>
                <p className="fonteer">
                    Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                </p>
            </div>
        </div>
    )
}
export default Service