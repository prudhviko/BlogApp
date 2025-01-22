import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Post image is required" });
    }
    const image = `/uploads/posts/${req.file.filename}`;

    const { user } = req.user;

    const newPost = new Post({
      title,
      content,
      image,
      postedBy: user._id,
    });

    await newPost.save();
    res.status(201).json({ message: "success", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "success", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "success", data: id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "name")
      .populate({
        path: "comments",
        select: "commentText",
        populate: {
          path: "commentedBy",
          select: "name",
        },
      });
    res.status(200).json({ message: "success", data: posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id)
      .populate("postedBy", "name")
      .populate({
        path: "comments",
        select: "commentText",
        populate: {
          path: "commentedBy",
          select: "name",
        },
      });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "success", data: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
