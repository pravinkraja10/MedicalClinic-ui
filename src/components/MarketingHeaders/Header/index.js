import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Button, List, ListItem } from '@material-ui/core';

import projectLogo from '../../../assets/logo.png';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded navbar-light">
        <div className="app-nav-logo ml-5 flex-grow-0">
          <a
            href="/overview"
            title="Bay Area Foot & Ankle Medical Clinic"
            className="app-nav-logo p-3">
            <div className="avatar-icon d-60 mr-3 rounded-circle">
              <img
                alt="Bay Area Foot & Ankle Medical Clinic"
                src={projectLogo}
              />
            </div>
            <div className="logotxt">
              <b>Bay Area Foot &</b> <br />
              <b>Ankle Medical Clinic</b>
            </div>
          </a>
        </div>
        <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
          <ul className="d-flex justify-content-center">
            <li>
              <a
                className="font-size-sm font-weight-bold rounded-pill"
                href="/services">
                Services
              </a>
            </li>
            <li>
              <a
                className="font-size-sm font-weight-bold rounded-pill"
                href="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="font-size-sm font-weight-bold rounded-pill"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Education
              </a>
            </li>
            <li>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-info text-nowrap font-weight-bold headbgtxt">
                (650)762-9855
              </Button>
            </li>
            <li>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-info text-nowrap font-weight-bold headbgtxt text-uppercase">
                Contact
              </Button>
            </li>
            <List
              component="div"
              className="nav-transparent-alt text-nowrap d-flex justify-content-center">
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
                  icon={['fab', 'instagram']}
                  className="font-size-lg"
                />
              </ListItem>
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
            </List>
          </ul>
        </div>
        <div className="header-nav-actions ml-auto ml-xl-4 flex-grow-0">
          <span className="d-none d-lg-block">
            {/*   <Button
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="btn-pill text-uppercase font-weight-bold text-nowrap font-size-xs btn-first">
              My account
            </Button> */}
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none">
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper bg-second shadow-xxl navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>

              <List
                component="div"
                className="nav-pills nav-transparent nav-lg flex-column p-3">
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center text-white-50">
                  <span>Services</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center text-white-50">
                  <span>Testimonials</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center text-white-50">
                  <span>Education</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center text-white-50">
                  <span>Contact</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center text-white-50">
                  <span>Services</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
              </List>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
