import { blogList } from "@/app/data/data";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div>
            <ul>
                {blogList.map((blog) => (
                    <li className="py-3 border-b-2" key={blog.id}>
                        {blog.title}
                        <br />
                        <Link
                            href={`/blog/${blog.id}`}
                            className="inline-block bg-red-500"
                        >
                            Read More{" "}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
