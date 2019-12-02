/** src/layout/index.jsx */
import React from 'react';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';
import { BottomNavigation, FontIcon } from 'react-md';

import Navigation from '../components/Navigation';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';

const Favorites = () => <div>안녕</div>;

const navLinks = [
  {
    label: '모델검색',
    icon: <FontIcon>search</FontIcon>
  },
  {
    label: '내3D모델',
    icon: <FontIcon>favorite</FontIcon>
  },
  {
    label: '예약하기',
    icon: <FontIcon>place</FontIcon>
  }
];

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name='description' content={config.siteDescription} />
          </Helmet>
          {children}
          <BottomNavigation
            links={navLinks}
            dynamic={}
            onNavChange={activeIndex => {
              //const title = {links[activeIndex]? links[activeIndex].label:"임의제목"};
              const title = '임의의제목';

              let children;
              switch (activeIndex) {
                case 1:
                  children = <Favorites key='about' />;
                  break;
                case 2:
                  children = <Favorites key='about' />;
                  break;
                default:
                  children = <Favorites key='about' />;
              }

              this.setState({ title, children });
            }}
          />
        </div>
      </Navigation>
    );
  }
}
