import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import "./TopNav.scss";

class TopNav extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    return (
      <div className='outerBox'>
        <div className='topnav-fixed'>
          <Button
            className='user-button'
            icon='fa-back'
            secondary
            key='about'
            iconClassName='fa fa-arrow-left'
            href={`${config.pathPrefix}`}
          />
          <p>{LocalTitle}</p>
          <Button
            className='user-button'
            icon='fa-home'
            secondary
            key='about'
            iconClassName='fa fa-home'
            href={`${config.pathPrefix}`}
          />
        </div>
        <div className='topnav-main-container'>{children}</div>
      </div>
    );
  }
}

export default TopNav;
