import React, { Component } from "react";
import "../css/banner.css";
import imgUrl from "../assets/images/home_banner.png"

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-cover"></div>
        <img src={imgUrl} alt="Home Banner" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    )
  }
}