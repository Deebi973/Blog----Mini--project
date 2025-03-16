import React from "react";

const BlogItem=({blog,onEdit,onDelete})=>{
    
    return(
        <li className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>By {blog.author}</small>
            <br /><br />
            <button className="edit-btn" onClick={()=>onEdit(blog)}>Edit</button><br /><br />
            {blog._id &&(
            <button className="delete-btn" onClick={()=>onDelete(blog._id)}>Delete</button>
        )}
        </li>
    );
};

export default BlogItem;