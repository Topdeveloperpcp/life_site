import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/home/5.jpg';
import img2 from '../../assets/images/home/6.jpg';
import img3 from '../../assets/images/home/7.jpg';
import styles from '../styles/content.module.css';
import fonts from '../styles/fontstyle.module.css';
import ipadstyle from '../styles/ipadcontent.module.css';


const CarouselContainer = () => {
    return(
        <div class="position-relative">
            <div className={styles.overlay_carousel}>
                <p className={fonts.ralewaybold_30_white}>
                    WHAT CLIENTS SAY?
                </p>
                <div className={ipadstyle.center_divider}/>
            </div>
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>           
            </Carousel>            
        </div>
    )
}

export default CarouselContainer;