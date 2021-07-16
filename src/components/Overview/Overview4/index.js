import React, { useState } from 'react';
import { Grid, Button, CardContent } from '@material-ui/core';
import stock1 from '../../../assets/img9.png';
import stock2 from '../../../assets/img25.png';
import stock3 from '../../../assets/img26.png';
import stock4 from '../../../assets/img27.png';
import stock5 from '../../../assets/img28.png';
import stock6 from '../../../assets/img29.png';
import stock7 from '../../../assets/img30.png';
import stock8 from '../../../assets/img31.png';
import stock9 from '../../../assets/img32.png';

export default function LivePreviewExample() {
  const [service, setService] = useState(1);
  const [serviceImg, setServiceImg] = useState(stock1);
  const changeService = (s, img) => {
    setService(s);
    setServiceImg(img);
  };
  return (
    <>
      <div className="text-center mt-5">
        <span className="text-info text-uppercase">What we offer</span>
        <br />
        <span className="medihead linegap">Services</span>
      </div>
      <Grid item xl={12} className="mt-5">
        <div className="px-5">
          <Grid container spacing={0}>
            <Grid item md={4}>
              <div className="mx-5">
                <span className="meditxt">Sports Injuries</span>
                <div className="mt-5">
                  <p>
                    Aliquam pellentesque mauris quam, ac interdum neque rhoncus
                    vel. Morbi fringilla at lacus et efficitur. Aenean porttitor
                    odio at imperdiet elementum.
                    <br />
                    <br />
                    Mauris consequat dolor ac massa pharetra interdum neque
                    rhoncus vel. Morbi fringilla at lacus et efficitur. Aenean
                    porttitor odio at
                    <br />
                    Aliquam pellentesque mauris quam, ac interdum neque rhoncus
                    vel. Morbi fringilla at lacus et efficitur. Aenean porttitor
                    odio at imperdiet elementum. Aliquam pellentesque mauris
                    quam, ac interdum neque rhoncus vel. Morbi fringilla at
                    lacus et efficitur. Aenean porttitor odio at imperdiet
                    elementum.
                    <br />
                    <br />
                    imperdiet elementum. Aliquam pellentesque mauris quam, ac
                    interdum neque rhoncus vel. Morbi fringilla at lacus et
                    efficitur. Aenean porttitor odio at imperdiet elementum.
                    <br />
                    <br />
                  </p>
                  <div className="mt-4">
                    <Button
                      href="/services"
                      className="btn-info text-nowrap btn-outline-info font-weight-bold headbgtxt text-uppercase">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              {
                <>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded card-box-hover-rise-alt">
                    <img
                      src={serviceImg}
                      className="card-img-top rounded"
                      alt="..."
                    />
                  </a>
                </>
              }
            </Grid>
            <Grid item md={4}>
              <div className="mx-5">
                <Grid container spacing={2}>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(1, stock1)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 1 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock1}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 1 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 1 && 'sports injuries'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(2, stock2)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 2 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock2}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 2 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 2 && 'Trauma'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(3, stock3)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 3 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock3}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 3 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 3 && 'Total Ankle Replacement'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(4, stock4)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 4 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock4}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 4 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 4 && 'Arthroscopy'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(5, stock5)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 5 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock1}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 5 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 5 && 'Ligaments Reconstruction'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(6, stock6)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 6 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock6}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 6 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 6 &&
                                'Reconstructive Foot and Ankle Surgery'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(7, stock7)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 7 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock7}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 7 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 7 && 'Orthotics'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(8, stock8)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 8 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock8}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 8 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 8 && 'PRP'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xl={4} md={6}>
                    <a
                      href="#/"
                      onClick={() => changeService(9, stock9)}
                      className="card bg-box  card-box-hover-rise-alt">
                      <div
                        className={`bg-composed-wrapper card ${
                          service !== 9 && 'bg-medi'
                        } border-0`}
                        style={{ maxHeight: '159px' }}>
                        <img
                          src={stock9}
                          className="card-img-top bg-box"
                          style={{
                            position: 'absolute',
                            opacity: service !== 9 ? 0.2 : 1
                          }}
                          alt="..."
                        />
                        {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                        <div className="bg-composed-wrapper--content text-second my-5 py-2">
                          <CardContent>
                            <div className="text-center font-weight-bold text-uppercase">
                              {service !== 9 && 'Bunions'}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
