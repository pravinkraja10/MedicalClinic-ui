import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

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
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <NavLink
            to="/template/Overview"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo app-nav-logo--light">
            <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-nav-logo--text">
              <span>General</span>

              <b>bamburgh</b>
            </div>
          </NavLink>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex nav nav-neutral-first justify-content-center">
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Apps
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xl">
                <Grid container spacing={0}>
                  <Grid item lg={7} className="z-over">
                    <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                      <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Dashboards
                      </div>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary mb-3 nav-pills-rounded flex-column">
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/DashboardMonitoring"
                          className="px-4 d-flex align-items-center">
                          <span>Monitoring</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/DashboardCommerce"
                          className="px-4 d-flex align-items-center">
                          <span>Commerce</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/DashboardAnalytics"
                          className="px-4 d-flex align-items-center">
                          <span>Analytics</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/DashboardStatistics"
                          className="px-4 d-flex align-items-center">
                          <span>Statistics</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                      <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Apps Pages
                      </div>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/PageCalendar"
                          className="px-4 d-flex align-items-center">
                          <span>Calendar</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/PageChat"
                          className="px-4 d-flex align-items-center">
                          <span>Chat</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/PageFileManager"
                          className="px-4 d-flex align-items-center">
                          <span>File Manager</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/PageProjects"
                          className="px-4 d-flex align-items-center">
                          <span>Projects</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/PageProfile"
                          className="px-4 d-flex align-items-center">
                          <span>Profile</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item lg={5} className="d-flex align-items-center">
                    <div className="shadow-sm-dark w-100 bg-second p-4 rounded-right">
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Individual Apps
                      </div>
                      <List
                        component="div"
                        className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          selected
                          className="px-4 text-white-50 d-flex align-items-center">
                          <span>General</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="https://demo.uifort.com/bamburgh-react-crypto-application-material-ui-pro-demo"
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center">
                          <span>Crypto</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center">
                          <span>Messenger</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center">
                          <span>Commerce</span>
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
                          className="px-4 d-flex text-white-50 align-items-center"
                          disabled>
                          <span>Learning</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex text-white-50 align-items-center"
                          disabled>
                          <span>Monitoring</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex text-white-50 align-items-center"
                          disabled>
                          <span>Fleet Manager</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex text-white-50 align-items-center"
                          disabled>
                          <span>Banking</span>
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Blocks
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xxl">
                <Grid container spacing={0}>
                  <Grid item lg={6} className="z-over">
                    <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Marketing
                      </div>
                      <Grid container spacing={0}>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded mb-3 flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingCta"
                              className="d-flex align-items-center">
                              <span>Call to Action</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingFeatureSections"
                              className="d-flex align-items-center">
                              <span>Feature Sections</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingFooters"
                              className="d-flex align-items-center">
                              <span>Footers</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingHeaders"
                              className="d-flex align-items-center">
                              <span>Headers</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingHero"
                              className="d-flex align-items-center">
                              <span>Hero</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingIcons"
                              className="d-flex align-items-center">
                              <span>Icon Boxes</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingPartners"
                              className="d-flex align-items-center">
                              <span>Partners</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingPricingTables"
                              className="d-flex align-items-center">
                              <span>Pricing Tables</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/MarketingTestimonials"
                              className="d-flex align-items-center">
                              <span>Testimonials</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Elements
                      </div>
                      <Grid container spacing={0}>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsAvatars"
                              className="d-flex align-items-center">
                              <span>Avatars</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsBadges"
                              className="d-flex align-items-center">
                              <span>Badges</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsButtons"
                              className="d-flex align-items-center">
                              <span>Buttons</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsDropdowns"
                              className="d-flex align-items-center">
                              <span>Dropdowns</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsIcons"
                              className="d-flex align-items-center">
                              <span>Icons</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsNavigationMenus"
                              className="d-flex align-items-center">
                              <span>Navigation Menus</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsPagination"
                              className="d-flex align-items-center">
                              <span>Pagination</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsProgressBars"
                              className="d-flex align-items-center">
                              <span>Progress Bars</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsRatings"
                              className="d-flex align-items-center">
                              <span>Ratings</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsRibbons"
                              className="d-flex align-items-center">
                              <span>Ribbons</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsScrollable"
                              className="d-flex align-items-center">
                              <span>Scrollable Boxes</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsSearchBars"
                              className="d-flex align-items-center">
                              <span>Search Bars</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsTimelines"
                              className="d-flex align-items-center">
                              <span>Timelines</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/ElementsUtilitiesHelpers"
                              className="d-flex align-items-center">
                              <span>Utilities</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item lg={6} className="d-flex align-items-center">
                    <div className="shadow-sm-dark w-100 bg-deep-sky p-4 rounded-right">
                      <div className="px-2 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Data Display
                      </div>
                      <Grid container spacing={6}>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksChartsLarge"
                              className="px-2 text-white-50 d-flex align-items-center">
                              <span>Charts Large</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksChartsSmall"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Charts Small</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksComposed"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Composed Text</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksGrids"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Grids</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksIcons"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Icon Cards</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksImages"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Image Cards</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksListsLarge"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Lists Large</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksListsSmall"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Lists Small</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksNavigation"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Navigation</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksProfilesSmall"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Profile Cards</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksProgressCircular"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Progress Circular</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksProgressHorizontal"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Progress Horizontal</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksSparklinesLarge"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Sparklines Large</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksSparklinesSmall"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Sparklines Small</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/BlocksStatistics"
                              className="px-2 d-flex text-white-50 align-items-center">
                              <span>Statistics</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Others
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xxl">
                <Grid container spacing={0}>
                  <Grid item lg={6} className="z-over">
                    <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Widgets
                      </div>
                      <Grid container spacing={0}>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded mb-3 flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsAccordions"
                              className="d-flex align-items-center">
                              <span>Accordions</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsCalendars"
                              className="d-flex align-items-center">
                              <span>Calendars</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsCarousels"
                              className="d-flex align-items-center">
                              <span>Carousels</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsContextMenus"
                              className="d-flex align-items-center">
                              <span>Context Menus</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsCountUp"
                              className="d-flex align-items-center">
                              <span>Count Up</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsDragDrop"
                              className="d-flex align-items-center">
                              <span>Drag & Drop</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsGuidedTours"
                              className="d-flex align-items-center">
                              <span>Guided Tours</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsImageCrop"
                              className="d-flex align-items-center">
                              <span>Image Crop</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsLoadingIndicators"
                              className="d-flex align-items-center">
                              <span>Loading Indicators</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsModals"
                              className="d-flex align-items-center">
                              <span>Modal Dialogs</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsNotifications"
                              className="d-flex align-items-center">
                              <span>Notifications</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsPopovers"
                              className="d-flex align-items-center">
                              <span>Popovers</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsTabs"
                              className="d-flex align-items-center">
                              <span>Tabs</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsTooltips"
                              className="d-flex align-items-center">
                              <span>Tooltips</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="/template/WidgetsTreeView"
                              className="d-flex align-items-center">
                              <span>Tree View</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Charts
                      </div>
                      <Grid container spacing={0}>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="ChartsApex"
                              className="d-flex align-items-center">
                              <span>ApexCharts</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="Chartjs"
                              className="d-flex align-items-center">
                              <span>Chart.js</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List
                            component="div"
                            className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                            <ListItem
                              button
                              component={NavLink}
                              to="ChartsGauges"
                              className="d-flex align-items-center">
                              <span>Gauges</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                            <ListItem
                              button
                              component={NavLink}
                              to="ChartsSparklines"
                              className="d-flex align-items-center">
                              <span>Sparklines</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item lg={6} className="d-flex align-items-center">
                    <div className="shadow-sm-dark w-100 bg-second p-4 rounded-right">
                      <div className="nav-tabs-first tabs-animated tabs-animated-shadow">
                        <Tabs
                          className="nav-tabs-first"
                          value={value}
                          variant="fullWidth"
                          onChange={handleChange}>
                          <Tab label="Login" className="text-white" />
                          <Tab label="Register" className="text-white" />
                          <Tab label="Recover" className="text-white" />
                        </Tabs>
                      </div>
                      <div className="my-3">
                        <TabPanel value={value} index={0}>
                          <Grid container spacing={6}>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageLoginBasic"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Login Basic</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageLoginCover"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Login Cover</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageLoginIllustration"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Login Illustration</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageLoginOverlay"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Login Overlay</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Grid container spacing={6}>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRegisterBasic"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Register Basic</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRegisterCover"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Register Cover</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRegisterIllustration"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Register Illustration</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRegisterOverlay"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Register Overlay</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <Grid container spacing={6}>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRecoverBasic"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Recover Basic</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRecoverCover"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Recover Cover</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                            <Grid item lg={6}>
                              <List
                                component="div"
                                className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRecoverIllustration"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Recover Illustration</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  component={NavLink}
                                  to="/template/PageRecoverOverlay"
                                  className="px-2 text-white-50 d-flex align-items-center">
                                  <span>Recover Overlay</span>
                                  <FontAwesomeIcon
                                    icon={['fas', 'angle-right']}
                                    className="opacity-6 ml-auto"
                                  />
                                </ListItem>
                              </List>
                            </Grid>
                          </Grid>
                        </TabPanel>
                      </div>
                      <div className="bg-white-10 rounded p-3">
                        <Grid container spacing={6}>
                          <Grid item lg={6}>
                            <List
                              component="div"
                              className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/Tables"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Tables</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/Maps"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Maps</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/FormsControls"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Form Controls</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/PageInvoice"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Invoice</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                            </List>
                          </Grid>
                          <Grid item lg={6}>
                            <List
                              component="div"
                              className="nav-pills nav-transparent-alt nav-pills-rounded flex-column">
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/PageError404"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Error 404 Basic</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/PageError500"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Error 500 Cover</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/PageError505"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Error 505</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                              <ListItem
                                button
                                component={NavLink}
                                to="/template/PageAuthModals"
                                className="px-2 text-white-50 d-flex align-items-center">
                                <span>Auth Modals</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </ListItem>
                            </List>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Forms
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--lg">
                <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                  <Grid container spacing={0}>
                    <Grid item lg={6}>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsClipboard"
                          className="d-flex align-items-center">
                          <span>Clipboard</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsColorpicker"
                          className="d-flex align-items-center">
                          <span>Colorpicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsDatepicker"
                          className="d-flex align-items-center">
                          <span>Datepicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsDualListbox"
                          className="d-flex align-items-center">
                          <span>Dual Listbox</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsInputMask"
                          className="d-flex align-items-center">
                          <span>Input Mask</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsInputSelect"
                          className="d-flex align-items-center">
                          <span>Input Select</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsSlider"
                          className="d-flex align-items-center">
                          <span>Slider</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsSteppers"
                          className="d-flex align-items-center">
                          <span>Steppers</span>
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item lg={6}>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsTextareaAutosize"
                          className="d-flex align-items-center">
                          <span>Textarea Autosize</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsTimepicker"
                          className="d-flex align-items-center">
                          <span>Timepicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsToggleSwitch"
                          className="d-flex align-items-center">
                          <span>Toggle Switch</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsTypeahead"
                          className="d-flex align-items-center">
                          <span>Typeahead</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsUpload"
                          className="d-flex align-items-center">
                          <span>Upload</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsValidation"
                          className="d-flex align-items-center">
                          <span>Validation</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/template/FormsWysiwygEditor"
                          className="d-flex align-items-center">
                          <span>WYSIWYG Editors</span>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button
              href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-lg text-nowrap font-size-xs text-uppercase shadow-second-sm btn-danger font-weight-bold">
              Buy Now
            </Button>
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
            className="nav-collapsed-wrapper shadow-lg navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>
              <div className="p-3">
                <div className="px-4 text-uppercase py-2 text-primary font-weight-bold font-size-sm">
                  Dashboards
                </div>
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary mb-3 nav-pills-rounded flex-column">
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/DashboardMonitoring"
                    className="px-4 d-flex align-items-center">
                    <span>Monitoring</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/DashboardCommerce"
                    className="px-4 d-flex align-items-center">
                    <span>Commerce</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/DashboardAnalytics"
                    className="px-4 d-flex align-items-center">
                    <span>Analytics</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/DashboardStatistics"
                    className="px-4 d-flex align-items-center">
                    <span>Statistics</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                </List>
                <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                  Apps Pages
                </div>
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/PageCalendar"
                    className="px-4 d-flex align-items-center">
                    <span>Calendar</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/PageChat"
                    className="px-4 d-flex align-items-center">
                    <span>Chat</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/PageFileManager"
                    className="px-4 d-flex align-items-center">
                    <span>File Manager</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/PageProjects"
                    className="px-4 d-flex align-items-center">
                    <span>Projects</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/template/PageProfile"
                    className="px-4 d-flex align-items-center">
                    <span>Profile</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-right']}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                </List>
              </div>
              <div className="divider" />
              <div className="m-3">
                <div className="bg-primary px-3 py-4 rounded">
                  <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                    Individual Apps
                  </div>
                  <List
                    component="div"
                    className="nav-pills nav-transparent nav-pills-rounded flex-column">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      selected
                      className="px-4 text-white-50 d-flex align-items-center">
                      <span>General</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-crypto-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center">
                      <span>Crypto</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center">
                      <span>Messenger</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center">
                      <span>Commerce</span>
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
                      disabled
                      className="px-4 d-flex text-white-50 align-items-center">
                      <span>Learning</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled>
                      <span>Monitoring</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled>
                      <span>Fleet Manager</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled>
                      <span>Banking</span>
                    </ListItem>
                  </List>
                </div>
              </div>
              <div className="divider" />
              <div className="card-footer bg-secondary text-center p-3">
                <Button
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-lg text-nowrap font-size-sm text-uppercase shadow-second-sm btn-success">
                  Buy Now
                </Button>
              </div>
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
