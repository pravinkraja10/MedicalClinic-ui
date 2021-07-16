import React from 'react';

import {
  Grid,
  InputAdornment,
  Card,
  Button,
  TextField
} from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import stock1 from '../../assets/img35.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className=" min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper  min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <img
              src={stock1}
              className="card-img-top rounded"
              style={{ position: 'absolute' }}
              alt="..."
            />
            <div className="bg-composed-wrapper--content p-3 p-md-5 px-5">
              <Grid container spacing={0}>
                <Grid
                  item
                  lg={9}
                  style={{ paddingLeft: '18rem', marginTop: '6rem' }}>
                  <div className="apptext">
                    STANDING BY.
                    <br /> READY TO HELP.
                    <br /> LET'S TALK.
                  </div>
                </Grid>
                <Grid item lg={3} className="float-right rounded">
                  <div className="shadow-xxl">
                    <Card className=" overflow-hidden shadow-xxl font-size-sm p-3 ">
                      <div className="divider-v divider-v-lg d-none d-lg-block" />
                      <div className="text-center mt-4">
                        <h1 className="font-size-xxl mb-1 font-weight-bold txtclr">
                          Let's talk. Set an appointment today.
                        </h1>
                        <p className="mb-0 text-black">
                          Fill out the form below and we will reach out to{' '}
                          <br />
                          you within 24 hours or less.
                        </p>
                      </div>
                      <div className="py-4">
                        <div className="text-center text-black-50 py-2 mb-4">
                          or sign in with credentials
                        </div>
                        <div>
                          <div className="mb-4">
                            <TextField
                              fullWidth
                              variant="outlined"
                              className="bg-light"
                              id="textfield-user"
                              label="First & Last Name"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonOutlineOutlinedIcon />
                                  </InputAdornment>
                                )
                              }}
                            />
                          </div>
                          <div className="mb-4">
                            <TextField
                              fullWidth
                              className="bg-light"
                              variant="outlined"
                              id="textfield-email"
                              label="Email address"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailOutlineTwoToneIcon />
                                  </InputAdornment>
                                )
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-phone"
                              className="bg-light"
                              label="Phone Number"
                              type="number"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LocalPhoneOutlinedIcon />
                                  </InputAdornment>
                                )
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              className="bg-light"
                              fullWidth
                              id="standard-multiline-static"
                              label="Message"
                              multiline
                              rows="4"
                            />
                          </div>
                          <div className="text-center py-2 mt-2">
                            <Button className="btn-info font-weight-bold w-50">
                              Sign in
                            </Button>
                          </div>
                          <div className="text-center text-black">
                            We respect your privacy! We will never share, sell
                            <br /> or misuse your information without
                            permission.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
