import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/thumb.css";

export default class Thumb extends Component {
  render() {
    const { title, src, id } = this.props;

    return (
      <div className="thumb">
        <Link to={`/renting/${id}`} title={title} className="thumb-link">
          <div className="thumb-cover"></div>
          <img src={src} alt={title} />
          <h2>{title}</h2>
        </Link>
      </div>
    )
  }
}

Thumb.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}