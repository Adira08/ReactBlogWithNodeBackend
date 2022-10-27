import React,{ useContext } from 'react'
import { MainContext } from './MainContext'

const MoreSiren = () => {
    const [data] = useContext(MainContext)

    return (
        <>
            <div className="moresiren-container">
                <h2 className="moresiren-heading">More From The Siren</h2>
                <hr className="moresiresn-horizontal-line"/>
                <div className="moresiren-items">
                    {
                        data.filter(
                            latest => latest.id === '4' && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Food')
                        ).map(
                            latestInfo => (
                                <div className="moresiren-box">
                                    <p className="moresiren-info">Related Reads</p>
                                    <img src={latestInfo.url} className="moresiren-image" alt=""/>
                                    <h4 className="moresiren-title">{latestInfo.title}</h4>
                                    <div className="moresiren-user-box" >
                                        <img className="moresiren-user" src={require('../icons/user.png')} alt=""/>
                                        <div className="moresiren-user-details">
                                            <p>Aditya Raj</p>
                                            <p className="moresiren-date">September 20, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MoreSiren;