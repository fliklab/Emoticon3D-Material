import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { randomImage } from "utils/random";

import { Avatar, Card, CardTitle, CardText } from 'react-md';
import Layout from '../layout';
import config from '../../data/SiteConfig';

// 태그 안에서 (예)<div style = {styles._____}> 로 지정해주면 됩니다..
const styles = {
  card: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-between',
    // height: 160,
    padding: '0em 0em 0.8em 0.8em', //위 오른쪽 아래 왼쪽(시계방향)
    borderBottom: '1px solid lightgray',
    margin: '0 0 0 0'
  },
  leftBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  title: {
    paddingTop: '0em',
    paddingBottom: '0em',
    fontSize: '1.1em',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '2.8em',
    whiteSpace: 'normal',
    boxOrient: 'hrizontal',
    display: 'box'

    /* 여러 줄 자르기 추가 스타일 */
    // white-space: normal;
    // line-height: 1.2;
    // height: 3.6em;
    // text-align: left;
    // word-wrap:  break-word;
    // display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
  },
  thumbnail: {
    display: 'flex',
    direction: 'row',
    alignSelf: 'center',
    marginLeft: 4,
    width: 84,
    height: 84
  },
  info: {
    display: 'flex',
    direction: 'column',
    textAlign: 'left',
    height: 10
  }
};

const PlaceCard = props => {
  const { name, info1, info2, img } = props;
  return (
    <div style={styles.card}>
      <div style={styles.leftBox}>
        <p style={styles.title}>{name}</p>
        <div>
          <p style={styles.info}>{info1}</p>
          <p style={styles.info}>{info2}</p>
        </div>
      </div>
      <img style={styles.thumbnail} alt='장소 이미지' src={img} />
    </div>
  );
};

// const avatar = randomImage();
class Place extends Component {
  render() {
    return (
      <Layout title='⬅︎ 장소 검색'>
        <div className='about-container'>
          <Helmet>
            <title>{`place | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/t3place`} />
          </Helmet>
          <div>
            <Card className='md-grid md-cell--8'>
              <PlaceCard
                name='이모티콘3D 메이커스페이스'
                info1='유료∙교육 필요'
                info2='동작구'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='팹랩서울'
                info1='유료∙info1'
                info2='종로구'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='디지털대장간'
                info1='유료∙info1'
                info2='용산구'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='새 장소'
                info1='유료∙교육 필수 '
                info2='지역'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='새 장소'
                info1='유료∙교육 필수 '
                info2='지역'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='새 장소'
                info1='유료∙교육 필수 '
                info2='지역'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
              <PlaceCard
                name='새 장소'
                info1='유료∙교육 필수 '
                info2='지역'
                img='http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg'
              />
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Place;
