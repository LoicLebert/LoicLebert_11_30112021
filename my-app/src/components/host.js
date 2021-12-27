import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/host.css";

export default class Host extends Component {
  render() {
    const { name, img } = this.props;
    const firstname = name.split(" ")[0];
    const lastname = name.split(" ")[1];

    return (
      <div className="host">
        <p>
          <span>{firstname ? firstname : ""}</span>
          <span>{lastname ? lastname : ""}</span>
        </p>
        <img src={img} alt={name} />
      </div>
    )
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}