import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/rating.css";

export default class Rating extends Component {
  render() {
    const { fill } = this.props;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      i < fill
        ? stars.push("fas fa-star fill")
        : stars.push("fas fa-star");
    }

    return (
      <div className="rating">
        {stars.map((star, index) => (
          <span key={index} className={star}></span>
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  fill: PropTypes.string.isRequired,
};