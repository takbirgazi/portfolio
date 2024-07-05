

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-5 bg-gray-400">
            <div>
                <p className="text-left text-blue-800 italic font-bold">Welcome, I am </p>
                <h2 className="text-5xl font-bold pb-2 text-white">MD. TAKBIR GAZI</h2>
            </div>
            <p className="text-white my-10">I am a full stack web developer</p>
            <a href="takbirGazi.pdf" target="_blank" download className="px-4 py-2 border rounded-full bg-blue-500 text-white">Download CV</a>
            
        </div>
    );
};

export default Banner;