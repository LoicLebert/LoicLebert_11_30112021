import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/tag.css";

export default class Tag extends Component {
  render() {
    const { content } = this.props;

    return <div className="tag">{content}</div>;
  }
}

Tag.propTypes = {
  content: PropTypes.string.isRequired,
}