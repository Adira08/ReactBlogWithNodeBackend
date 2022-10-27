import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { MainContext } from './MainContext';

const Header = () => {

    const [data] = useContext(MainContext)

    return (
        <>
            <div className="logo">
                <span className="text-vertical">the</span>
                <span className="text-capital">siren</span>
            </div>
            <div className="nav-links">
                <Link to="/home" className="link ">Home</Link>
                {
                    data.filter(
                        category => (category.id)%5 === 0
                    ).map(
                        items => (
                            <Link to={`/category/${items.category}`} className='link'>{items.category}</Link>
                        )
                    )
                }
            </div>
            <hr className="horizontal-line"/>
        </>
    )
}
export default Header;