import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// styles

import "./App.css";
import styled from "styled-components";

//images

import temp_img from "./img/temp.jpg";
import temp2_img from "./img/temp2.jpg";
import logo from "./img/logo.png";

//icons

import { MdMenu, MdShare, MdSearch, MdKeyboardBackspace } from "react-icons/md";

// content

const content = {
  category: "US",
  title: "Powerty to Empowerment in Chicago",
  text_content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const Header = props => {
  if (props.status === true) {
    return (
      <div className="header-wrapper">
        <Link to="/">
          <span className="back-btn" onClick={props.action}>
            <MdKeyboardBackspace />
          </span>
        </Link>
        <img src={logo} alt="logo" />
        <span className="search-share-btn">
          <MdShare />
        </span>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper">
        <span>
          <MdMenu />
        </span>
        <img src={logo} alt="logo" />
        <span className="search-share-btn">
          <MdSearch />
        </span>
      </div>
    );
  }
};

const BlogList = props => {
  return (
    <>
      <Link to="/article">
        <img src={temp_img} alt="logo" />
        <CategoryTitle>{content.category}</CategoryTitle>
        <FeaturedPostTitle>{content.title}</FeaturedPostTitle>
      </Link>
    </>
  );
};

class SinglePost extends Component {
  render() {
    return (
      <div className="blog-item">
        <img alt="temp" src={temp2_img} />
        <SingleContentWrapper>
          <CategoryTitle>{content.category}</CategoryTitle>
          <FeaturedPostTitle>{content.title}</FeaturedPostTitle>
          <SingleContent>{content.text_content}</SingleContent>
        </SingleContentWrapper>
      </div>
    );
  }
  componentWillMount() {
    this.props.action();
  }
}

// styled components

const MainWrapper = styled.div`
  width: 420px;
  height: 85vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  overflow-x: hidden;
`;
const ListWrapper = styled.div`
  padding: 0 20px 20px;
  overflow: auto;
`;
const SingleWrapper = styled.div`
  padding: 0 0 20px;
`;
const SingleContentWrapper = styled.div`
  padding: 0 20px 20px;
`;
const SingleContent = styled.p`
  color: lightgrey;
  line-height: 1.3em;
  margin-top: 20px;
  font-family: "Lato", sans-serif;
`;

const Tags = styled.ul`
  padding: 0 20px 20px;
  list-style: none;
  overflow: auto;
  white-space: nowrap;
  > li {
    display: inline-block;
    line-height: 0.9em;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 0.9em;
    border-right: 1px dashed lightgrey;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  }
`;
const CategoryTitle = styled.span`
  font-size: 0.7em;
  font-weight: 600;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const FeaturedPostTitle = styled.h3`
  font-size: 1.5em;
  line-height: 1.2em;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSingle: false
    };
    this.handleRedirectStateChange = this.handleRedirectStateChange.bind(this);
  }

  handleRedirectStateChange() {
    this.setState(prevState => {
      console.log(prevState);
      return {
        isSingle: !prevState.isSingle
      };
    });
  }

  render() {
    return (
      <MainWrapper>
        <Router>
          <Header
            status={this.state.isSingle}
            action={this.handleRedirectStateChange}
          />
          <Route
            path="/"
            exact
            render={() => (
              <Tags>
                <li>#tag1</li>
                <li>#tag2</li>
                <li>#tag3</li>
                <li>#tag4</li>
                <li>#tag5</li>
                <li>#tag5</li>
                <li>#tag5</li>
                <li>#tag5</li>
                <li>#tag5</li>
                <li>#tag5</li>
              </Tags>
            )}
          />
          <ListWrapper>
            <Route path="/" exact render={() => <BlogList />} />
          </ListWrapper>
          <SingleWrapper>
            <Route
              path="/article"
              render={() => (
                <SinglePost
                  status={this.state.isSingle}
                  action={this.handleRedirectStateChange}
                />
              )}
            />
          </SingleWrapper>
        </Router>
      </MainWrapper>
    );
  }
}

export default Main;
