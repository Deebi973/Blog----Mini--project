import React,{useState,useEffect} from "react";
import { createBlog, getBlogs, updateBlog, deleteBlog } from "./api";
import BlogList from "../Components/BlogList";
import BlogForm from "../Components/BlogForm";
import EditBlog from "../Components/EditBlog";
import "../src/index.css";


function App(){
  const [blogs,setBlogs]=useState([]);
  const [editBlog,setEditBlog]=useState(null);

  useEffect(()=>{
    fetchBlogs();
  },[]);

  const fetchBlogs=async()=>{
    try{
    const data=await getBlogs();
    setBlogs(data);
    }catch(err){
      console.error(err);
    }
  }

  const handleCreateBlog=async(newBlog)=>{
    await createBlog(newBlog);
    fetchBlogs();
  };

  const handleEditBlog=(blog)=>{
    setEditBlog(blog);
  };

  const handleUpdateBlog=async(updatedBlog)=>{
    try{
    await updateBlog(updatedBlog._id,updatedBlog);
    setEditBlog(null);
    fetchBlogs();
    }catch(err){
      console.error(err)
    };
  };

  const handleDeleteBlog=async(id)=>{
    try{
    await deleteBlog(id);
    fetchBlogs();
    }catch(err){
      console.error(err)
    };
  };


  return(
    <div >
      <h1 >My Blog Posts</h1>
      {!editBlog?(
      <BlogForm onCreate={handleCreateBlog}/>
    ):(
      <EditBlog blog={editBlog} onUpdate={handleUpdateBlog} onDelete={handleDeleteBlog} />
    )}

          <BlogList blogs={blogs} onEdit={handleEditBlog} onDelete={handleDeleteBlog} />
       
    </div>    
  );
}

export default App;