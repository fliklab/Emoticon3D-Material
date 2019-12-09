/** src/pages/index.jsx */
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

const styles = {
  fullPage: {
    display: "flex",
    flexDirection: "column"
  },
  topBlank: {
    width: "100%",
    height: "200px"
  },
  bottomBlank: {
    width: "100%",
    height: "70px"
  },
  content: {
    width: "100%",
    flex: 1
  }
};
class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title='Home'>
        <div className='index-container' style={styles.content}>
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel='canonical' href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
