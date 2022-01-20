import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import PostPublic from "../components/cards/PostPublic";
import io from "socket.io-client";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  { reconnection: true }
);

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);
  const [newsFeed, setNewsFeed] = useState([]);
  const page = "home";

  // useEffect(() => {
  //   // console.log("SOCKETIO ON JOIN", socket);
  //   socket.on("receive-message", (message) => {
  //     console.log(message);
  //   });
  // }, []);

  useEffect(() => {
    socket.on("new-post", (newPost) => {
      setNewsFeed([newPost, ...posts]);
    });
  }, []);

  const head = () => (
    <Head>
      <title>SocialMediaSite - A social site made by AadiZee</title>
      <meta
        name="description"
        content="A scoial media site created by AadiZee in MERN stack and NEXT.JS"
      />
      <meta
        property="og:description"
        content="A scoial media site created by AadiZee in MERN stack and NEXT.JS"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" contetnt="SocialMediaSite" />
      <meta property="og:url" content="http://socialmediasite.com" />
      <meta
        property="og:image:secure_url"
        content="http://socialmediasite.com/images/default.jpg"
      />
    </Head>
  );

  const collection = newsFeed.length > 0 ? newsFeed : posts;

  return (
    <>
      {head()}
      <ParallaxBG url="https://wallpaperaccess.com/full/716587.jpg" />
      <div className="container">
        {/* <button
          onClick={() => {
            socket.emit("send-message", "This is Aadi");
          }}
        >
          EMIT
        </button> */}
        <div className="row pt-5">
          {collection.map((post) => (
            <div className="col-md-4" key={post._id}>
              <Link key={post._id} href={`/post/view/${post._id}`}>
                <a key={post._id} className="text-dark">
                  <PostPublic key={post._id} post={post} page={page} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  // console.log(data);
  return { props: { posts: data } };
}

export default Home;
