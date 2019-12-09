import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
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
class Reservcheck extends Component {
  render() {
    return (
      <Layout title="결제">
        <div className="about-container">
          <Helmet>
            <title>{`reservcheck | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/reservcheck`} />
          </Helmet>
          <Link to="/reservsuccess">
            <img
              style={styles.pay}
              src="../assets/reservcheck.PNG"
              alt="pays"
            />
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Reservcheck;
