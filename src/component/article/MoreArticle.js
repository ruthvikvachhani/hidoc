import React, { useContext } from "react";
import { Grid, Divider } from "@mui/material";
import NewsContext from "../../context/news-context";
import "./MoreArticle.css"

const MoreArticle = () => {
  const news = useContext(NewsContext);    
  return (
    <Grid container item xs={12} md={6} lg={3}>
      <Grid item xs={12} className="explore">
        <div className="lable">
          <b>Explore more in News</b>
        </div>
        {news.exploreArticle.length ? (
          news.exploreArticle.slice(0, 3).map((art) => {
            return (
              <div className="article" key={art.id}>
                <Divider classname="article-divider" />
                <div>
                  <b>
                    <a href={art.redirectLink}>
                      {art.articleTitle.split(":")[0]}
                    </a>
                  </b>
                </div>
                <div className="article-desc">
                  {art.articleDescription.split(".")[0]}
                </div>
              </div>
            );
          })
        ) : (
          <p>No Article Found</p>
        )}
      </Grid>
      <div className="explore-button">
        <button>
          <b>Explore Hidoc Dr.</b>
        </button>
      </div>
    </Grid>
  );
};

export default MoreArticle;
