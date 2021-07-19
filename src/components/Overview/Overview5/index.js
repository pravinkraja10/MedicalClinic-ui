import React from 'react';
import { Grid, Card, CardContent, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stock2 from '../../../assets/img20.png';
import stock3 from '../../../assets/img21.png';
import stock4 from '../../../assets/img22.png';
import stock5 from '../../../assets/img23.png';
export default function LivePreviewExample() {
  return (
    <>
      <Grid item lg={12} className="d-flex my-5 py-5">
        <Card className="card-box w-100">
          <div className="card-img-wrapper bg-medi h-240px">
            <div className="bg-medi">
              <div className="justify-content-center only-pc">
                <Grid container spacing={6} className="justify-content-center">
                  <Grid item md={2} style={{ top: '-75px', maxWidth: '17rem' }}>
                    <div
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-block card card-box-hover-rise text-left card-box">
                      <span
                        className="btn-wrapper--icon p-3"
                        style={{ fontSize: 45 }}>
                        <FontAwesomeIcon icon={['fas', 'laptop-house']} />
                      </span>
                      <div className="px-4">
                        <div className="font-size-lg myfont font-weight-bold mb-2">
                          Recruit
                        </div>
                        <p className="mb-0 text-black-50">
                          Aliquam pellentesque mauris quam, ac interdum neque
                          rhoncus vel. Morbi fringilla at lacus et efficitur.
                          Aenean porttitor odio at
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} style={{ top: '-75px', maxWidth: '17rem' }}>
                    <div
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-block card card-box-hover-rise text-left card-box">
                      <span
                        className="btn-wrapper--icon p-3"
                        style={{ fontSize: 45 }}>
                        <FontAwesomeIcon icon={['fas', 'file-alt']} />
                      </span>
                      <div className="px-4">
                        <div className="font-size-lg myfont font-weight-bold mb-2">
                          Curate
                        </div>
                        <p className="mb-0 text-black-50">
                          Aliquam pellentesque mauris quam, ac interdum neque
                          rhoncus vel. Morbi fringilla at lacus et efficitur.
                          Aenean porttitor odio at
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} style={{ top: '-75px', maxWidth: '17rem' }}>
                    <div
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-block card card-box-hover-rise text-left card-box">
                      <span
                        className="btn-wrapper--icon p-3"
                        style={{ fontSize: 45 }}>
                        <FontAwesomeIcon icon={['fas', 'rocket']} />
                      </span>
                      <div className="px-4">
                        <div className="font-size-lg myfont font-weight-bold mb-2">
                          Launch
                        </div>
                        <p className="mb-0 text-black-50">
                          Aliquam pellentesque mauris quam, ac interdum neque
                          rhoncus vel. Morbi fringilla at lacus et efficitur.
                          Aenean porttitor odio at
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} style={{ top: '-75px', maxWidth: '17rem' }}>
                    <div
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-block card card-box-hover-rise text-left card-box">
                      <span
                        className="btn-wrapper--icon p-3"
                        style={{ fontSize: 45 }}>
                        <FontAwesomeIcon icon={['fas', 'lightbulb']} />
                      </span>
                      <div className="px-4">
                        <div className="font-size-lg myfont font-weight-bold mb-2">
                          Learn
                        </div>
                        <p className="mb-0 text-black-50">
                          Aliquam pellentesque mauris quam, ac interdum neque
                          rhoncus vel. Morbi fringilla at lacus et efficitur.
                          Aenean porttitor odio at
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <Grid item lg={12} className="bg-medi">
            <Grid container spacing={6}>
              <Grid item md={3}>
                <div
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper"
                  style={{ marginTop: '5rem' }}>
                  {/*    <img
                    src={stock2}
                    className="card-img-top"
                    style={{ minHeight: '40rem' }}
                    alt="..."
                  /> */}
                  <div className="flex-grow-1 w-100 d-flex">
                    <div
                      className="bg-composed-wrapper--image br-xl-left-0 opacity-9 bg-composed-filter-rm"
                      style={{ backgroundImage: 'url(' + stock2 + ')' }}
                    />
                    <div className="bg-composed-wrapper--bg bg-second br-xl-left-0 " />
                    <div
                      className="bg-composed-wrapper--content"
                      style={{ minHeight: '40rem' }}>
                      <Grid
                        item
                        md={12}
                        className="p-5"
                        style={{ float: 'right', fontSize: '4rem' }}>
                        <span className="txtclronly font-weight-bold">WHO</span>
                        <br />
                        <span className="text-white">WE</span>
                        <br />
                        <span className="text-white">ARE</span>
                      </Grid>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={8}>
                <CardContent className="text-left card-body-avatar">
                  <p className="font-size-lg text-white">
                    Donec a dictum mi, quis sagittis mauris. Nunc in ligula ut
                    sem congue dictum eu id velit. Donec et pulvinar ante.
                    <br />
                    Pellentesque elit nunc, hendrerit eu ligula at, ullamcorper
                    consectetur lacus. Curabitur a luctus lorem, quis
                    <br />
                    ullamcorper ante. Integer sodales diam sit amet risus
                    vulputate, non mollis augue sollicitudin.
                  </p>

                  <Grid container spacing={6} className="mt-3">
                    <Grid item lg={4} className="d-flex">
                      <Card className="card-box w-100 card-box-hover-rise">
                        <div className="card-img-wrapper h-320px">
                          <img
                            alt="..."
                            className="card-img-top img-fit-container"
                            src={stock3}
                          />
                        </div>
                        <CardContent className="text-left ml-3">
                          <h3 className="font-weight-bold myfont txtclr font-size-xl">
                            Dr. John Doe
                          </h3>
                          <span className="font-size-sm text-black-50">
                            Cardiac Clinic, Primary
                            <br />
                            Healthcare
                          </span>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item lg={4} className="d-flex">
                      <Card className="card-box w-100 card-box-hover-rise">
                        <div className="card-img-wrapper h-320px">
                          <img
                            alt="..."
                            className="card-img-top img-fit-container"
                            src={stock4}
                          />
                        </div>
                        <CardContent className="text-left ml-3">
                          <h3 className="font-weight-bold myfont txtclr font-size-xl">
                            Dr. John Doe
                          </h3>
                          <span className="font-size-sm text-black-50">
                            Cardiac Clinic, Primary
                            <br />
                            Healthcare
                          </span>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item lg={4} className="d-flex">
                      <Card className="card-box w-100 card-box-hover-rise">
                        <div className="card-img-wrapper h-320px">
                          <img
                            alt="..."
                            className="card-img-top img-fit-container"
                            src={stock5}
                          />
                        </div>
                        <CardContent className="text-left ml-3">
                          <h3 className="font-weight-bold myfont txtclr font-size-xl">
                            Dr. John Doe
                          </h3>
                          <span className="font-size-sm text-black-50">
                            Cardiac Clinic, Primary
                            <br />
                            Healthcare
                          </span>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="btn-light mt-4 text-nowrap btn-outline-light font-weight-bold headbgtxt text-uppercase">
                    get to know us
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}
