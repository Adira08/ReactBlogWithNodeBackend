import React,{ useContext } from 'react'
import { MainContext } from './MainContext'
import { Link } from 'react-router-dom'
import TheLatest from './TheLatest'
import LatestStories from './LatestStories'
import LatestArticles from './LatestArticles'


const Home = () => {

    const [data] = useContext(MainContext)

    return (
        <>
            <div className="home-container">
                <div className="banner-container">
                    <div className="banner-1">
                        {
                            data.filter(
                                (banner) => banner.id === '4' && (banner.category === 'Tourism')).map(
                                    (image) =>
                                        <Link to={`/category/article/${image.id}/${image.category}`} style={{ textDecoration: "none" }} className="">
                                            <img src={image.url} className="banner-image-1" alt=""/>
                                            <p className="banner-text1">{image.title}</p>
                                            <p className="banner-text2">{image.category} / {image.date}</p>
                                        </Link>
                                )
                        }
                    </div>
                    <div className="banner-2">
                        {
                            data.filter(
                                (banner) => banner.id === '3' && (banner.category === 'Fitness' || banner.category === 'Technology')).map(
                                    (image) =>
                                        <Link to={`/category/article/${image.id}/${image.category}`} style={{ textDecoration: "none" }} className="">
                                            <img src={image.url} className="banner-image-2" alt=""/>
                                        </Link>
                                )
                        }
                    </div>
                </div>

                <TheLatest />
                <LatestArticles />
                <LatestStories />
            </div>
        </>
    )
}

export default Home