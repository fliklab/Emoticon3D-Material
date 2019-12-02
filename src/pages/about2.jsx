import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='About2'>
        <div className='about-container'>
          <Helmet>
            <title>{`About2 | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/about2/`} />
          </Helmet>
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage2;
