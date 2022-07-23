import React from "react";
import "./Header.css";
import hidocImage from "../logo-hidoc.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div>
          <a href="/" className="logo">
            <img src={hidocImage} alt="hidoc-logo" />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="/Social-Network">Social Network</a>
            </li>
            <li>
              <a href="/Drug-Database">Drug Database</a>
            </li>
            <li>
              <a href="/Medical-Calculator">Medical Calculator</a>
            </li>
            <li>
              <a href="/Articles">Articles</a>
            </li>
            <li className="active">
              <a href="/News">News</a>
            </li>
            <li>
              <a href="/Quizzes">Quizzes</a>
            </li>
            <li>
              <a href="/Surveys">Surveys</a>
            </li>
            <li>
              <a href="/Drug-Interaction">Drug Interaction</a>
            </li>
            <li>
              <a href="/Diseases-Database">Diseases Database</a>
            </li>
          </ul>
        </div>
        <div className="stats">
          <div className="val">
            <span className="emoji">
              <EmojiEventsIcon />
            </span>
            <span>236</span>
          </div>
          <div className="amount">M</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
