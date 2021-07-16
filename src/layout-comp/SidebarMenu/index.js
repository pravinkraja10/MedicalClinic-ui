import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import SidebarUserbox from '../SidebarUserbox';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import DevicesOtherTwoToneIcon from '@material-ui/icons/DevicesOtherTwoTone';

import NavItem from './NavItem';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    setNBAOpen(true);
    event.preventDefault();
  };

  const [otherPagesOpen, setOtherPagesOpen] = useState(false);
  const toggleOtherPages = (event) => {
    setOtherPagesOpen(!otherPagesOpen);
    event.preventDefault();
  };

  const [nbaOpen, setNBAOpen] = useState(false);
  const toggleNBA = (event) => {
    setNBAOpen(!nbaOpen);
    event.preventDefault();
  };

  const [collapsedLayoutOpen, setCollapsedLayoutOpen] = useState(false);
  const toggleCollapsedLayout = (event) => {
    setCollapsedLayoutOpen(!collapsedLayoutOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>Menu</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/overview">
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                Home
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleDashboard}
                className={clsx({ active: dashboardOpen })}>
                <span className="sidebar-icon">
                  <SportsBasketballIcon />
                </span>
                <span className="sidebar-item-label">Basket Ball</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={dashboardOpen}>
                <ul>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleNBA}
                      className={clsx('pr-0', { active: nbaOpen })}>
                      <span className="sidebar-item-label">
                        NBA
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={nbaOpen} style={{paddingLeft: 30}}>
                      <ul>
                        <NavItem
                          name="Overview"
                          route="/bb/nba/home"
                          onClick={toggleSidebarMobile}
                        />
                        <NavItem
                          name="Teams"
                          route="/bb/nba/teams"
                          onClick={toggleSidebarMobile}
                        />
                      {/*   <NavItem
                          name="Duals"
                          route="/bb/nba/duals"
                          onClick={toggleSidebarMobile}
                        /> */}
                        <NavItem
                          name="Players"
                          route="/bb/nba/players"
                          onClick={toggleSidebarMobile}
                        />
                        <NavItem
                          name="Bingo"
                          route="/bb/nba/bingo"
                          onClick={toggleSidebarMobile}
                        />
                      </ul>
                    </Collapse>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>Pages</span>
          </div>
          <ul>
            <li>
            <NavItem
                          name="Settings"
                          route="/bb/nba/settings"
                          onClick={toggleSidebarMobile}
                        />
              <a
                href="#/"
                onClick={toggleCollapsedLayout}
                className={clsx({ active: collapsedLayoutOpen })}>
                <span className="sidebar-icon">
                  <LibraryBooksTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Apps</span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleOtherPages}
                className={clsx({ active: otherPagesOpen })}>
                <span className="sidebar-icon">
                  <DevicesOtherTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Others</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={otherPagesOpen}>
                <ul className="pb-0">
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/template/PageProfile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/template/PageInvoice">
                      Invoice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/template/PageError404">
                      Error 404 Basic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/template/PageError500">
                      Error 500 Cover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/template/PageError505">
                      Error 505 Illustration
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,

  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
