import React from "react";
import "./Header.css";
import * as BSIcons from "react-icons/bs";
import * as MDIcons from "react-icons/md";
import * as TIIcons from "react-icons/ti";
import tinderLogo from "../images/tinder-2.svg";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => {
            history.replace(backButton);
          }}
        >
          <TIIcons.TiArrowBack className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <BSIcons.BsFillPersonFill className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img src={tinderLogo} className="header__logo" alt="Tinder Logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <MDIcons.MdForum className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
