import React, { useEffect, useState } from 'react'
import { newsLink } from './urls';
import NewsList from './NewsList';

function News() {

    const [newsData, setNewsData] = useState([]);

    const getNewsData = () => {
        fetch(`${newsLink}`, { method: "GET" })
            .then((data) => data.json())
            .then((news) => setNewsData(news.articles));
    }

    useEffect(() => getNewsData(), []);

    //console.log(newsData);

    return (
        <div className='newsCards'>
            {newsData.map((data, index) => (
                <NewsList key={index} headlines={data} />
            ))}
        </div>
    )
}

export default News