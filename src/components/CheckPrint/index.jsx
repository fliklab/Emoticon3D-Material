import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./CheckPrint.scss";

class CheckPrint extends Component {
  render() {
    return (
      <div className='about-container md-grid mobile-fix'>
        <Card className='md-grid md-cell--8'>
          <div className='check-wrapper'>
            <img
              src='../assets/check_up1.png'
              className='check_up-img'
              alt='check print status upper part'
            />

            <h1>예약확인중</h1>
            <img
              src='../assets/loading.png'
              className='loading-img'
              alt='loading'
            />

            <div className='print_status_msg'>
              <p>메이커 스페이스의 관리자가</p>
              <p>신청하신 예약을 확인 중입니다.</p>
              <p>예약이 승인되면</p>
              <p>대기상태로 전환됩니다!</p>
            </div>

            {/* 하단바위치 */}
          </div>
        </Card>
      </div>
    );
  }
}

export default CheckPrint;
