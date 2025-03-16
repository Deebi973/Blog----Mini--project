import React, { useState, useEffect } from "react";

function EditBlog({ blog, onUpdate }) {
  const [formData, setFormData] = useState(blog || {title:"",content:"",author:""});

  useEffect(() => {
    if(blog){
      setFormData(blog);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <>
    {blog ? (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
        />
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({...formData, author: e.target.value})}
        />
        <button type="submit">Update Blog</button>
      </form>
    ) : (
        <p>no blog selected</p>
    )}
    </>
  );
}

export default EditBlog;