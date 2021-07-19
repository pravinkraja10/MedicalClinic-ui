import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button } from '@material-ui/core';

import Slider from 'react-slick';

import stock1 from '../../../assets/img34.png';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample() {
  const widgetsCarousels1A = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  return (
    <>
      <Grid item lg={12}>
        <Slider className=" mb-lg-0 slider-dots-light" {...widgetsCarousels1A}>
          <div>
            <Card className="shadow-none">
              <div className="hero-wrapper bg-composed-wrapper h-100  br-xl-left-0">
                <div className="flex-grow-1 w-100 d-flex align-items-end">
                  <div
                    className="bg-composed-wrapper--image br-xl-left-0 opacity-10 bg-composed-filter-rm"
                    style={{ backgroundImage: 'url(' + stock1 + ')' }}
                  />

                  <div
                    className="bg-composed-wrapper--content text-left"
                    style={{ minHeight: '40rem' }}>
                    <div className="text-white mt-3">
                      <div className="mx-auto pad">
                        <Grid item md={4}>
                          <div className="cartxt">
                            We combine the latest
                            <br />
                            advances in orthopedics
                            <br />
                            and sports medicine to
                            <br />
                            get patients the most
                            <br />
                            optimal results.
                          </div>
                          <Button
                            style={{ maxWidth: '12rem' }}
                            href="/appointment"
                            className="btn-info mt-3 text-nowrap btn-outline-info font-weight-bold headbgtxt text-uppercase">
                            set an appointment
                          </Button>
                          <Button
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="btn-first ml-3 mt-3 text-nowrap btn-outline-first font-weight-bold headbgtxt text-uppercase">
                            (650)762-9855
                          </Button>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="shadow-none">
              <div className="hero-wrapper bg-composed-wrapper h-100  br-xl-left-0">
                <div className="flex-grow-1 w-100 d-flex align-items-end">
                  <div
                    className="bg-composed-wrapper--image br-xl-left-0 opacity-10 bg-composed-filter-rm"
                    style={{ backgroundImage: 'url(' + stock1 + ')' }}
                  />
                  <div className="bg-composed-wrapper--bg bg-second br-xl-left-0 " />
                  <div
                    className="bg-composed-wrapper--content text-left"
                    style={{ minHeight: '40rem' }}>
                    <div className="text-white mt-3">
                      <div className="mx-auto pad">
                        <Grid item md={4}>
                          <div className="cartxt">
                            We combine the latest
                            <br />
                            advances in orthopedics
                            <br />
                            and sports medicine to
                            <br />
                            get patients the most
                            <br />
                            optimal results.
                          </div>
                          <Button
                            style={{ maxWidth: '12rem' }}
                            href="/appointment"
                            className="btn-info mt-3 text-nowrap btn-outline-info font-weight-bold headbgtxt text-uppercase">
                            set an appointment
                          </Button>
                          <Button
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="btn-first ml-3 mt-3 text-nowrap btn-outline-first font-weight-bold headbgtxt text-uppercase">
                            (650)762-9855
                          </Button>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Slider>
      </Grid>
    </>
  );
}
