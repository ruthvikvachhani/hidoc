import React, { useContext } from "react";
import { Grid, Divider, ListItem } from "@mui/material";
import NewsContext from "../../context/news-context";
import "./LatestArticle.css";

const LatestArticle = () => {
  const news = useContext(NewsContext);
  return (
    <Grid item xs={12} md={6} lg={3} className="latest-news">
      <div className="lable">
        <b>Latest News</b>
      </div>
      {news.latestArticle.length ? (
        news.latestArticle.map((art) => {
          return (
            <div className="article">
              <Divider className="article-divider" light={false} />
              <ListItem key={art.id}>
                <a href={art.redirectLink}>{art.articleTitle.split(":")[0]}</a>
              </ListItem>
            </div>
          );
        })
      ) : (
        <p>No Article Found</p>
      )}
    </Grid>
  );
};

export default LatestArticle;
