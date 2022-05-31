import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/*

Use following to implement carousel. 

import { Carousel } from "react-responsive-carousel";
import NextJsCarousel from "../components/Carousel";

<NextJsCarousel></NextJsCarousel>
*/

function createScreenshot (item){


    return (<div key={item.id}>
        <img src={item.image} alt="image1"/>
    </div>);
}

export default function NextJsCarousel ({ images }) {
    
// exchange img src to indexes in array of screenshots fetched from api
     return (
        <div className = "container flex flex-wrap items-center space-x-4 text-center">
            <Carousel>
             {images.map(image => createScreenshot(image))}
             </Carousel>
        </div>
    );
};