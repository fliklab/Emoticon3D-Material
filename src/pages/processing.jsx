import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Button from "react-md/lib/Buttons";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const styles = {
  fullCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  processing: {
    flex: 1,
    width: "100%",
    overflow: "hidden"
  }
};

class more extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='내 3모델'>
        <div className='about-container'>
          <Helmet>
            <title>{`more | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/more/`} />
          </Helmet>
          <div className='about-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8' style={styles.fullCard}>
              <p>예약하기</p>
              <iframe
                title='reserve'
                src='https://editor.p5js.org/Flik/embed/2cVseUm1E'
                style={styles.processing}
              />
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default more;
