import React from 'react';

function NewsList({ headlines }) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={headlines.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{headlines.title}</h5>
                    <p className="card-text">{headlines.description}</p>
                    <a href={headlines.url} target='_blank' className="btn btn-primary">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}

export default NewsList