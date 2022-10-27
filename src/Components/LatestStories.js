import React, { useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom'

const LatestStories = () => {

    const [data] = useContext(MainContext);

    return (
        <div className="the-latest-container">
            <h2 className="the-latest-heading">Latest Stories</h2>
            <hr className="latest-stories-horizontal-line"/>
            <div className="the-latest-body">
                {
                    data.filter(
                        latest => latest.id === '2' && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Bollywood')
                    ).map(
                        latestInfo => (
                            <div className="the-latest-card">
                                <Link to={`/category/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none" }}>
                                    <img src={latestInfo.url} alt=""/>
                                    <h4 className='the-latest-title'>{latestInfo.title}</h4>
                                    <p className='the-latest-desc'>{latestInfo.body}</p>
                                    <p className='the-latest-date'><span className='the-latest-category'>{latestInfo.category}</span> / {latestInfo.date}</p>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default LatestStories;