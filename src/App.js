import "./App.css";
import { Grid, Divider } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import NewsContext from "./context/news-context";
import { Box } from "@mui/system";
import Header from "./component/Header";
import News from "./component/article/News";
import LatestArticle from "./component/article/LatestArticle";
import TrendingArticle from "./component/article/TrendingArticle";
import MoreArticle from "./component/article/MoreArticle";
import Article from "./component/article/Article";
import Footer from "./component/Footer";

function App() {
  const news = useContext(NewsContext);

  return (
    <div className="App">
      <Header />
      <Box className="main" sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} justifyContent="center">
          <News />
          <Grid container item xs={12}>
            <Grid item xs={12} height="10px">
              <Divider height="10px" light="false" />
            </Grid>
          </Grid>
          <Grid container item xs={12} columnGap={2} justifyContent="center">
            <LatestArticle />
            <TrendingArticle />
            <MoreArticle />
          </Grid>
        </Grid>
      </Box>
      <h2>What's more on Hidoc Dr.</h2>
      <Article />
      <Footer />
    </div>
  );
}

export default App;
