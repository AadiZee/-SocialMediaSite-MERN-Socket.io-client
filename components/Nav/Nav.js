import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav bg-dark d-flex justify-content-between">
      <Link href="/">
        <a
          className={`nav-link text-light logo ${current === "/" && "active"}`}
        >
          SocialMediaSite
        </a>
      </Link>

      {state !== null ? (
        <>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-light"
              type="button"
              id="dropdownMenu1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {state && state.user && state.user.name}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link href="/user/dashboard">
                  <a
                    className={`nav-link dropdown-item text-light ${
                      current === "/user/dashboard" && "active"
                    }`}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/user/profile/update">
                  <a
                    className={`nav-link dropdown-item text-light ${
                      current === "/user/profile/update" && "active"
                    }`}
                  >
                    Profile
                  </a>
                </Link>
              </li>

              {state.user.role === "Admin" && (
                <li>
                  <Link href="/admin">
                    <a
                      className={`nav-link dropdown-item text-light ${
                        current === "/admin" && "active"
                      }`}
                    >
                      Admin
                    </a>
                  </Link>
                </li>
              )}

              <li>
                <a
                  onClick={logout}
                  className="nav-link dropdown-item text-light"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link text-light ${
                current === "/login" && "active"
              }`}
            >
              Login
            </a>
          </Link>

          <Link href="/register">
            <a
              className={`nav-link text-light ${
                current === "/register" && "active"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
