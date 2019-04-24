import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CategoryTitle, FeaturedPostTitle } from "./StyledComponents";
import temp_img from "./../img/temp.jpg";

const content = {
  category: "US",
  title: "Powerty to Empowerment in Chicago",
  text_content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

export default BlogList;
