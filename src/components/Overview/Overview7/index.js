import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, CardContent, Button } from '@material-ui/core';

import Slider from 'react-slick';

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
  const marketingTestimonials1 = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <>
      <div className="py-5 mb-spacing-6-x2">
        <div className="text-center mt-5">
          <span className="text-info text-uppercase">what do our</span>
          <br />
          <span className="medihead linegap">patients say?</span>
        </div>
        <Grid item md={5} className="mx-auto">
          <Slider
            {...marketingTestimonials1}
            className="slider-arrows-outside slider-arrows-dark py-4">
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-left']}
                      className="text-info font-size-xxl float-left"
                    />
                    <div className="mx-auto">
                      <div
                        className="my-3 text-black-50 font-weight-bold font-size-xl text-center"
                        style={{
                          fontFamily: 'Playfair Display',
                          fontStyle: 'italic'
                        }}>
                        Nulla eu velit urna. Pellentesque a tortor rhoncus,
                        mattis nisl id,
                        <br />
                        sodales libero. Maecenas ut mi neque. Maecenas aliquet
                        velit
                        <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                      </div>

                      <div
                        className="font-size-sm text-center text-info"
                        style={{ fontStyle: 'italic' }}>
                        John Doe
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-info font-size-xxl float-right"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-left']}
                      className="text-info font-size-xxl float-left"
                    />
                    <div className="mx-auto">
                      <div
                        className="my-3 text-black-50 font-weight-bold font-size-xl text-center"
                        style={{
                          fontFamily: 'Playfair Display',
                          fontStyle: 'italic'
                        }}>
                        Nulla eu velit urna. Pellentesque a tortor rhoncus,
                        mattis nisl id,
                        <br />
                        sodales libero. Maecenas ut mi neque. Maecenas aliquet
                        velit
                        <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                      </div>

                      <div
                        className="font-size-sm text-center text-info"
                        style={{ fontStyle: 'italic' }}>
                        John Doe
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-info font-size-xxl float-right"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-left']}
                      className="text-info font-size-xxl float-left"
                    />
                    <div className="mx-auto">
                      <div
                        className="my-3 text-black-50 font-weight-bold font-size-xl text-center"
                        style={{
                          fontFamily: 'Playfair Display',
                          fontStyle: 'italic'
                        }}>
                        Nulla eu velit urna. Pellentesque a tortor rhoncus,
                        mattis nisl id,
                        <br />
                        sodales libero. Maecenas ut mi neque. Maecenas aliquet
                        velit
                        <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                      </div>

                      <div
                        className="font-size-sm text-center text-info"
                        style={{ fontStyle: 'italic' }}>
                        John Doe
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-info font-size-xxl float-right"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-left']}
                      className="text-info font-size-xxl float-left"
                    />
                    <div className="mx-auto">
                      <div
                        className="my-3 text-black-50 font-weight-bold font-size-xl text-center"
                        style={{
                          fontFamily: 'Playfair Display',
                          fontStyle: 'italic'
                        }}>
                        Nulla eu velit urna. Pellentesque a tortor rhoncus,
                        mattis nisl id,
                        <br />
                        sodales libero. Maecenas ut mi neque. Maecenas aliquet
                        velit
                        <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                      </div>

                      <div
                        className="font-size-sm text-center text-info"
                        style={{ fontStyle: 'italic' }}>
                        John Doe
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-info font-size-xxl float-right"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Grid>
        <div className="text-center mt-3">
          <Button
            href="/testimonials"
            className="btn-info text-nowrap btn-outline-info font-weight-bold headbgtxt text-uppercase">
            read more reviews
          </Button>
        </div>
      </div>
    </>
  );
}
