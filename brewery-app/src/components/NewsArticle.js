import React from "react";

function NewsArticle({ data }) {
    return (
    <div className="news">
        <h1 className="news__title">JAGS' News</h1>
        <p className="news__title">We keep you updated with the latest Brewery news, so you can always keep track through us with our daily JAGS' news!</p>
    <span className="news__description">{data.description}</span>
    <span className="news__author">{data.author}</span>
    <span className="news__title">{data.title}</span>
    <span className="news__published">{data.published}</span>
    </div>
    );
}

export default NewsArticle;