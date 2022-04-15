import React from "react";

function NewsArticle({ data }) {
    return (
    <div className="news">
        <h1 className="news__title">JAGS' News</h1>
        <p className="news__title">We keep you updated with the latest Brewery news, so you can always keep track through us with our daily JAGS' news!</p>
    <p className="news__description">{data.description}</p>
    <p className="news__author">{data.author}</p>
    <p className="news__title">{data.title}</p>
    <p className="news__data.publishedAt">{data.publishedAt}</p>
   <div>
    <a  href={data.url}>Link to the Story</a>
    </div>
   </div>
    );
    }
export default NewsArticle;
    
