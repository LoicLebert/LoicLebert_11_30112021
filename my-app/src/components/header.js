import React, { Component } from 'react'
import { Link } from "react-router-dom"
import imgUrl from "../assets/images/logo_main.svg"
import "../css/header.css"

export default class Header extends Component {
  render() {
    return (
      <header className="header-main">
        <Link to="/">
          <img src={imgUrl} alt="Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </header>
    );
  }
}
