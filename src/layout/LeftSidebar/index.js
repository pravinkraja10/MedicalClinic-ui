import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { connect, useSelector } from 'react-redux';

import { setUser } from '../../reducers/Auth';
import { Sidebar, HeaderCompact, Footer } from '../../layout-comp';
import storageService from 'services/StorageService';

const LeftSidebar = (props) => {
  const {
    children,
    sidebarToggle,
    sidebarToggleMobile,
    sidebarFixed,
    headerFixed,
    headerSearchHover,
    headerDrawerToggle,
    footerFixed,
    contentBackground
  } = props;

  useSelector((state) => console.log(state, state.user));

  useEffect(() => {
    const token = storageService.getToken();
    if (token !== '' || token !== 'null') {
      // Validate token and set the user
      console.log(token);
    }
  }, []);

  return (
    <>
      <div
        className={clsx('app-wrapper', contentBackground, {
          'header-drawer-open': headerDrawerToggle,
          'app-sidebar-collapsed': sidebarToggle,
          'app-sidebar-mobile-open': sidebarToggleMobile,
          'app-sidebar-fixed': sidebarFixed,
          'app-header-fixed': headerFixed,
          'app-footer-fixed': footerFixed,
          'search-wrapper-open': headerSearchHover
        })}>
        <div>
          <Sidebar />
        </div>
        <div className="app-main">
          <HeaderCompact />
          <div className="app-content">
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

LeftSidebar.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
  sidebarFixed: state.ThemeOptions.sidebarFixed,
  headerFixed: state.ThemeOptions.headerFixed,
  headerSearchHover: state.ThemeOptions.headerSearchHover,
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle,

  footerFixed: state.ThemeOptions.footerFixed,

  contentBackground: state.ThemeOptions.contentBackground
});

const mapDispatchToProps = (dispatch) => ({
  onSetUser: (user) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
