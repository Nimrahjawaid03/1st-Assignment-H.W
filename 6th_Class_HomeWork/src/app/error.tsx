"use client";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-300 to-red-300 text-white text-center p-10 rounded-3xl shadow-xl border-4 border-gray-400">
            <h1 className="text-7xl font-extrabold mb-4">🚨 error!</h1>
            <p className="text-3xl mb-4">Looks like we hit a bump in the road...</p>
            <p className="text-xl mb-6">This page is currently out of order. Just like my last attempt at cooking! 🍳</p>
            <img
                src="https://media.giphy.com/media/l1J9qkG9T3zt9XtXq/giphy.gif"
                alt="Cooking Fail"
                className="w-64 h-64 mb-4"
            />
            <p className="text-lg mb-4">
                But don't worry, we can fix this! 
                <br />
                
            </p>
            <a href="/" className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                🏡 Back to Reality
            </a>
        </div>
    );
}
