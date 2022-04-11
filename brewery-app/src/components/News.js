import React, { useContext } from 'react';
import {NewsContext} from "../NewsContext"
import NewsArticle from './NewsArticle';

function News(props) {
    const { data} = useContext(NewsContext) , "Loading"}
     console.log(data);
    return (
            <div className="all__news">
            {data ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
            ))
            : "Loading"}
            </div>
            );
    }


export default News;
