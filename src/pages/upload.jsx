import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./Upload.scss";

class UploadPage extends Component {
  render() {
    return (
      <Layout title="업로드">
        <div className="about-container">
          <Helmet>
            <title>{`upload | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/upload/`} />
          </Helmet>
          <div>
            <Card className="md-grid md-cell--8">
              <div className="main-wrapper">
                <div className="sub-wrapper">
                  <div className="subsub-wrapper">
                    <Link to="/login">
                      <img src="../assets/googledrive.png" alt="drive" />
                    </Link>
                  </div>
                  <div className="subsub-wrapper">
                    <Link to="/login">
                      <img src="../assets/onedrive.png" alt="drive" />
                    </Link>
                  </div>
                </div>
                <div className="sub-wrapper">
                  <div className="subsub-wrapper">
                    <Link to="/login">
                      <img src="../assets/dropbox.png" alt="drive" />
                    </Link>
                  </div>
                  <div className="subsub-wrapper">
                    <Link to="drive">
                      <img src="../assets/gigiupload.png" alt="drive" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default UploadPage;
