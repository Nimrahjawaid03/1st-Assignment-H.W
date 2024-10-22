// pages/404.tsx
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center p-10">
            <h1 className="text-9xl font-extrabold mb-4 animate-spin">404</h1>
            <p className="text-5xl mb-2">Well, this is awkward!</p>
            <p className="text-2xl mb-6">
                It looks like this page is playing hide and seek... and it’s winning! 😅
            </p>
            <img
                src="https://media.giphy.com/media/26BRuo6z3YI9m5OY8/giphy.gif"
                alt="Hide and Seek"
                className="w-64 h-64 mb-4"
            />
            <Link href="/" className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                🎉 Find My Way Home!
            </Link>
            <p className="mt-6 text-lg">
                Or explore our <Link href="/" className="underline hover:text-green-300">homepage</Link> for more fun!
            </p>
            <p className="mt-4 italic text-lg">
                P.S. If you happen to see any missing pages, tell them to come home!
            </p>
        </div>
    );
}
