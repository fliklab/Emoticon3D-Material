import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const styles = {
  log: {
    display: "flex",
    direction: "column",
    justifyContent: "center",
    width: 510,
    height: 750,
    padding: "8px 25px"
  }
};
class Login extends Component {
  render() {
    return (
      <Layout title="로그인">
        <div className="about-container">
          <Helmet>
            <title>{`login | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/login/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <Link to="/drive">
                <img
                  style={styles.log}
                  src="../assets/googlelogin.png"
                  alt="drive"
                />
              </Link>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Login;
