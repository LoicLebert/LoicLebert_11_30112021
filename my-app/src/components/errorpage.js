import React, { Component } from "react";
import "../css/error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <div className="homepage">
        <main className="main-error">
          <span className="error">404</span>
          <span className="error-message">
            Oups! La page que vous demandez n'existe pas.
          </span>
          <Link to="/" title="Homepage">
            Retourner sur la page d'accueil
          </Link>
        </main>
      </div>
    );
  }
}