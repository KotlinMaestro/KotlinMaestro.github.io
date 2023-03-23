import Starry from "./Starry";

function MonialCard() {
    return (

        <div
            className="grid mb-8 border fonteer border-gray-200 text-slate-600 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure
                className="flex flex-col text-lg items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-3 text-gray-600 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Very easy this was to
                        integrate</h3>
                    <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                </blockquote>

                <figcaption className="flex mb-5 items-center justify-center space-x-3">
                    <img className="rounded-full w-9 h-9"
                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                         alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI
                        </div>
                    </div>
                </figcaption>
                <Starry/>
            </figure>
            <figure
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-3 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Solid foundation for any
                        project</h3>
                    <p className="my-4 font-light">Designing with Figma components that can be easily translated to the
                        utility classes of Tailwind CSS is a huge timesaver!"</p>
                </blockquote>
                <figcaption className="flex mb-5 items-center justify-center space-x-3">
                    <img className="rounded-full w-9 h-9"
                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                         alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Roberta Casas</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at
                            Dropbox
                        </div>
                    </div>
                </figcaption>
                <Starry/>
            </figure>
            <figure
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-3 text-gray-600 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Mindblowing workflow</h3>
                    <p className="my-4 font-light">Aesthetically, the well designed components are beautiful and will
                        undoubtedly level up your next application."</p>
                </blockquote>
                <figcaption className="flex mb-5 items-center justify-center space-x-3">
                    <img className="rounded-full w-9 h-9"
                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                         alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div className="text-sm font-light text-gray-600 dark:text-gray-400">Software Engineer at
                            Facebook
                        </div>
                    </div>
                </figcaption>
                <Starry/>
            </figure>
            <figure
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-3 text-gray-600 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-white">Efficient Collaborating</h3>
                    <p className="my-4 font-light">You have many examples that can be used to create a fast prototype
                        for your team."</p>
                </blockquote>
                <figcaption className="flex mb-5 items-center justify-center space-x-3">
                    <img className="rounded-full w-9 h-9"
                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                         alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Joseph McFall</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                    </div>
                </figcaption>
                <Starry/>
            </figure>
        </div>

    )
}

export default MonialCard