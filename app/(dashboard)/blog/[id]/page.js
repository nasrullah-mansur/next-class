import { blogList } from "@/app/data/data";
import React from "react";

export default function page({ params }) {
    let blog = blogList.find((blog) => blog.id === parseInt(params.id));

    if (!blog) {
        // return <div>Blog not found</div>;
        throw new Error("Blog not found");
    }

    return (
        <div>
            <h2 className="font-bold mb-4">{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
}
