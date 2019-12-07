import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import './BottomNav.scss';

class BottomNav extends Component {
  render() {
    return (
      <footer className='footer footer-fixed'>
        <div className='boxes-container'>
          <Button
            className='user-button'
            icon='fa-home'
            secondary
            key='about'
            iconClassName='fa fa-home'
            href='/'
          >
            <p>반갑다</p>
          </Button>
          <Button
            className='user-button'
            icon='fa-beer'
            secondary
            key='menu1'
            iconClassName='fa fa-heart'
            href='/about'
            // href={`${config.pathPrefix}/about`}
          >
            <p>친구야</p>
          </Button>

          <Button
            className='user-button'
            icon='faHome' // ??
            secondary
            key='variable-md-colors-warn'
            iconClassName='fa fa-comment'
            href='/t3place'
          >
            <p>장소검색</p>
          </Button>
          <Button
            className='user-button'
            icon='faHome' // ??
            secondary
            key='menu3'
            iconClassName='fa fa-book'
            href='/about'
          >
            <p>제발좀</p>
          </Button>
          <Button
            className='user-button'
            icon='faHome' // ???
            secondary
            key='menu4'
            iconClassName='fa fa-tag'
            href='/about'
          >
            <p>쉬게해줘</p>
          </Button>
        </div>
      </footer>
    );
  }
}

export default BottomNav;
