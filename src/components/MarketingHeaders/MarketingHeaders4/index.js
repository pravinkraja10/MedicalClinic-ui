import React from 'react';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  List, ListItem } from '@material-ui/core';


export default function LivePreviewExample() {


  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded navbar-light">
        <div className="app-nav-logo flex-grow-0 app-nav-logo--dark mr-3">
          <a
            href="/overview"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo">
          
            <div className="ml-2 font-h">
              <b>Crypto</b>
            </div>
          </a>
        </div>
        <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
          <ul className="d-flex justify-content-center">
            <li>
            <a
              href="#/"
              className="font-size-sm text-uppercase font-weight-bold rounded-pill">
           <FontAwesomeIcon
                     icon={['fa', 'home']}
                    className="mr-2"
                  />
                  <span className="text-primary">
             Home
                  </span>
            </a>
              <div className="submenu-dropdown">
                <div className="shadow-xxl bg-white rounded">
                  <List
                    component="div"
                    className="nav-pills nav-neutral-primary nav-pills-rounded nav-lg flex-column p-3">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex align-items-center">
                      <span>Courses</span>
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
                      className="px-4 d-flex align-items-center">
                      <span>Listings</span>
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
                      className="px-4 d-flex align-items-center">
                      <span>Workplace</span>
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
                      className="px-4 d-flex align-items-center">
                      <span>Software</span>
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
                      className="px-4 d-flex align-items-center">
                      <span>Exchanges</span>
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
                      className="px-4 d-flex align-items-center">
                      <span>Services</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
            </li>
       
            <li>
     
              <a
                href="/explore"
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
        <div className="header-nav-actions ml-auto ml-xl-4 flex-grow-0">
        <div className="header-nav-actions ml-auto ml-xl-4 flex-grow-0">
        <div className="avatar-icon-wrapper">
                    <div className="avatar-icon rounded-circle shadow-sm-dark">
                    <a href="/profile">
                      <img alt="..." src={avatar1} />
                      </a>
                    </div>
                  </div>
                
                    <FontAwesomeIcon
                      icon={['fas', 'sort-down']}
                      className="mr-1 font-size-xl text-white  mr-3 ml-2"
                    />
               
        </div>
        
        </div>
      
      </div>
    
    </>
  );
}
