import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./CheckPrint3.scss";

function startTimer(total, display, display2) {
  let timer = total;
  let hours;
  let minutes;
  let seconds;
  let percents;
  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer / 60) % 60, 10);
    seconds = parseInt((timer % 60) % 60, 10);
    percents = parseInt(100 - (timer / 3600 / 5) * 100);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    percents = percents < 10 ? `0${percents}` : percents;
    // console.log(display);
    display.textContent = `${hours}:${minutes}:${seconds}`;
    display2.textContent = percents;

    // eslint-disable-next-line no-plusplus
    if (--timer < 0) {
      timer = total;
    }
  }, 1000);
}

class CheckPrint3 extends Component {
  componentDidMount() {
    const fiveHours = 60 * 5 * 60;

    setTimeout(() => {
      let display;
      let display2;
      if (
        this.document.querySelector("#time") &&
        this.document.querySelector("#per")
      ) {
        display = this.document.querySelector("#time");
        display2 = this.document.querySelector("#per");
        startTimer(fiveHours, display, display2);
      }
    }, 3000);
  }

  render() {
    return (
      <div className='about-container md-grid mobile-fix'>
        <Card className='md-grid md-cell--8'>
          <div className='check-wrapper'>
            <img
              src='../assets/check_up3.png'
              className='check_up-img'
              alt='check print status upper part'
            />

            <h1>모델 출력중</h1>
            <img
              src='../assets/printing.png'
              className='printing-img'
              alt='printing'
            />
            <div className='percents'>
              <span id='per' className='percents'>
                00
              </span>
              %
            </div>
            <div>
              <p>
                남은시간 :<span id='time'>05:00:00</span>
              </p>
              <p>0</p>
            </div>
            <div className='print_status_msg'>
              <p>3D프린터가 모델을 출력중입니다.</p>
              <p>출력이 완료되면 알려 드립니다.</p>
            </div>

            {/* 하단바위치 */}
          </div>
        </Card>
      </div>
    );
  }
}

export default CheckPrint3;
