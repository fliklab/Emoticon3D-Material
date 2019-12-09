import React, { Component } from "react";
import Helmet from "react-helmet";
import Card from "react-md/lib/Cards/Card";
import { Button } from "react-md";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import Layout from "../layout";

const styles = {
  back: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  im: {
    width: 200,
    height: 180
  }
};
// const avatar = randomImage();
class Reservsuccess extends Component {
  render() {
    return (
      <Layout title="예약확인">
        <div className="about-container">
          <Helmet>
            <title>{`reservsuccess | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/reservsuccess`} />
          </Helmet>
          <Card className="md-grid md-cell--8" style={styles.back}>
            <div>
              <h1>예약 완료!</h1>
            </div>
            <img
              style={styles.im}
              src="../assets/reservsuccess.png"
              alt="check"
            />
            <Link to="/reservcheck">
              <Button flat primary swapTheming>
                예약내역 확인
              </Button>
            </Link>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default Reservsuccess;
