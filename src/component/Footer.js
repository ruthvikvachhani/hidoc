import React from "react";
import hidocImage from "../logo-hidoc.png";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import DescriptionIcon from "@mui/icons-material/Description";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-item">
          <a href="/" className="logo">
            <img src={hidocImage} alt="hidoc-logo" />
          </a>
          <div className="contact">
            <div className="icon-container">
              <FacebookIcon icon-container className="icon" />
            </div>
            <div className="icon-container">
              <LinkedInIcon className="icon" />
            </div>
            <div className="icon-container">
              <InstagramIcon className="icon" />
            </div>
            <div className="icon-container">
              <YouTubeIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="footer-item reach-us">
          <h4>REACH US</h4>
          <p>Please contact below details for any other information.</p>
          <div className="title-cont">
            <div className="title">Email:</div>
            <div>varun@hidoc.co</div>
          </div>
          <div className="title-cont">
            <div className="title">Address:</div>
            <div>
              Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE,
              19808, United States.
            </div>
          </div>
        </div>
        <div className="footer-item features">
          <p>
            <b>HIDOC DR. FEATURES</b>
          </p>
          <div className="feature-container">
            <span className="feature-icon">
              <div className="drug-database">
                <div className="feature">
                  <FolderOpenIcon />
                </div>
                <label>Drug database</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="social-network">
                <div className="feature">
                  <SocialDistanceIcon />
                </div>

                <label>Social Network</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="drug-interaction">
                <div className="feature">
                  <DescriptionIcon />
                </div>

                <label>Drug Interaction</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="medical-calculator">
                <div className="feature">
                  <CalculateIcon />
                </div>
                <label>Medical Calculator</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="articles">
                <div className="feature">
                  <DescriptionIcon />
                </div>
                <label>Articles</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="quizzes">
                <div className="feature">
                  <EmojiEventsIcon />
                </div>
                <label>Quizzes</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="diseases-database">
                <div className="feature">
                  <DescriptionIcon />
                </div>
                <label>Diseases database</label>
              </div>
            </span>
            <span className="feature-icon">
              <div className="surveys">
                <div className="feature">
                  <AssignmentIcon />
                </div>
                <label>Surveys</label>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          &copy; Copyright 2022 <b>Hidoc Dr. Inc.</b>
        </div>
        <p>Terms &amp; Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
