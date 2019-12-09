import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import ToggleButtonCutom from "../ToggleButton";

import config from "../../../data/SiteConfig";
import "./PostInfo.scss";

const styles = {
  postInfoWrapper: {
    display: "flex",
    flexFlow: "rowWrap",
    justifyContent: "space-between",
    marginBottom: "30px",
    marginTop: "10px"
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  postButton: {
    display: "flex",
    width: "120px",
    height: "40px",
    backgroundColor: "#666",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "20px"
  },
  postButtonText: {
    color: "#fff",
    fontSize: 14
  }
};

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div style={styles.postInfoWrapper}>
        <div style={styles.column}>
          <CardTitle
            avatar={
              <Avatar icon={<FontIcon iconClassName='fa fa-calendar' />} />
            }
            title={`${moment(postNode.fields.date).format(config.dateFormat)}`}
            subtitle={`출력예상시간 : ${postNode.timeToRead}시간 이내`}
          />
          <Link
            className='category-link'
            to={`/categories/${_.kebabCase(post.category)}`}
          >
            <CardTitle
              avatar={
                <Avatar icon={<FontIcon iconClassName='fa fa-folder-open' />} />
              }
              title='MY 콜렉션'
              subtitle={post.category}
            />
          </Link>
        </div>
        <div style={styles.column}>
          <ToggleButtonCutom value='adfadf' />
          <div style={styles.postButton}>
            <p style={styles.postButtonText}>예약하기</p>
          </div>
          <div style={styles.postButton}>
            <p style={styles.postButtonText}>예약하기</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostInfo;
