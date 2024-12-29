import Link from "next/link";

export default function Navbar() {
    return (
        <ul className="flex gap-2">
            <li>
                <Link
                    className="bg-green-600 text-white py-1 px-3"
                    href="/blog"
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    className="bg-green-600 text-white py-1 px-3"
                    href="/category"
                >
                    Category
                </Link>
            </li>
        </ul>
    );
}
