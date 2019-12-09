import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { Link } from "gatsby";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class more extends Component {
  render() {
    return (
      <Layout title='내 3모델'>
        <div className='about-container'>
          <Helmet>
            <title>{`more | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/more/`} />
          </Helmet>
          <div className='about-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <CardText>
                <p className='md-title-3'> 저장된 모델이 없습니다 </p>
                <Link to='/search'>
                  <img src='../assets/searchicon.png' alt='drive' />
                </Link>

                <Link to='/upload'>
                  <img src='../assets/uploadicon.png' alt='drive' />
                </Link>
              </CardText>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default more;
