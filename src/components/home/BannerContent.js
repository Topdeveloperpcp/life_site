import React from 'react';
import '../styles/home/banner.scss';
import AppleIcon from '@material-ui/icons/Apple';

const BannerContent = () => {
    const [appleColor, setAppleColor] = React.useState(false);
    const changeColor = () => {
        setAppleColor(!appleColor)
    }
    return(
        <div>
            <div className={`ralewaybold_52 content`}>
                The new way to create awesome websites. Try using Canvas Template.
            </div>
            <div className="bannerBtn" onMouseEnter={changeColor} onMouseLeave={changeColor}>
                <AppleIcon style={!appleColor?{ fontSize: 50, color: 'white' }:{ fontSize: 50, color: '#333' }} className="apple"/>
                <div>
                    <div className="ralewaybold_22">
                        START YOUR FREE TRIAL
                    </div>
                    <div className="creteround_14">
                        30-Days &amp; No Credit card Required
                    </div>
                </div>                
            </div>
        </div>
    )
} 

export default BannerContent;