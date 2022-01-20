import { useState, useContext } from "react";
import { UserContext } from "../../context";
import axios from "axios";
import People from "../cards/People";
import { toast } from "react-toastify";

const Search = () => {
  const [state, setState] = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const searchUser = async (e) => {
    e.preventDefault();
    // console.log(`Find "${query}" from db `);
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      //   console.log("search user response => ", data);
      setResult(data);
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
      let filtered = result.filter((person) => person._id !== user._id);
      setResult(filtered);
      toast.success(`Following ${user.name}`);
    } catch (error) {
      console.log(error);
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
      let filtered = result.filter((person) => person._id !== user._id);
      setResult(filtered);

      toast.error(`Unfollowed ${user.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form-inline row pt-2" onSubmit={searchUser}>
        <div className="col-8">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
            }}
            value={query}
            className="form-control"
            placeholder="Search People..."
            type="search"
          />
        </div>

        <div className="col-4">
          <button className="btn btn-outline-primary col-12" type="submit">
            Search
          </button>
        </div>
      </form>
      {result &&
        result.map((r) => (
          <People
            key={r._id}
            people={result}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
          />
        ))}
    </>
  );
};

export default Search;
