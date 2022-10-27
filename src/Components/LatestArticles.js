import React, { useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom';

const LatestArticles = () => {

    const [data] = useContext(MainContext)

    return (
        <>
            <div className="latest-article-container">
                <h2 className="latest-articles-heading">Latest Articles</h2>
                <div className="articles-division">
                    <div className="article-bar">
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === '4' && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article) => <div>
                                        <hr className="article-horizontal-line" />
                                        <Link to={`/category/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="latest-articles">
                                            <img src={article.url} className="latest-articles-image" alt=""/>
                                            <div className="latest-article-details">
                                                <h4 className="latest-article-heading">{article.title}</h4>
                                                <p className="latest-article-body">{article.body}</p>
                                                <p>
                                                    <span className="latest-article-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                    <div className="top-stories">
                        <div className="top-stories-heading">Top Posts</div>
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === '5' && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article) => <>
                                        <Link to={`/category/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="top-stories-container">
                                            <img src={article.url} className="top-stories-image" alt=""/>
                                            <div className="top-stories-content">
                                                <h4 className="top-stories-title">{article.title}</h4>
                                                <p>
                                                    <span className="top-stories-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                        <hr className="top-stories-horizontal-line" />
                                    </>
                                )
                        }
                        <div className="advertisement"><a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer"><img src="https://newspaperads.ads2publish.com/wp-content/uploads/2020/10/amazon-great-indian-festival-2020-exclusively-for-prime-members-sale-live-now-ad-toi-mumbai-16-10-2020.png" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestArticles;