import React, { useState } from 'react';
import './styles/header.scss';
import './styles/fonts.scss';
import logo from '../assets/images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Header = () => {
    const [scrollY, setScrollY] = useState(true);
    window.addEventListener('scroll', () =>{// lodash debounce method.
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
           x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
           y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };
    
        if(scroll.y > 100){
            setScrollY(false)
        } else {
            setScrollY(true)
        }
    }, 300);
    return(
        <div className={scrollY?"header_container":"header_container_scroll"}>           
            <div className="logo_container">
                <img src={logo} className="logo" alt="banner"/>
            </div>
            <div className="nav_container">
                <div className="color ralewaybold_13 menu">
                    UVOD
                </div>
                <div className="ralewaybold_13 menu">
                    O NAS
                </div>
                <div className="ralewaybold_13 menu">
                    PRODUKTY
                </div>
                <div className="ralewaybold_13 menu">
                    OTAZKY A ODPOVEDI
                </div>
                <div className="ralewaybold_13 menu">
                    BLOG
                </div>
                <div className="ralewaybold_13 menu">
                    KONTAKT
                </div>
            </div>
            <div className="right_container">
                <FacebookIcon />
                <InstagramIcon />          
            </div>
        </div>
    )
}

export default Header;