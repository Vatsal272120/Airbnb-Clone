import React from "react";
import "../Stylesheets/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://insidetravel.news/wp-content/uploads/2018/10/airbnblogo-1068x580.png"
        alt="airbnb"
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p> Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
