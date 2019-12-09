import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const styles = {
  pay: {
    display: "flex",
    direction: "column",
    justifyContent: "center",
    width: 510,
    height: 750,
    padding: "8px 25px"
  }
};
// const avatar = randomImage();
class Paymentpage extends Component {
  render() {
    return (
      <Layout title="결제">
        <div className="about-container">
          <Helmet>
            <title>{`payment | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/payment`} />
          </Helmet>
          <img style={styles.pay} src="../assets/cardpage.png" alt="pays" />
        </div>
      </Layout>
    );
  }
}

export default Paymentpage;
