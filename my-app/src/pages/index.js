import React, { Component } from "react";
import IndexContent from "../components/index/index.tsx"
import HousingSection from "../components/index/housing-section"

export default class IndexPage extends Component {
    render() {
      return (
          <main className="px-4 xl:mx-auto max-w-screen-xl">
            <IndexContent />
            <HousingSection />
            </main>
      );
    }
  }