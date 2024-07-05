import takbirgazi from "../../../public/takbirgazi.jpg"
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


const About = () => {
    return (
        <div className="bg-gray-300 py-10" id="about">
            <h2 className="font-bold text-3xl text-center">About Me</h2>
            <p className="text-center px-2">I never sleep when I am tired, but I will sleep only when I am Done!</p>
            <div className="w-11/12 mx-auto my-5 p-5">
                <div className="flex flex-col lg:flex-row mx-auto items-center gap-1">
                    <div className="">
                        <img src={takbirgazi} alt="Md. Takbir Gazi" className="h-40 w-40 border rounded-full" />
                    </div>
                    <div className="flex-1">
                        <p>
                            Welcome to my website! I am Takbir Gazi,I am a <span className="font-semibold italic"> student at the National University of Economics,</span> and I am also a <span className="font-semibold italic">web developer</span> skilled in HTML, CSS, Tailwind CSS, React.js, MongoDB, Firebase, Express.js, MySQLi, PHP and  JavaScript. I create dynamic and responsive web applications, focusing on high-quality and efficient solutions. Explore my portfolio and contact me to bring your web projects to life!
                        </p>
                        <div className="flex flex-col lg:flex-row gap-2 my-1">
                            <div className="flex gap-2 my-1 justify-center">
                                <p title="HTML" className="border-2 border-red-800 rounded-full p-1">
                                    <FaHtml5 className="w-8 h-8 text-red-500" />
                                </p>
                                <p title="CSS" className="border-2 border-blue-800 rounded-full p-1">
                                    <FaCss3Alt className="w-8 h-8 text-blue-500" />
                                </p>
                                <p title="TailwindCss" className="border-2 border-blue-800 rounded-full p-1">
                                    <RiTailwindCssFill className="w-8 h-8 text-blue-500" />
                                </p>
                                <p title="React.js" className="border-2 border-blue-500 rounded-full p-1">
                                    <FaReact className="w-8 h-8 text-blue-400" />
                                </p>
                            </div>
                            <div className="flex gap-2 my-1 justify-center">
                                <p title="MongoDB" className="border-2 border-green-800 rounded-full p-1">
                                    <DiMongodb className="w-8 h-8 text-green-500" />
                                </p>
                                <p title="Firebase" className="border-2 border-yellow-800 rounded-full p-1">
                                    <IoLogoFirebase className="w-8 h-8 text-yellow-500" />
                                </p>
                                <p title="Express" className="border-2 border-gray-800 rounded-full p-1">
                                    <SiExpress className="w-8 h-8 text-gray-500" />
                                </p>
                            </div>
                            <div className="flex gap-2 my-1 justify-center">
                                <p title="MySQL" className="border-2 border-gray-800 rounded-full p-1">
                                    <SiMysql className="w-8 h-8 text-gray-500" />
                                </p>
                                <p title="PHP" className="border-2 border-blue-800 rounded-full p-1">
                                    <SiPhp className="w-8 h-8 text-blue-500" />
                                </p>
                                <p title="JavaScript" className="border-2 border-yellow-800 rounded-full p-1">
                                    <IoLogoJavascript className="w-8 h-8 text-yellow-500" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;