// pages/contact.tsx
export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
            <h1 className="text-center text-white p-2 border-2 border-blue-600 mt-11 rounded-3xl shadow-lg hover:bg-blue-500 font-bold">
                Contact Us
            </h1>
            <form className="mt-6 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-white" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                        rows={4}
                        placeholder="Your Message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
