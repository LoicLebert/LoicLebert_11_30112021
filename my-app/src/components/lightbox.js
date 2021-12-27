import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/lightbox.css";

export default class Lightbox extends Component {
  state = {
    currentPicture: 0,
  }

  goToPreviousImage = () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === 0
          ? this.props.images.length - 1
          : prevState.currentPicture - 1,
    }))
  }

  goToNextImage = () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === this.props.images.length - 1
          ? 0
          : prevState.currentPicture + 1,
    }))
  }

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;

    return (
      <div className="lightbox">
        <img src={images[currentImage]} alt={`location`} />

        {images.length > 1 && (
          <span
            className="fas fa-chevron-left"
            onClick={() => this.goToPreviousImage()}
          ></span>
        )}
        {images.length > 1 && (
          <span
            className="fas fa-chevron-right"
            onClick={() => this.goToNextImage()}
          ></span>
        )}
      </div>
    )
  }
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}