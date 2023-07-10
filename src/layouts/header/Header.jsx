import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/img/argentBankLogo.png";
import "./Header.css";

import { useSelector } from "react-redux";
import {clearCredentials} from "../../store/Autentication/token"


export default function Header() {
  
  const isAuth  = useSelector((store) => store.token);
  // const userName = useSelector((store)=> store.user)
  
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
          <>
            {isAuth ? (
              <>
                <NavLink to="/profile" className="main-nav-item">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="main-nav-icon"
                  />
                  {/* {userName.firstName} */}
                </NavLink>
                <NavLink to="/" className="main-nav-item" onClick={clearCredentials()} >
                  <FontAwesomeIcon icon={faSignOut} className="main-nav-icon" />
                  Sign Out
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" className="main-nav-item">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="main-nav-icon"
                />
                Sign In
              </NavLink>
            )}
          </>
        </div>
      </nav>
    </>
  );
}
