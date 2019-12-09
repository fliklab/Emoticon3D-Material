import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import "./BottomNav.scss";

class BottomNav extends Component {
  render() {
    return (
      <footer className='footer footer-fixed'>
        <div className='boxes-container'>
          <Link to='/search'>
            <div className='button-group'>
              <img
                src='../assets/main1_64.png'
                alt='icon'
                className='button1'
              />
              <p className='button-label'>모델검색</p>
            </div>
          </Link>

          <Link to='/more'>
            <div className='button-group'>
              <img
                src='../assets/main2_64.png'
                alt='icon'
                className='button1'
              />
              <p className='button-label'>내3D모델</p>
            </div>
          </Link>

          <Link to='/reserv'>
            <div className='button-group'>
              <img
                src='../assets/main3_64.png'
                alt='icon'
                className='button1'
              />
              <p className='button-label'>예약하기</p>
            </div>
          </Link>

          <Link to='/check_print3'>
            <div className='button-group'>
              <img
                src='../assets/main4_64.png'
                alt='icon'
                className='button1'
              />
              <p className='button-label'>출력상태</p>
            </div>
          </Link>

          <Link to='/about2'>
            <div className='button-group'>
              <img
                src='../assets/main5_64.png'
                alt='icon'
                className='button1'
              />
              <p className='button-label'>더보기</p>
            </div>
          </Link>
        </div>
      </footer>
    );
  }
}

export default BottomNav;
