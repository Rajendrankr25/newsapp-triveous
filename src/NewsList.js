import React from 'react';
import newsImg from './newsimg.jpg';

function NewsList({ headlines }) {
    return (
        <div>
            <div className="card" style={{ width: "33rem" }}>
                <img src={headlines.urlToImage ? headlines.urlToImage : newsImg} className="card-img-top" alt='News Thumbnail' />
                <div className="card-body">
                    <h5 className="card-title">{headlines.title}</h5><br />
                    <p>Author/Source : {headlines.author ? headlines.author : headlines.source.name}</p>
                    <p>Published on : {headlines.publishedAt}</p><br />
                    <p className="card-text">{headlines.description}</p>
                    <a href={headlines.url} target='_blank' rel="noreferrer" className="btn btn-success">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}

export default NewsList