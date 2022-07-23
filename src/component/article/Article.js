import React, { useContext } from "react";
import { Grid, Divider, Box } from "@mui/material";
import NewsContext from "../../context/news-context";
import "./Article.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Article = () => {
  const news = useContext(NewsContext);
  return (
    <Box className="article">
      <Grid
        container
        rowSpacing={2}
        justifyContent="center"
        className="article-container"
      >
        <Grid item xs={12} md={6} lg={8} className="article-content">
          <span>
            <div>
              <b>News</b>
            </div>
            <div>{news.article.articleDescription}</div>
          </span>
          <span>
            <a href={news.article.redirectLink}>
              <img src={news.article.articleImg} width="300px" />
            </a>
          </span>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className="application">
          <div className="new-app">
            <div className="app-icon">
              <QuestionMarkIcon className="icon" />
            </div>
            <div className="app-desc">
              <b>Quizzes :</b> Play &amp; win hidoc points
            </div>
          </div>
          <Divider className="article-divider" />
          <div className="new-app">
            <div className="app-icon">
              <AssignmentIcon className="icon" />
            </div>
            <div className="app-desc">
              <b>Surveys :</b>Participate in surveys to earn extra points
            </div>
          </div>

          <Divider className="article-divider" />
          <div className="new-app">
            <div className="app-icon">
              <CalculateIcon className="icon" />
            </div>
            <div className="app-desc">
              <b>Medical Calculator:</b> Tagline calculator related
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="visit">
            <h1>
              Social Network for doctors - A special feature on Hidoc Dr.
              <span className="visit-btn">
                <button>
                  <b>Visit</b>
                </button>
              </span>
            </h1>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Article;
