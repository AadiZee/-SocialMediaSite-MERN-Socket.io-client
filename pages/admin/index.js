import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import AdminRoute from "../../components/routes/AdminRoute";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import renderHTML from "react-render-html";

const Admin = () => {
  const [state, setState] = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  const page = "dashboard";

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
    }
  }, [state && state.token]);

  const newsFeed = async () => {
    try {
      const { data } = await axios.get(`/posts`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;
      else {
        const { data } = await axios.delete(`/admin/delete-post/${post._id}`);
        toast.error("Post Deleted!!!");
        newsFeed();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-image text-light">
          <div className="col text-center">
            <h1>ADMIN</h1>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-8 offset-md-2">
            {posts.map((p) => (
              <div className="d-flex justify-content-between" key={p._id}>
                <div>
                  <ul>
                    <li>{renderHTML(p.content)}</li>
                  </ul>
                </div>
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(p)}
                    className="text-danger"
                  >
                    DELETE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};
export default Admin;
