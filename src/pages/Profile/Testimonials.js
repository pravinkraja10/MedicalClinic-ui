import React from 'react';
import { Grid, Card, CardContent, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';

export default function LivePreviewExample() {
  return (
    <>
      <div className="text-center mt-5">
        <span className="text-info text-uppercase">what do our</span>
        <br />
        <span className="medihead linegap">patients say?</span>
      </div>

      <Grid item xl={12} className="mt-5">
        <div className="">
          <Container>
            <Grid container spacing={6}>
              <Grid item md={6}>
                <div className="hdtxt text-center">
                  Bay Area Foot & <br />
                  Ankle Medical Clinic
                </div>
                <div className="font-size-lg text-center my-3">
                  Orthopedic Surgeons & Internists located in Campbell, CA
                </div>
                <div className="my-3 txtclronly text-center font-size-xl">
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                  <div className="font-size-lg font-weight-bold">
                    121 Total Reviews
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <p>
                    Bay Are Foot & Ankle Medical Clinic always appreciates
                    feedback from our valued patients. To date, we’re thrilled
                    to have collected 121 reviews with an average rating of 5
                    out of 5 stars. Please read what others are saying about
                    South Bay Orthopedic and Sports Medicine below, and as
                    always, we would love to collect your feedback. average
                    rating of 5 out of 5 stars. Please read what others are
                    saying about South Bay Orthopedic and Sports Medicine below,
                    and as always, we would love to collect your feedback.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
          <Grid item md={5} className="mx-auto">
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <FontAwesomeIcon
                    icon={['fas', 'quote-left']}
                    className="text-info font-size-xxl float-left"
                  />
                  <div className="mx-auto">
                    <div
                      className="my-5 text-black-50 font-weight-bold font-size-xl text-center"
                      style={{
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic'
                      }}>
                      Nulla eu velit urna. Pellentesque a tortor rhoncus, mattis
                      nisl id,
                      <br />
                      sodales libero. Maecenas ut mi neque. Maecenas aliquet
                      velit
                      <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                    </div>

                    <div
                      className="font-size-sm text-center text-info"
                      style={{ lineHeight: 0 }}>
                      John Doe
                      <span className="text-second"> | 12 June 2021 </span>
                      <div className="my-3 txtclronly text-center font-size-xl">
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={['fas', 'quote-right']}
                    className="text-info font-size-xxl float-right"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5} className="mx-auto">
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <FontAwesomeIcon
                    icon={['fas', 'quote-left']}
                    className="text-info font-size-xxl float-left"
                  />
                  <div className="mx-auto">
                    <div
                      className="my-5 text-black-50 font-weight-bold font-size-xl text-center"
                      style={{
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic'
                      }}>
                      Nulla eu velit urna. Pellentesque a tortor rhoncus, mattis
                      nisl id,
                      <br />
                      sodales libero. Maecenas ut mi neque. Maecenas aliquet
                      velit
                      <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                    </div>

                    <div
                      className="font-size-sm text-center text-info"
                      style={{ lineHeight: 0 }}>
                      John Doe
                      <span className="text-second"> | 12 June 2021 </span>
                      <div className="my-3 txtclronly text-center font-size-xl">
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={['fas', 'quote-right']}
                    className="text-info font-size-xxl float-right"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5} className="mx-auto">
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <FontAwesomeIcon
                    icon={['fas', 'quote-left']}
                    className="text-info font-size-xxl float-left"
                  />
                  <div className="mx-auto">
                    <div
                      className="my-5 text-black-50 font-weight-bold font-size-xl text-center"
                      style={{
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic'
                      }}>
                      Nulla eu velit urna. Pellentesque a tortor rhoncus, mattis
                      nisl id,
                      <br />
                      sodales libero. Maecenas ut mi neque. Maecenas aliquet
                      velit
                      <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                    </div>

                    <div
                      className="font-size-sm text-center text-info"
                      style={{ lineHeight: 0 }}>
                      John Doe
                      <span className="text-second"> | 12 June 2021 </span>
                      <div className="my-3 txtclronly text-center font-size-xl">
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={['fas', 'quote-right']}
                    className="text-info font-size-xxl float-right"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5} className="mx-auto">
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <FontAwesomeIcon
                    icon={['fas', 'quote-left']}
                    className="text-info font-size-xxl float-left"
                  />
                  <div className="mx-auto">
                    <div
                      className="my-5 text-black-50 font-weight-bold font-size-xl text-center"
                      style={{
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic'
                      }}>
                      Nulla eu velit urna. Pellentesque a tortor rhoncus, mattis
                      nisl id,
                      <br />
                      sodales libero. Maecenas ut mi neque. Maecenas aliquet
                      velit
                      <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                    </div>

                    <div
                      className="font-size-sm text-center text-info"
                      style={{ lineHeight: 0 }}>
                      John Doe
                      <span className="text-second"> | 12 June 2021 </span>
                      <div className="my-3 txtclronly text-center font-size-xl">
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={['fas', 'quote-right']}
                    className="text-info font-size-xxl float-right"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5} className="mx-auto">
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <FontAwesomeIcon
                    icon={['fas', 'quote-left']}
                    className="text-info font-size-xxl float-left"
                  />
                  <div className="mx-auto">
                    <div
                      className="my-5 text-black-50 font-weight-bold font-size-xl text-center"
                      style={{
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic'
                      }}>
                      Nulla eu velit urna. Pellentesque a tortor rhoncus, mattis
                      nisl id,
                      <br />
                      sodales libero. Maecenas ut mi neque. Maecenas aliquet
                      velit
                      <br /> non ultricies laoreet. Curabitur ut lectus ipsum.
                    </div>

                    <div
                      className="font-size-sm text-center text-info"
                      style={{ lineHeight: 0 }}>
                      John Doe
                      <span className="text-second"> | 12 June 2021 </span>
                      <div className="my-3 txtclronly text-center font-size-xl">
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star']} />
                        <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={['fas', 'quote-right']}
                    className="text-info font-size-xxl float-right"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <Pagination
              className="pagination-info"
              size="large"
              count={4}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </Grid>
    </>
  );
}
