import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import CheckPrint from "../components/CheckPrint";
import config from "../../data/SiteConfig";

class CheckPrintPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <div className="about-container">
          <Helmet>
            <title>{`cp | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/checkPrint/`} />
          </Helmet>
          <CheckPrint />
        </div>
      </Layout>
    );
  }
}

export default CheckPrintPage;
