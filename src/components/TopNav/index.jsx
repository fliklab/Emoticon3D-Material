import React, { Component } from "react";
import { navigate } from "gatsby";
import Button from "react-md/lib/Buttons";
import "./TopNav.scss";

const styles = {
  fullPage: {
    display: "flex",
    flexDirection: "column"
  },
  topBlank: {
    width: "100%"
  },
  bottomBlank: {
    width: "100%"
  },
  content: {
    flex: 1,
    width: "480px"
  }
};

class TopNav extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    return (
      <div className='outerBox' style={styles.fullPage}>
        <div style={styles.topBlank} />
        <div style={styles.content}>{children}</div>
        <div style={styles.bottomBlank} />
        <div className='topnav-fixed'>
          <Button
            className='user-button'
            icon='fa-back'
            primary
            key='about'
            iconClassName='fa fa-arrow-left'
            href='/'
          />

          <p>{LocalTitle}</p>
          <Button
            className='user-button'
            icon='fa-home'
            primary
            key='about'
            iconClassName='fa fa-home'
            href='/main'
          />
        </div>
      </div>
    );
  }
}

export default TopNav;
