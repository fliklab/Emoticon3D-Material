/** src/layout/index.jsx */
import React from 'react';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';
import { Link } from '@reach/router';
import { FontIcon } from 'react-md';

import Navigation from '../components/Navigation';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';

import BottomNav from '../components/BottomNav';

const TO_PREFIX = '';

// navLinks에 항목을 추가/수정하면 하단바에도 적용됩니다.
const navLinks = [
  {
    label: '모델검색',
    icon: <FontIcon>search</FontIcon>,
    to: TO_PREFIX,
    component: Link
  },
  {
    label: '내3D모델',
    icon: <FontIcon>place</FontIcon>,
    to: `${TO_PREFIX}/about`,
    component: Link
  },
  {
    label: '예약하기',
    icon: <FontIcon>home</FontIcon>,
    to: `${TO_PREFIX}/about2`,
    component: Link
  },
  {
    label: '예약하기',
    icon: <FontIcon>person</FontIcon>,
    to: `${TO_PREFIX}/about2`,
    component: Link
  },
  {
    label: '예약하기',
    icon: <FontIcon>comment</FontIcon>,
    to: `${TO_PREFIX}/about2`,
    component: Link
  }
];
//아이콘은 여기서 https://fontawesome.com/icons?d=gallery

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
          <BottomNav />
        </div>
      </Navigation>
    );
  }
}
