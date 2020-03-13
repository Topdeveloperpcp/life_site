import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/home/5.jpg';
import img2 from '../../assets/images/home/6.jpg';
import img3 from '../../assets/images/home/7.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/styles.scss';
import '../styles/fonts.scss';
import '../styles/home/ipadcontent.scss';


const CarouselContainer = () => {
    return(
        <div class="position-relative">
            <div className="overlay_carousel">
                <p className="ralewaybold_30_white">
                    WHAT CLIENTS SAY?
                </p>
                <div className="center_divider"/>
            </div>
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                <div>
                    <img src={img1} alt="img1"/>
                </div>
                <div>
                    <img src={img2} alt="img2"/>
                </div>
                <div>
                    <img src={img3} alt="img3"/>
                </div>           
            </Carousel>            
        </div>
    )
}

export default CarouselContainer;