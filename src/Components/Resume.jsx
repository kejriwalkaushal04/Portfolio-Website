import {useState} from 'react';

function Resume(prop) {

    const certifications = [
        {
            title: 'Online Certification Course on Sensors and Actuators (IISc Bangalore)',
            description: 'Completed an in-depth course covering the working, fabrication, and applications of sensors and actuators used in modern engineering systems eg- Biomedical applications',
            link: 'https://drive.google.com/file/d/1fZ1rjtl4q2oUpElmYoy7dUjbGDZNE4wm/view?usp=drive_link',
        },
        {
            title: 'MATLAB Onramp Certification',
            description: 'Completed online introductory course by MathWorks covering the fundamentals of MATLAB programming, data analysis, and visualization. Gained hands-on experience with scripts, functions, and interactive tools for technical computing',
            link: 'https://drive.google.com/file/d/1Kk68gbY8xMVX3DRwjM16wU_L61fP7oST/view?usp=drive_link',
        },
    ];

    const [openStates, setOpenStates] = useState(Array(certifications.length).fill(false));

    const toggleCollapse = (index) => {
        setOpenStates((prevStates) =>
            prevStates.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <>
            <section class={`flex flex-col pt-5 ${prop.bg} ${prop.tx} min-h-screen`}>
                <h1 class="mb-8 text-center font-bold text-4xl ">Skills</h1>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-indigo-700">Front-End Development</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                            <li>React Js</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-green-700">Back-End Development</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-green-700">Databases</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-purple-700">Tools & Platforms</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Git & GitHub</li>
                            <li>Vercel</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-purple-700">Data Science Libraries</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Numpy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-purple-700">Programming Languages</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>C/C++</li>
                            <li>Python</li>
                            <li>Javascript</li>
                        </ul>
                    </div>

                    <div class={`flex flex-col gap-3 p-5 rounded-2xl ${prop.nav} shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h5 class="text-xl font-semibold text-purple-700">Designing and Editing Software</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                            <li>Canva</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>

                <section class={`${prop.bg} mt-5 pt-10 px-6`}>
                    <h1 class={`text-center text-3xl font-bold mb-6`}>Additional Skills</h1>

                    <div class="p-6 ">
                        <ul class="list-disc list-inside space-y-2 text-lg">
                            <li>MATLAB</li>
                            <li>Origin</li>
                            <li>Fullproff</li>
                        </ul>
                    </div>

                    <h1 class="text-center text-3xl font-bold mb-6">Education</h1>
                    <div class="p-6">
                        <ul class="list-disc pl-6 space-y-4  text-lg">
                            <li>
                                <div>
                                    <span class="font-semibold">Integrated Dual Degree (B.Tech + M.Tech) in Materials Science and Technology</span><br />
                                    <span class="text-base">Indian Institute of Technology (BHU) Varanasi (Aug 2023 - Present)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="p-6">
                    <h1 className="text-center text-3xl font-bold mb-6">Certifications</h1>

                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleCollapse(index)}
                                    className="flex justify-between w-full p-4 text-left "
                                >
                                    <span className="font-medium">{cert.title}</span>
                                    <span>{openStates[index] ? '▲' : '▼'}</span>
                                </button>

                                <div className={`${openStates[index] ? 'block' : 'hidden'} ${prop.nav} p-4 `}>
                                    <p className={`${prop.tx} font-light  mb-3`}>{cert.description}</p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </section>
        </>
    )
}
export default Resume