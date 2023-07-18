import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Converter from "./pages/Converter";
import ConverterMain from "./pages/ConverterMain";
import Database from "./pages/Database";
import DatabaseElement from "./pages/DatabaseElement";
import Substitution from "./pages/Substitution";
import Navigation from "./components/Navigation";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/converter" element={<ConverterMain />}/>
        <Route path="/converter/:profileType" element={<Converter />}/>
        <Route path="/database/:profileType" element={<Database />}/>
        <Route path="/database/:profileType/:profileId" element={<DatabaseElement />}/>
        <Route path="/substitution" element={<Substitution />}/>
        <Route path="*" element={<Homepage />}/>
      </Routes>
    <Copyright />
    </Router>
  )
}

export default App;
