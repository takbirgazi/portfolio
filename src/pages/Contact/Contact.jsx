import { useState } from "react";


const Contact = () => {
    const [message, setMessage] = useState("")
    const contactHandler = event => {
        event.preventDefault();
        const forme = event.target;
        // const name = forme.name.value;
        // const email = forme.email.value;
        // const message = forme.message.value;
        setMessage("Message Send Successfully!");
        forme.reset();

}
    return (
        <div className="bg-gray-300 py-10" id="contact">
            <h2 className="font-bold text-3xl text-center text-gray-800">Get In Touch</h2>
            <p className="text-center text-gray-800">If you have any query Please messages</p>
            <div className="w-11/12 mx-auto border rounded my-5 p-5">
                <div className="text-green-800 text-sm">{message}</div>
                <form onSubmit={contactHandler} className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                        <div className="flex flex-col md:w-1/2 w-full">
                            <label className="text-gray-800" htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Write Your Name" className="border rounded p-2 outline-none bg-transparent" required />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-full">
                            <label className="text-gray-800" htmlFor="name">Email</label>
                            <input type="email" name="email" placeholder="Write Your Email" className="border rounded p-2 outline-none bg-transparent" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-800" htmlFor="name">Message</label>
                        <textarea name="message" rows="5" cols="30" className="border rounded p-2 outline-none bg-transparent" placeholder="Write your message" required></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" className="border-blue-800 rounded px-5 py-2 bg-blue-500 text-white font-bold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;