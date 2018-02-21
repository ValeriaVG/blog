import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Block from "../styled/Block";
import Header from "../components/Header";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="My fanciest site"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <Block>{children()}</Block>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
