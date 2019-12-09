import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./CheckPrint4.scss";

class CheckPrint extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="check-wrapper">
            <img
              src="../assets/check_up4.png"
              className="check_up-img"
              alt="check print status upper part"
            />

            <h1>출력 완료</h1>
            <img
              src="../assets/printed.png"
              className="printed-img"
              alt="printed"
            />
            
            <div className="print_status_msg">
              <p><u>Batman Tumbler Car</u> 파일의</p>
              <p>출력이 완료 되었습니다!</p>
              <p>출력장소 : <u>이모티콘 메이커스페이스</u>에서</p>
              <p>출력물을 찾아가세요!</p>
            </div>

            {/* 하단바위치 */}
          </div>
        </Card>
      </div>
    );
  }
}

export default CheckPrint;
