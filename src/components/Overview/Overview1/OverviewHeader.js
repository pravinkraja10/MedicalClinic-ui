import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 
  Typography,
  Button,

} from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};



export default function LivePreviewExample() {

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg ">
      <div className="app-nav-logo flex-grow-0 app-nav-logo--dark mr-3">
      <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo">
         
            <div className="app-nav-logo--text">

              <b>bamburgh</b>
            </div>
          </a>
        </div>
        <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
        <ul className="d-flex justify-content-center">
            <li>
              <a
              
                href="/overview"
                onClick={(e) => e.preventDefault()}
                className="font-size-sm text-uppercase font-weight-bold rounded-pill">
             <FontAwesomeIcon
                       icon={['fa', 'home']}
                      className="mr-2"
                    />
                    <span className="text-primary pr-4">
               Home
                    </span>
              </a>
            </li>
            <li>
     
              <a
                href="/explore"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-primary px-3">
               <FontAwesomeIcon
                      icon={['fas', 'compass']}
                      className="mr-2"
                    />
                    <span className="text-primary pr-4">Explore</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
           
                <Button
               
                  className="rounded-lg text-nowrap font-size-xs text-uppercase shadow-second-sm btn-primary font-weight-bold"
                >
                 Connect Wallet
                </Button>

      </span>
      </div>
      </div>
    </>
  );
}
