import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Card from "../Card/Card.jsx";

import image1 from "../../../../assets/img/bg6.jpg";
import image2 from "../../../../assets/img/bg2.jpg";
import image3 from "../../../../assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { images } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            {images && images[0] && (
              <Carousel {...settings}>
                <div>
                  <img
                    src={images[0]}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      All Galoona Surfboard 1 , Pro
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={images[1]}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, Srfboard 1
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={images[2]}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Pip Line Srfboard 1, The Best All Round
                    </h4>
                  </div>
                </div>
              </Carousel>
            )}
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default SectionCarousel;
