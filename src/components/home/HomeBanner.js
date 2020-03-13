import React from 'react';
import '../styles/home/banner.scss';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import bannerBackground from '../../assets/images/home/4.jpg';
import slider_iphone from '../../assets/images/home/slider-iphone.png';
import BannerContent from './BannerContent';
const HomeBanner = () => {
    return(
        <div className="banner_container">
            <ParallaxProvider>
                <ParallaxBanner
                    className="parallax_banner"
                    layers={[
                        {
                            image: bannerBackground,
                            amount: 0.1,
                        },
                        {
                            image: slider_iphone,
                            amount: 0.6,
                            props:{
                                style:{
                                    top:'38%',
                                    left: '18%',
                                    width:'550px',
                                    height:'620px',
                                    bottom: '0px'
                                }                                
                            }
                        },
                        {
                            children: <BannerContent />,
                            amount: 0.6,
                            props:{
                                style:{
                                    top:'32%',
                                    left: '50%',
                                    width:'390px',
                                    height:'450px',
                                    bottom: '0px'
                                }                                
                            }
                        }
                    ]}
                    style={{
                        height: '100vh',
                    }}
                >
                    
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    )
}

export default HomeBanner;