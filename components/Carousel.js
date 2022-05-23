import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <h2>jkkk</h2>
              <Carousel>
                  <div>
                    <img src="https://media.rawg.io/media/resize/420/-/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg" alt="image1"/>
                    <p className="legend">Image 1</p>
                    
                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg" alt="image2" />
                        <p className="legend">Image 2</p>

                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/7ac/7acf51129805f3f6a0cbf7cd0c61c2c4.jpg" alt="image3"/>
                        <p className="legend">Image 3</p>

                    </div>
                    <div>
                        <img src="https://media.rawg.io/media/resize/420/-/screenshots/7af/7af0ba8170f70e31478fb45415988faa.jpg" alt="image4"/>
                        <p className="legend">Image 4</p>

                    </div>
                </Carousel>
            </div>
        );
    }
};