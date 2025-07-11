import Explo from '../images/explo.jpeg'
import Portfolio from "../images/Portfolio.png"
import Internship from "../images/internship.png"
import weather from "../images/weather.png"

function Projects(prop) {
    return (
        <>
            <section className={`flex flex-col pt-5 ${prop.bg} ${prop.tx} min-h-screen`}>
                <h1 className="mb-8 text-center font-bold text-4xl">Tech Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    <div className={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}>

                        <img src={Portfolio} alt="Project Screenshot" className="rounded-xl mb-3" />

                        <h5 className="text-xl font-semibold text-indigo-700">Portfolio Website</h5>

                        <p className="text-base">A responsive front-end project using React, TailwindCSS, and modern JavaScript to build interactive UIs.</p>
                        <a target="_blank">
                            <button className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow" onClick={()=>alert("Welcome! You're viewing my Portfolio Website.")}>
                                View Project
                            </button>
                        </a>
                    </div>

                    <div className={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}>

                         <img src={weather} alt="Project Screenshot" className="rounded-xl mb-3" />

                        <h5 className="text-xl font-semibold text-indigo-700">WeatherVue</h5>

                        <p className="text-base">A responsive React weather app showing real-time data with dynamic backgrounds and icons using OpenWeather API.</p>
                        <a href='https://kejriwalkaushal04.github.io/WeatherVue/' target="_blank">
                            <button className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
                                View Project
                            </button>
                        </a>
                    </div>

                    <div className={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}>

                         <img src={Internship} alt="Project Screenshot" className="rounded-xl mb-3" />

                        <h5 className="text-xl font-semibold text-indigo-700">Internship Portal (Ongoing)</h5>

                        <p className="text-base">A responsive full-stack platform connecting students and professors to streamline the process of finding and hiring research interns.</p>
                        <a  target="_blank">
                            <button className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow" onClick={()=>alert("The Website is Under development")}>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section className={`flex flex-col pt-5 ${prop.bg} ${prop.tx} min-h-screen`}>
                <h1 className="mb-8 text-center font-bold text-4xl">Research Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    <div className={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}>

                        <img src={Explo} alt="Research Screenshot" className="rounded-xl mb-3" />

                        <h5 className="text-xl font-semibold text-indigo-700">Smart Food Packaging Material</h5>

                        <p className="text-base">Biodegradable Films of PLA and Turmeric as Packaging Materials and Smart Indicators of Food Spoilage</p>
                        <a href="https://drive.google.com/file/d/1yBnfhloA5Z2LO22S1Y5qKfvyJXHZazPF/view?usp=sharing" target="_blank">
                            <button className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
                                View Project
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>


    )
}
export default Projects