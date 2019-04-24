import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  MainWrapper,
  Tags,
  SingleWrapper,
  ListWrapper
} from "./components/StyledComponents";

//components

import Header from "./components/Header";
import BlogList from "./components/BlogList";
import SinglePost from "./components/SinglePost";

import "./App.css";

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
      // console.log(prevState);
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
