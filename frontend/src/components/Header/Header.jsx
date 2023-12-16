import React, { useRef, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "reactstrap";

const navlinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/payment",
    display: "Phonepe",
  },
];

const authbutton = [
  {
    path: "/login",
    class: "login-button",
    display: "Login",
  },
  {
    path: "/register",
    class: "register-button",
    display: "Register",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_navbar");
      } else {
        headerRef.current.classList.remove("sticky_navbar");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header className="navbar" ref={headerRef}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span></span>
      </div>
      <nav className="navigation">
        <ul>
          {navlinks.map((item, index) => (
            <li>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "active_link" : ""
                }
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
      <span
  style={{
    color: "black",
    marginRight: "30px",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "cursive",
    display: user?.username ? "inline" : "none",
  }}
>
  Hi, {user?.username}
</span>
        {user ? (
          <>
            {/* <h5 className="mb-0">{user.username}</h5> */}
            <Button className="btn btn-dark" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <div className="auth-buttons">
              {authbutton.map((item, index) => (
                <Link to={item.path} className={item.class}>
                  {item.display}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;