import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../Helpers/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import Slider from "react-slick";

function Carousel() {

    const [ currImg, setCurrImg ] = useState(0);

    return (
        <div className="carousel">
            <div 
            className="carousel-inner" 
            style={{backgroundImage: `url(${images[currImg].img})`}}>
                <div className="left" 
                     onClick={() => { 
                         currImg > 0 && setCurrImg(currImg -1)}}
                        //  isDisabled={className?.includes("slick-disabled")}
                        >
                    <ArrowBackIosIcon style={{ fontSize:30 }} />
                </div>
                <div className="center"></div>
                <div className="right"
                     onClick={() => { 
                         currImg < images.length - 1 && setCurrImg(currImg + 1)}}>
                    <ArrowForwardIosIcon style={{ fontSize:30 }} />
                </div>
            </div>
        </div>
    )
}

export default Carousel;
