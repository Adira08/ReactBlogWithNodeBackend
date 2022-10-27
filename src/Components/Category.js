import React,{ useContext } from 'react';
import { MainContext } from './MainContext';
import { Link, useParams } from 'react-router-dom'

export default function Category() {    
    const { categories } = useParams();

    const [data] = useContext(MainContext);

    return (
        <>
            <div className="category-container">
                <div className="category-main">
                    <h1 className="category-heading">{categories}</h1>
                    {
                        data.filter(
                            display => display.category === categories
                        ).map(
                            content => <>
                                <Link to={`/category/article/${content.id}/${content.category}`} style={{ textDecoration: "none" }} className="content-container">
                                    <img className="category-main-images" src={content.url} alt='' />
                                    <div className="content-division">
                                        <h4 className="content-main-title">{content.title}</h4>
                                        <p className="content-main-body">{content.body}</p>
                                        <p className="content-main-category"> {content.category}
                                            <span className="content-main-date"> / {content.date}</span>
                                        </p>
                                    </div>
                                </Link>
                                <hr className="category-horizontal-line"/>
                            </>
                        )
                    }
                </div>
                <div className="category-top-post">
                    <h1 className="category-heading">Top Post</h1>
                    {
                        data.filter(
                            display => display.category === categories 
                        ).map(
                            content => <>
                                <Link to={`/category/article/${content.id}/${content.category}`} style={{ textDecoration: "none" }} className="content-top-post-container">
                                    <img className="content-top-post-images" src={content.url} alt='' />
                                    <div className="content-top-post-division">
                                        <h4 className="content-top-post-title">{content.title}</h4>
                                        <p className="content-top-post-category"> {content.category}
                                            <span className="content-top-post-date"> / {content.date}</span>
                                        </p>
                                    </div>
                                </Link>
                                <hr className="category-horizontal-line"/>
                            </>
                        )
                    }
                    <div className="advertisement"><a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer"><img src="https://newspaperads.ads2publish.com/wp-content/uploads/2020/10/amazon-great-indian-festival-2020-exclusively-for-prime-members-sale-live-now-ad-toi-mumbai-16-10-2020.png" alt="" /></a></div>
                </div>
            </div>
        </>
    )
}

