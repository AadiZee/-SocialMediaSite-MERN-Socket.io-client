import { useContext, useState, useEffect } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Link from "next/link";

const Following = () => {
  const [state, setState] = useContext(UserContext);

  const [people, setPeople] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      fetchFollowing();
    }
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");
      console.log("following =>", data);
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png";
    }
  };

  const handleUnfollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });

      let auth = JSON.parse(localStorage.getItem("auth"));
      //update user in local storage, keep token same
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //update Context
      setState({ ...state, user: data });
      //update people state
      let filtered = people.filter((person) => person._id !== user._id);
      setPeople(filtered);

      toast.error(`Unfollowed ${user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row col-md-6 offset-md-3">
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  {user.username}
                  <span
                    className="btn text-dark"
                    onClick={() => {
                      handleUnfollow(user);
                    }}
                  >
                    Unfollow
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center pt-5 h5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default Following;
