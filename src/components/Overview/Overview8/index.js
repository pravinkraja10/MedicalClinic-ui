import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  List,
  ListItem,
  TextField,
  InputAdornment,
  Button
} from '@material-ui/core';

import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import projectLogo from '../../../assets/logo.png';

export default function LivePreviewExample() {
  return (
    <>
      <Grid item md={12} className="bg-medi">
        <Grid container spacing={0} className=" justify-content-center py-3">
          <span className="font-size-xl myfont mr-2">
            Set up an appointment with us.
          </span>
          <Grid item md={2}>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              size="small"
              id="input-with-icon-textfield134"
              className="w-100 bg-white text-second"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailTwoToneIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item md={1}>
            <Button className="w-100 mt-3 mt-md-0 btn-outline-info bg-info">
              <span className="btn-wrapper--label text-white font-weight-bold">
                Sign up
              </span>
              <span className="btn-wrapper--icon text-white">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className="bg-foot font-size-sm">
        <Grid item md={8} className="mx-auto">
          <div className="pt-4">
            <Grid container spacing={0} className="text-center w-100">
              <Grid item md={6} xl={3}>
                <div className="my-4 my-xl-0 ml-3">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    title="Bay Area Foot & Ankle Medical Clinic"
                    className="app-nav-logo">
                    <div className="avatar-icon d-65  rounded-circle ">
                      <img
                        alt="Bay Area Foot & Ankle Medical Clinic"
                        src={projectLogo}
                      />
                    </div>
                    <div className="logofoot">
                      <b>Bay Area Foot &</b> <br />
                      <b>Ankle Medical Clinic</b>
                    </div>
                  </a>
                  <List
                    component="div"
                    className="nav-transparent text-nowrap d-flex justify-content-left">
                    <ListItem
                      button
                      className="text-info"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className="text-info"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className="text-info"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className="text-info"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid item md={6} xl={3}>
                <div className="my-4 my-xl-0">
                  <h6 className="txt-foot text-info font-weight-bold myfont mb-3 text-uppercase">
                    Links
                  </h6>
                  <List
                    component="div"
                    className="nav-transparent-alt flex-column">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Home
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Pricing
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Download
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      About
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Service
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid item md={6} xl={3}>
                <div className="my-4 my-xl-0">
                  <h6 className="txt-foot text-info font-weight-bold mb-3 myfont text-uppercase text-center">
                    Support
                  </h6>
                  <List
                    component="div"
                    className="nav-transparent-alt flex-column justify-content-center">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      FAQ
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      How it
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Features
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Contact
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Reporting
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid item md={6} xl={3}>
                <div className="my-4 my-xl-0">
                  <h6 className="txt-foot text-info font-weight-bold myfont mb-3 text-center">
                    Contact us
                  </h6>
                  <List
                    component="div"
                    className="nav-transparent-alt flex-column justify-content-center">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      +880 12345678
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      hello@ohiorivers.com
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 d-block text-white-50 font-size-lg text-center">
                      Abcdefg City
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
            <div className="py-3 d-block d-lg-flex align-items-center justify-content-between">
              <div className="text-center d-block mb-3 mb-md-0 text-white">
                Copyright &copy;2021 Bay Area Foot & Ankle Medical Clinic
              </div>
              <List
                component="div"
                className="nav-transparent text-nowrap d-flex justify-content-center">
                <ListItem
                  button
                  className="text-white-50"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </ListItem>
                <ListItem
                  button
                  className="text-white-50"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Terms of Service
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
}
