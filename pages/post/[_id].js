import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { toast } from "react-toastify";
import Post from "../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import CommentForm from "../../components/forms/CommentForm";

const PostComments = () => {
  const [post, setPost] = useState({});
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [currentPost, setCurrentPost] = useState({});

  const router = useRouter();

  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeComment = async (postId, comment) => {
    // console.log(postId, comment);
    let answer = window.confirm("Are you sure?");
    if (!answer) {
      try {
        const { data } = await axios.put("/remove-comment", {
          postId,
          comment,
        });
        console.log("comment removed => ", data);
        fetchPost();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLike = async (_id) => {
    // console.log("Like this post => ", _id);
    try {
      const { data } = await axios.put("/like-post", { _id });
      // console.log("Liked =>", data);
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = async (_id) => {
    // console.log("Unlike this post => ", _id);
    try {
      const { data } = await axios.put("/unlike-post", { _id });
      // console.log("Unliked =>", data);
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;
      else {
        const { data } = await axios.delete(`/delete-post/${post._id}`);
        toast.error("Post Deleted!!!");
        fetchPost();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = (post) => {
    setCurrentPost(post);
    setVisible(true);
  };

  const addComment = async (e) => {
    e.preventDefault();
    // console.log("Adding Comment to => ", currentPost._id);
    // console.log("Comment => ", comment);
    try {
      const { data } = await axios.put("/add-comment", {
        postId: currentPost._id,
        comment: comment,
      });
      console.log(data);
      setComment("");
      setVisible(false);
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row py-5 text-light bg-default-image">
        <div className="col text-center">
          <h1>Post</h1>
        </div>
      </div>
      <div className="container row pt-5 col-md-8 offset-md-2">
        <Post
          removeComment={removeComment}
          post={post}
          commentsCount={100}
          handleLike={handleLike}
          handleUnlike={handleUnlike}
          handleComment={handleComment}
        />
      </div>
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center p-5 h4">
          <RollbackOutlined />
        </a>
      </Link>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="Comment"
        footer={null}
      >
        <CommentForm
          addComment={addComment}
          comment={comment}
          setComment={setComment}
        />
      </Modal>
    </div>
  );
};

export default PostComments;
