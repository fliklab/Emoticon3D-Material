import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import { Button } from 'react-md';
import Toolbar from '../ToolbarActions';

import Footer from '../Footer';
import GetNavList from './NavList';
import './Navigation.scss';

const rightIcons = [
  <Button key='home' icon>
    home
  </Button>
];

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== 'About';
    return (
      <NavigationDrawer
        drawerTitle={config.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName='main-content'
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes}
        tabletDrawerType={NavigationDrawer.DrawerTypes}
        desktopDrawerType={NavigationDrawer.DrawerTypes}
        toolbarActions={rightIcons}
      >
        <div className='main-container'>{children}</div>
      </NavigationDrawer>
    );
  }
}

export default Navigation;
