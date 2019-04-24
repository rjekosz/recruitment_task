import React, { Component } from "react";
import {
  SingleContentWrapper,
  FeaturedPostTitle,
  CategoryTitle,
  SingleContent
} from "./StyledComponents";

import temp2_img from "./../img/temp2.jpg";

const content = {
  category: "US",
  title: "Powerty to Empowerment in Chicago",
  text_content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

export default SinglePost;
