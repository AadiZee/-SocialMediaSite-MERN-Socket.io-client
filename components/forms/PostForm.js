import { Avatar } from "antd";
import dynamic from "next/dynamic";
//import ReactQuill from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const PostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  uploading,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-body pb-3">
        <form className="form-group">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(e) => setContent(e)}
            className="form-control"
            placeholder="Write Something...."
          />
        </form>
      </div>

      <div className="card-footer d-flex justify-content-between ">
        <label>
          {image && image.url ? (
            <Avatar size={30} src={image.url} className="mt-1" />
          ) : uploading ? (
            <LoadingOutlined className="mt-2" />
          ) : (
            <CameraOutlined className="mt-2" />
          )}

          <input onChange={handleImage} type="file" accept="images/*" hidden />
        </label>

        <button
          disabled={!content ? true : false}
          className="btn btn-primary btn-sm mt-1"
          type="submit"
          onClick={postSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostForm;
