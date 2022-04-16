import React from "react";
import "../styles/News.css";
import { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div className="all__news">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : <div><p>Api Key quota reached for the day...</p></div>}
    </div>
  );
}

export default News;
