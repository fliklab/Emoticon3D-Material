import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import CheckPrint from "../components/CheckPrint3";
import config from "../../data/SiteConfig";
import Card from "react-md/lib/Cards/Card";

class CheckPrintPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='About'>
        <div className='about-container'>
          <Helmet>
            <title>{`cp | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/checkPrint/`} />
          </Helmet>
          <CheckPrint />
        </div>
      </Layout>
    );
  }
}

export default CheckPrintPage;
