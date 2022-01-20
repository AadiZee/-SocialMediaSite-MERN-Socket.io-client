const ParallaxBG = ({ url, children = "SocialMediaSite" }) => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(" + url + ")",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "100px 0px 75px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
      }}
    >
      <h1
        className="display-1 font-weight-bold text-center text-light py-5"
        style={{ backgroundColor: "rgb(180, 180, 180, 0.2)" }}
      >
        {children}
      </h1>
    </div>
  );
};
export default ParallaxBG;
