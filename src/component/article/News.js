import React, { useContext } from "react";
import { Grid } from "@mui/material";
import NewsContext from "../../context/news-context";
import "./News.css"

const News = () => {
  const news = useContext(NewsContext);
  return (
    <div className="news">
      <Grid item xs={12} className="news-title" >
        <h2>News</h2>
      </Grid>
      <Grid container item xs={12} className="news-container">
        <Grid item xs={4}  className="news-img">
          {news.news.length ? (
            <img
              src={news.news[0].urlToImage}
              alt={news.news[0].title}
              width="300px"
            />
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={8} className="news-info">
          {news.news.length && (
            <div className="news-desc">
              <div>
                <p>
                  <b>{news.news[0].title.split(":")[0]}</b>
                </p>
                <p className="news-content">{news.news[0].description}</p>
              </div>
              <div className="news-link">
                <a
                  href={news.news[0].url}
                >
                  <i>Read full News </i>
                </a>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
