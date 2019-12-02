/** src/pages/about2.jsx */
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Helmet from 'react-helmet';
import UserLinks from '../components/UserLinks';

import Layout from '../layout';
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
          <div className='about-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <div className='about-wrapper'>
                <img
                  src={config.userAvatar}
                  className='about-img'
                  alt={config.userName}
                />
                <CardText>
                  <p className='about-text md-body-1'>글자글자</p>
                  <p className='about-text md-body-1'>카드텍스트</p>
                  <p className='about-text md-body-1'>
                    {config.userDescription}
                  </p>
                </CardText>
                <UserLinks labeled config={config} />
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage2;
