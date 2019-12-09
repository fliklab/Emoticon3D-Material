import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./Main.scss";

class MainPage extends Component {
  render() {
    return (
      <div className='about-container'>
        <Helmet>
          <title>{`main | ${config.siteTitle}`}</title>
          <link rel='canonical' href={`${config.siteUrl}/main/`} />
        </Helmet>
        <div>
          <Card className='md-grid md-cell--8'>
            <img
              src='../assets/mainicon_256x256.png'
              className='smallbutton'
              alt='icon'
            />
            <h3 className='smallbutton'>3D요</h3>
            <div className='main-wrapper'>
              <div className='sub-wrapper'>
                <div className='subsub-wrapper'>
                  <Link to='/search'>
                    <img
                      src='../assets/main_256x256.png'
                      alt='icon'
                      className='button1'
                    />
                    <p>모델검색</p>
                  </Link>
                </div>
                <div className='subsub-wrapper'>
                  <Link to='/reserv'>
                    <img
                      src='../assets/main2_256x256.png'
                      alt='icon'
                      className='button1'
                    />
                    <p>예약하기</p>
                  </Link>
                </div>
              </div>
              <div className='sub-wrapper'>
                <div className='subsub-wrapper'>
                  <Link to='/checkprint'>
                    <img
                      src='../assets/main3_256x256.png'
                      alt='icon'
                      className='button1'
                    />
                    <p>출력상태</p>
                  </Link>
                </div>
                <div className='subsub-wrapper'>
                  <Link to='/more'>
                    <img
                      src='../assets/Thumbnail1_256x256.png'
                      alt='icon'
                      className='button1'
                    />
                    <p>내3D모델</p>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
export default MainPage;
