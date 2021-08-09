import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/CSS/Navbar.css'


function Navbar({active}) {
    const [activePage, setActivePage] = useState('')
    useEffect(() => {
        setActivePage(active.toLowerCase())
        switch(activePage){
            case 'mobile':
                document.querySelector('.mobile').classList.add('nav-active');
                break;
            case 'tablets':
                document.querySelector('.tablets').classList.add('nav-active');
                break;
            case 'desktops':
                document.querySelector('.desktops').classList.add('nav-active');
                break;
        }
    }, [activePage])
    return (
        <center>
            <div className="nav">
                <Link className="nav-item mobile" to="/">
                    <i className="fal fa-mobile-android"></i>
                </Link>
                <Link className="nav-item tablets" to="/tablets">
                    <i className="fal fa-tablet"></i>
                </Link>
                <Link className="nav-item desktops" to="/desktops">
                    <i className="fal fa-desktop"></i>
                </Link>
            </div>
        </center>
    )
}

export default Navbar
