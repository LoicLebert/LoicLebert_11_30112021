import React, { Component } from "react";
import { about } from "../data";
import Banner from "../components/banner";
import Dropdown from "../components/dropdown";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <header>
          <Banner imgSrc="./images/about_banner.jpg" imgAlt="About banner" />
        </header>
        <main>
          {about.map((elt) => (
            <Dropdown key={elt.id} title={elt.title} content={elt.content} />
          ))}
        </main>
      </div>
    );
  }
}

