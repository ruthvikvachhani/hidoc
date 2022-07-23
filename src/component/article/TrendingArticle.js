import React, { useContext } from "react";
import { Grid, Divider } from "@mui/material";
import NewsContext from "../../context/news-context";
import "./TrendingArticle.css";

const TrendingArticle = () => {
  const news = useContext(NewsContext);
  const i = 0;
  return (
    <Grid item xs={12} md={6} lg={3} className="trending-news">
      <div className="lable">
        <b>Trending News</b>
      </div>
      {news.trandingArticle.length ? (
        news.trandingArticle.slice(0, 2).map((art, i) => {
          return (
            <div className="article" key={art.key}>
              <Divider className="article-divider" />
              {i === 0 ? (
                <div>
                  <div >
                    <img
                      src={art.articleImg}
                      width="300px"
                      style={{ textAlign: "center" }}
                    />
                  </div>
                  <div>
                    <a href={art.redirectLink}>
                      {art.articleTitle.split(":")[0]}
                    </a>
                  </div>
                </div>
              ) : (
                <div style={{display:"flex"}}>
                  <div>
                    <img
                      src={art.articleImg}
                      width="100px"
                      style={{ textAlign: "center" }}
                    />
                  </div>
                  <div>
                    <a href={art.redirectLink}>
                      {art.articleTitle.split(":")[0]}
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p>No Article Found</p>
      )}
    </Grid>
  );
};

export default TrendingArticle;
