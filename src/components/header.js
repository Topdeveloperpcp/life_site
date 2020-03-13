import React, { useState } from 'react';
import styles from './styles/header.module.css';
import fonts from './styles/fontstyle.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../assets/images/logo.png';
import phone from '../assets/images/phone.png';
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
        <div className={scrollY?styles.header_container:styles.header_container_scroll}>           
            <div className={styles.logo_container}>
                <img src={logo} className={styles.logo}/>
            </div>
            <div className={styles.nav_container}>
                <div className={`${fonts.color} ${fonts.ralewaybold_13} ${styles.menu}`}>
                    UVOD
                </div>
                <div className={`${fonts.ralewaybold_13} ${styles.menu}`}>
                    O NAS
                </div>
                <div className={`${fonts.ralewaybold_13} ${styles.menu}`}>
                    PRODUKTY
                </div>
                <div className={`${fonts.ralewaybold_13} ${styles.menu}`}>
                    OTAZKY A ODPOVEDI
                </div>
                <div className={`${fonts.ralewaybold_13} ${styles.menu}`}>
                    BLOG
                </div>
                <div className={`${fonts.ralewaybold_13} ${styles.menu}`}>
                    KONTAKT
                </div>
            </div>
            <div className={styles.right_container}>
                <FacebookIcon />
                <InstagramIcon />          
            </div>
        </div>
    )
}

export default Header;