import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-white">
            <footer className="m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Thanks For Visiting</span>
                        </a>
                        <div className="flex items-center justify-center gap-3">
                            <p><a href="#"> <FaGithub className="w-10 h-10 border rounded-full p-2 bg-gray-200" /> </a></p>
                            <p><a href="#"> <FaTwitter className="w-10 h-10 border rounded-full p-2 bg-gray-200"/> </a></p>
                            <p><a href="#"> <FaInstagram className="w-10 h-10 border rounded-full p-2 bg-gray-200" /> </a></p>
                            <p><a href="#"> <FaLinkedin className="w-10 h-10 border rounded-full p-2 bg-gray-200" /> </a></p>
                            <p><a href="#"> <FaFacebook className="w-10 h-10 border rounded-full p-2 bg-gray-200" /> </a></p>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 All Rights Reserved By <a href="#" className="hover:underline"> Md. Takbir Gazi</a></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;