import { useContext, useState, useEffect } from "react";
import { Avatar, Card } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Link from "next/link";

const { Meta } = Card; //instead of <Card.Meta></Card.Meta>

const Username = () => {
  const [state, setState] = useContext(UserContext);

  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (router.query.username) {
      fetchUser();
    }
  }, [router.query.username]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/user/${router.query.username}`);
      // console.log("following =>", data);
      setUser(data);
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

  return (
    <div className="row col-md-6 offset-md-3">
      <div className="pt-5 pb-5">
        <Card
          hoverable
          cover={
            <img
              style={{
                width: 300,
                margin: "auto",
              }}
              src={imageSource(user)}
              alt={user.name}
            />
          }
        >
          <Meta title={user.name} description={user.about}></Meta>
          <div className="d-flex justify-content-end">
            <p className="pt-2 text-muted">
              Joined {moment(user.createdAt).fromNow()}
            </p>
          </div>

          <div className="d-flex justify-content-between">
            <span className="btn btn-sm">
              <b> {user.followers && user.followers.length} Followers </b>
            </span>

            <span className="btn btn-sm">
              <b> {user.following && user.following.length} Following </b>
            </span>
          </div>
        </Card>
        <Link href="/user/dashboard">
          <a className="d-flex justify-content-center pt-5 h5">
            <RollbackOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Username;
