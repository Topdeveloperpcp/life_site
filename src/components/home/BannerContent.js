import React from 'react';
import fonts from '../styles/fontstyle.module.css';
import styles from '../styles/banner.module.css';
import AppleIcon from '@material-ui/icons/Apple';

const BannerContent = () => {
    const [appleColor, setAppleColor] = React.useState(false);
    const changeColor = () => {
        setAppleColor(!appleColor)
    }
    return(
        <div>
            <div className={`${fonts.ralewaybold_52} ${styles.content}`}>
                The new way to create awesome websites. Try using Canvas Template.
            </div>
            <div className={styles.bannerBtn} onMouseEnter={changeColor} onMouseLeave={changeColor}>
                <AppleIcon style={!appleColor?{ fontSize: 50, color: 'white' }:{ fontSize: 50, color: '#333' }} className={styles.apple}/>
                <div>
                    <div className={fonts.ralewaybold_22}>
                        START YOUR FREE TRIAL
                    </div>
                    <div className={fonts.creteround_14}>
                        30-Days &amp; No Credit card Required
                    </div>
                </div>                
            </div>
        </div>
    )
} 

export default BannerContent;