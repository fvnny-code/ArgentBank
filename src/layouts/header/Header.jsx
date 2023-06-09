import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/img/argentBankLogo.png";

import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-img"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {/* Anonymous */}
        
            <>
              <NavLink to="/login" className="main-nav-item">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="main-nav-icon"
                />
                Sign In
              </NavLink>
            </>
          
          {/* Connected */}
         
            <>
              <NavLink to="/profile" className="main-nav-item">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="main-nav-icon"
                />
                Username
              </NavLink>
              <NavLink to="/" className="main-nav-item">
                <FontAwesomeIcon
                icon={faSignOut}
                className="main-nav-icon"
                />
                Sign Out
              </NavLink>
            </>
          
        </div>
      </nav>
    </>
  );
}
