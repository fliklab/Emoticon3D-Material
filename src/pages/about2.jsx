import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='더보기'>
        <div className='about-container'>
          <Helmet>
            <title>{`about2 | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/about2/`} />
          </Helmet>
          <div className='about-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <CardText>
                <h2>* 3D프린팅 과정</h2>
                <h4>1. 모델링파일 업로드 및 검색</h4>
                <h4>2. 3D프린터 장소 및 시간 예약</h4>
                <h4>3. 출력완료 까지 과정을 확인</h4>
                <div className='dividers__border-example'>
                  <div className='md-divider-border md-divider-border--top' />
                </div>
                <h2> * 3D모델링 파일의 종류</h2>
                <h4>1. obj파일</h4>
                <h4>2. stl파일</h4>
                <div className='dividers__border-example'>
                  <div className='md-divider-border md-divider-border--top' />
                </div>
                <h2> * 결제 환불 방법</h2>
                <h4>예약 취소 시 : 결제한 카드로 자동 환불 됩니다</h4>
                <div className='dividers__border-example'>
                  <div className='md-divider-border md-divider-border--top' />
                </div>
              </CardText>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AboutPage2;
