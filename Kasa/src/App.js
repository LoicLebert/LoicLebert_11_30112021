import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import index from './Pages/index.js';
import about from './Pages/about.js';

function App() {
  return (
    <Router>
      <div>
        <header>

        </header>
      </div>
      <Routes>
        <Route path="/" exact component={index} />
        <Route path="/about" component={about} />
      </Routes>
    </Router>
  );
}

export default App;
