import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { imageSource } from "../../functions";
import Link from "next/link";

const Post = ({
  post,
  handleDelete,
  handleLike,
  handleUnlike,
  handleComment,
  page,
  removeComment,
  commentsCount = 2,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      {post && post.postedBy && (
        <div key={post._id} className="card mb-3">
          <div className="card-header">
            {/* <Avatar size={40}>{post.postedBy.name[0]}</Avatar> */}
            <Avatar size={40} src={imageSource(post.postedBy)} />
            <span className="pt-2" style={{ marginLeft: "5px" }}>
              {post.postedBy.name}
            </span>

            <span className="pt-2" style={{ marginLeft: "5px" }}>
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          <div className="card-body">{renderHTML(post.content)}</div>
          <div className="card-footer">
            {/* <img
                    src={post.image && post.image.url}
                    alt={post.postedBy.name}
                /> */}
            {post.image && (
              <PostImage url={post.image.url} />
              // <div
              //   style={{
              //     backgroundImage: "url(" + post.image.url + ")",
              //     backgroundRepeat: "no-repeat",
              //     backgroundPosition: "center center",
              //     backgroundSize: "cover",
              //     height: "500px",
              //   }}
              // ></div>
            )}
            <div className="d-flex pt-2">
              {state &&
              state.user &&
              post.likes &&
              post.likes.includes(state.user._id) ? (
                <HeartFilled
                  onClick={() => handleUnlike(post._id)}
                  className="text-danger pt-2 h5 px-2"
                />
              ) : (
                <HeartOutlined
                  onClick={() => handleLike(post._id)}
                  className="text-danger pt-2 h5 px-2"
                />
              )}
              <div className="pt-2 ">{post.likes.length} Likes</div>
              <CommentOutlined
                onClick={() => handleComment(post)}
                className="text-danger pt-2 h5 px-2"
              />
              <div className="pt-2">
                <Link href={`/post/${post._id}`}>
                  <a className="text-primary">
                    {post.comments.length} Comments
                  </a>
                </Link>
              </div>

              {state && state.user && state.user._id === post.postedBy._id ? (
                <>
                  <span
                    className="h5 px-2 mx-auto"
                    style={{ float: "right", display: "inline-block" }}
                  >
                    <EditOutlined
                      onClick={() => router.push(`/user/post/${post._id}`)}
                      className=" col text-danger"
                      style={{ marginLeft: "50px", marginRight: "-3px" }}
                    />

                    <DeleteOutlined
                      onClick={() => handleDelete(post)}
                      className="text-danger"
                      style={{ marginLeft: "11px", marginRight: "-10px" }}
                    />
                  </span>
                </>
              ) : null}
            </div>
          </div>
          {/* 2 comments */}
          {post.comments && post.comments.length > 0 && (
            <div>
              <ul className="list-group">
                {post.comments.slice(0, commentsCount).map((c) => (
                  <li
                    key={c._id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div>
                        <Avatar
                          size={20}
                          className="mb-1 mr-3"
                          src={imageSource(c.postedBy)}
                        />
                        <span style={{ marginRight: "2px" }}>
                          <b> {c.postedBy.name}</b>
                        </span>
                      </div>
                      <div>{c.text}</div>
                    </div>
                    <span className="badge rounded-pill text-dark">
                      {moment(c.created).fromNow()}{" "}
                      {state &&
                        state.user &&
                        state.user._id === c.postedBy._id && (
                          <div className=" ml-auto mt-1">
                            <DeleteOutlined
                              onClick={() => removeComment(post._id, c)}
                              className="pl-3 text-danger"
                            />
                          </div>
                        )}
                    </span>
                  </li>
                ))}
              </ul>
              {post.comments.length > 2 && page === "dashboard" ? (
                // <div className="container row pt-1 col-md-8 offset-md-2">
                <div className="text-center mt-1 pt-1 mb-1 pb-1">
                  <Link href={`/post/${post._id}`}>
                    <button
                      className="btn btn-outline-dark btn-sm "
                      style={{ padding: "-1" }}
                    >
                      Load More Comments
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Post;
