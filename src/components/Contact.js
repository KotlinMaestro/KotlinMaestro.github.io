import { faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faFacebook, faSquareInstagram, faGithub,} from '@fortawesome/free-brands-svg-icons';
import Footer from "./Footer";


function Contact() {
    return (
        <div className="bg-teal-50">
        <div className="bg-slate-50 shadow shadow-teal-300 rounded rounded-full mt-20 flex flex-col items-center fonteer text-slate-600 justify-center">
            <div className="flex flex-col mt-20 mb-20 items-center justify-center mb-10 fonteer">
                <h1>
                    <span className="border-b-2 border-green-500 text-slate-700">CONTACT ME</span>
                </h1>
            </div>
            <div className="flex  flex-row w-3/4">
                <div className="flex flex-col items-center justify-center font-semibold w-1/5" id="address">
                    <h3 className="text-2xl font-semibold text-slate-700 mb-4">Address</h3>
                    <p className="mb-7">
                        4th Floor, Plot No.22,
                        145 Murphy Canyon Rd.
                        San Diego CA 2028
                    </p>
                    <h3 className="mb-3">
                        <FontAwesomeIcon icon={faPhoneVolume} className="fa-xl mr-3 text-green-500"/>
                        2547 90764 181
                    </h3>
                    <h3>
                        <FontAwesomeIcon icon={faEnvelope} className="fa-xl mr-3 text-green-500"/>
                        servincentparsley@gmail.com
                    </h3>
                    <h3 className="text-sm font-extrabold my-4">Follow Me</h3>
                    <div className="fa-2xl text-green-500">
                       <a href="#"><FontAwesomeIcon icon={faFacebook} className="mr-3" /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="mr-3" /></a>
                       <a href="#"><FontAwesomeIcon icon={faTwitter} className="mr-3" /></a>
                       <a href="#"><FontAwesomeIcon icon={faGithub} className="mr-3" /></a>
                    </div>

                </div>
                <div className="ml-20 w-4/5">
                    <div><h3 className="text-2xl font-semibold text-slate-700 mb-4">Send me a message</h3></div>

                    <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name"
                                       className="block mb-2 text-sm font-semibold text-slate-700 dark:text-white">Full Name</label>
                                <input type="text" id="first_name"
                                       className="bg-gray-50 border border-teal-400 text-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="John" required/>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-semibold text-slate-700 dark:text-white">Your Email</label>
                                <input type="email" id="email"
                                       className="bg-gray-50 border border-teal-400 text-slate-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Doe" required/>
                            </div>
                        </div>
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-semibold text-slate-700 dark:text-white">Your
                            message</label>
                        <div className="w-full flex flex-col items-center justify-center">
                            <textarea id="message" rows="5"
                                      className="block p-2.5 w-full text-slate-600 fonteer bg-gray-50 rounded-lg border border-teal-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-teal-700 dark:border-gray-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Write your thoughts here..."></textarea>
                            <button type="button"
                                    className="mt-5 py-4 mb-20 px-12 bg-green-500 rounded text-white hover:text-white hover:bg-green-800 focus:ring-4
                focus:outline-none focus:ring-green-300 text-2xl font-bold rounded-full text-center mr-2
                 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600
                 dark:focus:ring-green-800">Submit Message</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
            <Footer/>
        </div>
    )
}

export default Contact