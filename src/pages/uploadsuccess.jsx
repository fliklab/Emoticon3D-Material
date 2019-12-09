import React, { Component } from "react";
import Helmet from "react-helmet";
import Card from "react-md/lib/Cards/Card";
import { Button, SVGIcon } from "react-md";
import config from "../../data/SiteConfig";
import { Link } from "gatsby";
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
class Uploadsuccess extends Component {
  render() {
    return (
      <Layout title="업로드 완료">
        <div className="about-container">
          <Helmet>
            <title>{`uploadsuccess | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/uploadsuccess`} />
          </Helmet>
          <Card className="md-grid md-cell--8" style={styles.back}>
            <div>
              <h1>업로드 완료!</h1>
            </div>
            <img
              style={styles.im}
              src="../assets/reservsuccess.png"
              alt="check"
            />
            <Link to="/reserv">
              <Button flat primary swapTheming>
                바로 출력 예약하기
              </Button>
            </Link>
            <Link to="/upload">
              <Button flat primary swapTheming>
                계속해서 업로드하기
              </Button>
            </Link>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default Uploadsuccess;
