import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import People from "../../components/cards/People";
import Link from "next/link";
import { Modal, Pagination } from "antd";
import CommentForm from "../../components/forms/CommentForm";
import Search from "../../components/search/Search";
import io from "socket.io-client";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  { reconnection: true }
);

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);

  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [people, setPeople] = useState([]);
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const [totalPosts, setTotalPosts] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const page = "dashboard";

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
      findPeople();
    }
  }, [state && state.token, pageNumber]);

  useEffect(() => {
    try {
      axios.get("/total-posts").then(({ data }) => setTotalPosts(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const newsFeed = async () => {
    try {
      const { data } = await axios.get(`/news-feed/${pageNumber}`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const findPeople = async () => {
    try {
      const { data } = await axios.get("/find-people");
      setPeople(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/create-post", { content, image });
      // console.log("Create Post Response =>", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setPageNumber(1);
        newsFeed();
        toast.success("Post Created");
        setContent("");
        setImage({});
        //socket.io
        socket.emit("new-post", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData);
      // console.log("Uploaded Image => ", data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;
      else {
        const { data } = await axios.delete(`/delete-post/${post._id}`);
        toast.error("Post Deleted!!!");
        newsFeed();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (user) => {
    // console.log("Add to following list", user._id);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      // console.log("Handle Follow Response => ", data);
      let auth = JSON.parse(localStorage.getItem("auth"));
      //update user in local storage, keep token same
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //update Context
      setState({ ...state, user: data });
      //update people state
      let filtered = people.filter((person) => person._id !== user._id);
      setPeople(filtered);
      //rerender the posts in feed
      newsFeed();
      toast.success(`Following ${user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (_id) => {
    // console.log("Like this post => ", _id);
    try {
      const { data } = await axios.put("/like-post", { _id });
      // console.log("Liked =>", data);
      newsFeed();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = async (_id) => {
    // console.log("Unlike this post => ", _id);
    try {
      const { data } = await axios.put("/unlike-post", { _id });
      // console.log("Unliked =>", data);
      newsFeed();
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
      newsFeed();
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
        newsFeed();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-image text-light">
          <div className="col text-center">
            <h1>NewsFeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
            <br />
            <PostList
              posts={posts}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
              handleComment={handleComment}
              page={page}
              removeComment={removeComment}
            />

            <Pagination
              current={pageNumber}
              total={(totalPosts / 3) * 10}
              onChange={(value) => setPageNumber(value)}
              className="pb-3"
            />
          </div>

          {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

          <div className="col-md-4">
            <Search /> <br />
            {state && state.user && state.user.following && (
              <Link href={`/user/following`}>
                <a className="h6">{state.user.following.length} Following</a>
              </Link>
            )}
            <People people={people} handleFollow={handleFollow} />
          </div>
        </div>
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
    </UserRoute>
  );
};
export default Dashboard;
