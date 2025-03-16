import axios from "axios";

const API_URL="http://localhost:3000/api/blogs";

//fetch all blogs
export const getBlogs=async()=>{
    const response=await axios.get(API_URL);
    return response.data;
};

//create new blog
export const createBlog=async (blogData)=>{
    const response=await axios.post(API_URL,blogData);
    return response.data;
};

//update a blog
export const updateBlog=async (id,blogData)=>{
    const response=await axios.put(`${API_URL}/${id}`,blogData);
    return response.data;
};

//delete a blog
export const deleteBlog=async (id)=>{
    try{
    const response=await axios.delete(`${API_URL}/${id}`);
    return response.data;
    }catch(err){
        console.log(err);
    }
};

