import Recat, { useEffect, useReducer } from "react";

const INITIAL_STATE = {
  news: [],
  latestArticle: [],
  exploreArticle: [],
  trandingArticle: [],
  article: {},
};

const NewsContext = Recat.createContext(INITIAL_STATE);

const newsReducer = (state, action) => {
  if (action.type === "FETCH_DATA") {
    return {
      news: [...action.payload.news],
      latestArticle: [...action.payload.latestArticle],
      exploreArticle: [...action.payload.exploreArticle],
      trandingArticle: [...action.payload.trandingArticle],
      article: { ...action.payload.article },
    };
  }
  return INITIAL_STATE;
};

export const NewsContextProvider = (props) => {
  const [newsArticles, dispatch] = useReducer(newsReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid?sId=5&uuId=0",
        {
          method: "POST",
        }
      );

      const data = await res.json();
      // console.log("HI");
      // console.log(data);
      dispatch({ type: "FETCH_DATA", payload: data.data });
    };

    fetchData();
  }, []);

  return (
    <NewsContext.Provider value={{ ...newsArticles }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
