import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/*

Use following to implement carousel. 

import { Carousel } from "react-responsive-carousel";
import NextJsCarousel from "../components/Carousel";

<NextJsCarousel></NextJsCarousel>
*/
  
export default class NextJsCarousel extends Component {

    //const images = []; = [{jsonobject 1,... }]
    
// exchange img src to indexes in array of screenshots fetched from api
    render() {
        return (
            <div className = "container flex flex-wrap items-center space-x-4 text-center">
              <Carousel>
                  <div>
                    <img src="https://media.rawg.io/media/resize/420/-/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg" alt="image1"/>

                    
                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg" alt="image2" />


                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/7ac/7acf51129805f3f6a0cbf7cd0c61c2c4.jpg" alt="image3"/>


                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/7af/7af0ba8170f70e31478fb45415988faa.jpg" alt="image4"/>

                    </div>
                </Carousel>
            </div>
        );
    }
};