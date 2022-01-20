import axios from "axios";
import Head from "next/head";
import ParallaxBG from "../../../components/cards/ParallaxBG";
import PostPublic from "../../../components/cards/PostPublic";

const SinglePost = ({ post }) => {
  const head = () => (
    <Head>
      <title>SocialMediaSite - A social site made by AadiZee</title>
      <meta name="description" content={post.content} />
      <meta
        property="og:description"
        content="A scoial media site created by AadiZee in MERN stack and NEXT.JS"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" contetnt="SocialMediaSite" />
      <meta
        property="og:url"
        content={`http://socialmediasite.com/post/view/${post._id}`}
      />
      <meta
        property="og:image:secure_url"
        content="http://socialmediasite.com/images/default.jpg"
      />
    </Head>
  );

  return (
    <>
      {head()}
      <ParallaxBG url="https://wallpaperaccess.com/full/716587.jpg" />
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-8 offset-md-2">
            <PostPublic key={post._id} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`/post/${ctx.params._id}`);
  // console.log(data);
  return { props: { post: data } };
}

export default SinglePost;
