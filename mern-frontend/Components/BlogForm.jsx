import React, { useState } from "react";

const BlogForm=({onCreate})=>{
    const [formData,setFormData]=useState({title:"",content:"",author:""});

    const handleSubmit=(e)=>{
        e.preventDefault();
        onCreate(formData);
        setFormData({title:"",content:"",author:""});
    };

    return(
        <div className="blog-form">
        <form onSubmit={(handleSubmit)}>
            <input type="text" placeholder="Title" value={formData.title} onChange={(e)=> setFormData({...formData,title:e.target.value})}/>
            <textarea placeholder="Content" value={formData.content} onChange={(e)=>setFormData({...formData,content:e.target.value})}></textarea>
            <textarea placeholder="Author" value={formData.author} onChange={(e)=>setFormData({...formData,author:e.target.value})}></textarea>
            <button type="submit">Create</button>
        </form>
        </div>
    )
}

export default BlogForm;