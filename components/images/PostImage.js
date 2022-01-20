const PostImage = ({ url }) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + url + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "500px",
      }}
    ></div>
  );
};

export default PostImage;
