import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-center gap-6 bg-pink-400 text-white py-4 mt-6 font-semibold">
            <Link href="/" className="hover:text-blue-400 transition duration-300 text-lg">
                <b>Home</b>
            </Link>

            <Link href="/about" className="hover:text-blue-400 transition duration-300 text-lg">
                <b>About</b>
            </Link>

            <Link href="/job" className="hover:text-blue-400 transition duration-300 text-lg">
                <b>Job</b>
            </Link>

            <Link href="/programming" className="hover:text-blue-400 transition duration-300 text-lg">
                <b>Location</b>
            </Link>

            <Link href="/services" className="hover:text-blue-400 transition duration-300 text-lg">
                <b>Contact Us</b>
            </Link>
        </div>
    );
}
