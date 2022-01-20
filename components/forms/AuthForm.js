import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {profileUpdate && (
        <>
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Username</label>
            </small>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter User Name"
            />
          </div>
          <div className="form-group p-2">
            <small>
              <label className="text-muted">About</label>
            </small>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter About"
            />
          </div>
        </>
      )}

      {page !== "login" ? (
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Your Name</label>
          </small>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
      ) : null}

      <div className="form-group p-2">
        <small>
          <label className="text-muted">Email</label>
        </small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter Email"
          disabled={profileUpdate}
        />
      </div>

      <div className="form-group p-2">
        <small>
          <label className="text-muted">Password</label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      {page !== "login" ? (
        <>
          <div className="form-group p-2">
            <small>
              <label className="text-muted"> Pick a question </label>
            </small>
            <select className="form-control">
              <option>What is your favorite color?</option>
              <option>What is your best friend's name?</option>
              <option>What city were you born in?</option>
            </select>

            <small className="form-text text-muted">
              You can use this to reset your password is forgotten.
            </small>
          </div>

          <div className="form-group p-2">
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Write your answer here!"
            />
          </div>
        </>
      ) : null}

      <div className="form-group p-2">
        <button
          disabled={
            profileUpdate
              ? loading
              : page !== "login"
              ? !name || !email || !password || !secret || loading
              : !email || !password || loading
          }
          className="btn btn-primary col-12"
        >
          {loading ? (
            <SyncOutlined spin className="py-1" />
          ) : (
            page.toUpperCase()
          )}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
