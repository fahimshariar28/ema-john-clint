import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(console.log("Log Outed"))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav>
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Sign Up</Link>}
        {user && (
          <span className="text-white">
            Welcome{user.email} <button onClick={handleLogout}>Log out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
