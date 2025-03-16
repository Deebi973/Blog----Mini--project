import React from "react";
import Blogitem from "./Blogitem";

const BlogList = ({ blogs ,onEdit,onDelete}) => {
    return (
        <ul className="blog-container">
            {blogs.map((blog) => (
                <Blogitem key={blog._id} blog={blog} onEdit={onEdit}  onDelete={onDelete}/>
            ))}
        </ul>
    );
};

export default BlogList;