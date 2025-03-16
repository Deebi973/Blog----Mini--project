const express=require("express");
const Blog=require("../models/Blog");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error");
    }
  });

  router.post("/", async (req, res) => {
    try {
      const blog = new Blog(req.body);
      await blog.save();
      res.send(blog);
    } catch (error) {
      console.error(error);
      res.status(400).send("Error creating blog post");
    }
  });

  router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).send('Error',error);
    }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  module.exports = router;