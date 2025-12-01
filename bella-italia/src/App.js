import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import './App.css';

function App() {
  useEffect(() => {
    console.log("Willkommen bei Bella Italia!");
    return () => {
      console.log("Auf Wiedersehen von Bella Italia!");
    };
  }, []);

  return (
    <Router>
      <header>
        <h1>Bella Italia </h1>
        <nav>
          <ul>
            <li><Link to="/">Startseite</Link></li>
            <li><Link to="/menu">Speisekarte</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
