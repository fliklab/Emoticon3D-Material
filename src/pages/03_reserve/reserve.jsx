/** src/pages/Reserve.jsx */
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Helmet from 'react-helmet';
import UserLinks from '../../components/UserLinks';
import Layout from '../../layout';
import config from '../../../data/SiteConfig';
import './Reserve.scss';

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='Reserve'>
        <div className='Reserve-container'>
          <Helmet>
            <title>{`Reserve | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/reserve/`} />
          </Helmet>
          <div className='Reserve-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <div className='Reserve-wrapper'>
                <img
                  src={config.userAvatar}
                  className='Reserve-img'
                  alt={config.userName}
                />
                <CardText>
                  <p className='Reserve-text md-body-1'>글자글자</p>
                  <p className='Reserve-text md-body-1'>카드텍스트</p>
                  <p className='Reserve-text md-body-1'>
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
