import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const { commentedOn } = req.params;
  try {
    const { commentText } = req.body;
    const post = await Post.findById(commentedOn);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { user } = req.user;

    const newComment = new Comment({
      commentText,
      commentedBy: user._id,
      commentedOn: post._id,
    });

    await newComment.save();
    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const editComment = async (req, res) => {
//   try {
//     const { commentId, text } = req.body;
//     const comment = await Comment.findById(commentId);

//     if (!comment) {
//       return res.status(404).json({ message: "Comment not found" });
//     }

//     comment.text = text;
//     await comment.save();

//     res.status(200).json(comment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteComment = async (req, res) => {
//   try {
//     const { commentId } = req.body;
//     const comment = await Comment.findById(commentId);

//     if (!comment) {
//       return res.status(404).json({ message: "Comment not found" });
//     }

//     await comment.remove();
//     const post = await Post.findById(comment.post);
//     post.comments.pull(commentId);
//     await post.save();

//     res.status(200).json({ message: "Comment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
