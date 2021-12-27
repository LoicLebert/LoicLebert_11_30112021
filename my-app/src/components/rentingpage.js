import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import "../css/rentingpage.css";
import { data } from "../data";
import Lightbox from "./lightbox.js";
import Tag from "./tag.js";
import Host from "./host.js";
import Rate from "./rating.js";
import Dropdown from "./dropdown";

export default class Renting extends Component {
  render() {
    const idParam = this.props.match.params.id;
    if (!data.some((elt) => elt.id === idParam)) return <Navigate to="/404" />;

    const currentRent = data.filter((elt) => elt.id === idParam)[0];

    const {
      title,
      rent,
      pictures,
      host,
      equipments,
      tags,
      rating,
      description,
    } = currentRent;

    return (
      <div className="rent-page">
        <header>
          <Lightbox images={pictures} />
        </header>

        <main className="rent-main">
          <header className="rent-header">
            <div>
              <h2>{title}</h2>
              <p>{rent}</p>
              {tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </div>
            <div className="rent-header-host">
              <Host name={host.name} img={host.picture} />
              <Rate fill={rating} />
            </div>
          </header>

          <section className="rent-details">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Equipements" content={equipments} />
          </section>
        </main>
      </div>
    );
  }
}