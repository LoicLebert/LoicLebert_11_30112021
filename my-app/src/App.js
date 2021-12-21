import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route }
 from "react-router-dom"
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import NotFoundPage from './pages/not-found'
import Header from './components/header'
import Footer from './components/footer'
import Housing from './pages/housing'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<IndexPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/housing/:id" element={<Housing />}/>
          <Route path="/*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
