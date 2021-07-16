import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField,
  FormHelperText
} from '@material-ui/core';

import hero4 from '../../../assets/images/hero-bg/hero-2.jpg';
import { EMAIL_DOMAIN_PATTERN, EMAIL_USERNAME_PATTERN } from 'config/config';
import authService from 'services/AuthService';

export default function LivePreviewExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confPassword, setConfPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  // const [confPassword, setConfPassword] = useState('');
  const [firstnameErr, setFirstnameErr] = useState('');
  const [lastnameErr, setLastnameErr] = useState('');
  const [respErr, setRespErr] = useState('');
  const [resp, setResp] = useState('');

  const onChange = (e, name, setter, errSetter) => {
    if (e) {
      e.preventDefault();
    }

    const val = e.target.value;

    setter(val);
    if (val && val.trim().length > 0) {
      if (name === 'Email') {
        validateEmail(val);
        return;
      }
      errSetter('');
      return;
    }

    if (!val || val.trim().length === 0) {
      errSetter(`${name} can not be empty.`);
    }
  };

  const validateEmail = (input) => {
    if (!input.trim()) {
      setEmailErr('Email can not be empty');
      return false;
    }
    if (input.indexOf('@') >= 0) {
      const emailParts = input.split('@');
      if (!emailParts[0].match(EMAIL_USERNAME_PATTERN) || !emailParts[1].match(EMAIL_DOMAIN_PATTERN)) {
        setEmailErr('Email is invalid');
        return false;
      }
    } else {
      setEmailErr('Email is invalid');
      return false;
    }
    setEmailErr('');
    return true;
  };

  const onSubmit = async () => {
    setRespErr('');
    setResp('');
    try {
      const response = await authService.register({
        type: 'direct',
        firstname,
        lastname,
        email,
        password
      });
      console.log(response);
      if (response.success && response.message) {
        setResp(response.message);
      } else {
        if (response.error.message) {
          setRespErr(response.error.message);
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setRespErr(error.response.data.message);
      } else {
        setRespErr(error.message);
      }
    }
  };

  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      lg={7}
                      xl={6}
                      className="d-flex align-items-center">
                      <Grid item md={10} lg={8} xl={7} className="mx-auto">
                        <div className="py-4">
                          <div className="text-center">
                            <h3 className="display-4 mb-2 font-weight-bold">
                              Create account
                            </h3>
                            <p className="font-size-lg mb-5 text-black-50">
                              Start using our tools right away! Create an
                              account today!
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              Email address
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your email address"
                              type="email"
                              error={Boolean(emailErr)}
                              value={email}
                              onChange={(e) => onChange(e, 'Email', setEmail, setEmailErr)}
                            />
                            <FormHelperText error>{emailErr}</FormHelperText>
                          </div>
                       
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              First name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your first name"
                              error={Boolean(firstnameErr)}
                              value={firstname}
                              onChange={(e) => onChange(e, 'Firstname', setFirstname, setFirstnameErr)}
                            />
                            <FormHelperText error>{firstnameErr}</FormHelperText>
                          </div>
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              Last name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your last name"
                              error={Boolean(lastnameErr)}
                              value={lastname}
                              onChange={(e) => onChange(e, 'Lastname', setLastname, setLastnameErr)}
                            />
                            <FormHelperText error>{lastnameErr}</FormHelperText>
                          </div>
                          {/* <div className="mb-3">
                            <div className="d-flex justify-content-between">
                              <label className="font-weight-bold mb-2">
                                Mobile Number
                              </label>
                            </div>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your Mobile Number"
                              type="number"
                            />
                          </div> */}
                          <div className="mb-3">
                            <div className="d-flex justify-content-between">
                              <label className="font-weight-bold mb-2">
                                Password
                              </label>
                            </div>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your password"
                              type="password"
                              error={Boolean(passwordErr)}
                              value={password}
                              onChange={(e) => onChange(e, 'Password', setPassword, setPasswordErr)}
                            />
                            <FormHelperText error>{passwordErr}</FormHelperText>
                          </div>
                          <div className="form-group mb-5">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>
                          <FormHelperText error>{respErr}</FormHelperText>
                          <FormHelperText>{resp}</FormHelperText>

                          <Button
                            size="large"
                            fullWidth
                            className="btn-primary mb-5"
                            onClick={onSubmit}
                          >
                            Create Account
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-dark min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image opacity-5"
                            style={{ backgroundImage: 'url(' + hero4 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
                          <div className="bg-composed-wrapper--bg bg-deep-sky opacity-2" />
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                Blue23
                                PRO
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type specimen 
                              book. It has survived not only five centuries, but also the leap into electronic 
                              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                              release of Letraset 
                              sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                              software like Aldus PageMaker including versions of Lorem Ipsum
                              </p>
                              <div className="divider mx-auto border-1 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                                <Button className="btn-warning px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg">
                                  <span className="btn-wrapper--label">
                                    Subscription Options
                                  </span>
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fas', 'arrow-right']}
                                    />
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <List
                            component="div"
                            className="nav-pills nav-neutral-secondary d-flex">
                            <Tooltip title="Facebook" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </ListItem>
                            </Tooltip>

                            <Tooltip title="Twitter" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                              </ListItem>
                            </Tooltip>

                            <Tooltip title="Google" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </ListItem>
                            </Tooltip>

                            <Tooltip title="Instagram" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                              </ListItem>
                            </Tooltip>
                          </List>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
