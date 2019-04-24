import React, { Component } from "react";
import styled from "styled-components";

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

export {
  MainWrapper,
  ListWrapper,
  SingleWrapper,
  SingleContentWrapper,
  SingleContent,
  Tags,
  CategoryTitle,
  FeaturedPostTitle
};
