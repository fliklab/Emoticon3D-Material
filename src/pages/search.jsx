import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import { TextField } from "react-md";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class Search extends Component {
  render() {
    return (
      <Layout title='모델검색'>
        <div className='about-container'>
          <Helmet>
            <title>{`search | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/search/`} />
          </Helmet>
          <div className='about-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <div>
                <CardText>
                  <p className='md-title-3'> 3D모델 검색 </p>
                  <p className='md-title-3'>나에게 필요한 모델을 검색하세요!</p>
                  <div className='md-grid'>
                    <TextField
                      id='floating-center-title'
                      label='키워드 입력'
                      lineDirection='center'
                      placeholder='  '
                      className='md-cell md-cell--bottom'
                    />
                    <Link to={"/tags/car"}>
                      <Button flat primary iconClassName='fa fa-search' />
                    </Link>
                  </div>
                  <Link to={"/tags/장난감"}>
                    <Button flat primary iconClassName='fa fa-dot-circle-o'>
                      장난감
                    </Button>
                  </Link>
                  <Link to={"/tags/미니어쳐"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      미니어쳐
                    </Button>
                  </Link>
                  <Link to={"/tags/공학적"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      공학적
                    </Button>
                  </Link>
                  <Link to={"/tags/예술적"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      예술적
                    </Button>
                  </Link>
                  <Link to={"/tags/기계부품"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      기계부품
                    </Button>
                  </Link>
                  <Link to={"/tags/자동차부속품"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      자동차부속품
                    </Button>
                  </Link>
                  <Link to={"/tags/실용"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      실용
                    </Button>
                  </Link>
                  <Link to={"/tags/전자공학"}>
                    <Button flat secondary iconClassName='fa fa-dot-circle-o'>
                      전자공학
                    </Button>
                  </Link>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Search;
