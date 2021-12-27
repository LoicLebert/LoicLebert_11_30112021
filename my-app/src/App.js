import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route }
 from "react-router-dom"
import "./css/app.css"
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import ErrorPage from './pages/error'
import RentingPage from './pages/renting'
import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<IndexPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/renting/:id" render={(props) => <RentingPage {...props} />} />
          <Route path="/*" element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    );
  }
}
