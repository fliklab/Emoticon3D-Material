/** src/layout/index.jsx */
import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import { Link } from "@reach/router";
import { FontIcon } from "react-md";

import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav/index";

const styles = {
  topBlank: {
    height: "10px"
  },
  bottomBlank: {
    height: "70px"
  }
};

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <TopNav config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name='description' content={config.siteDescription} />
          </Helmet>
          <div style={styles.topBlank} />
          {children}
          <div style={styles.bottomBlank} />
          <BottomNav />
        </div>
      </TopNav>
    );
  }
}
