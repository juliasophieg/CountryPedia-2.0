import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import FlagQuiz from "./pages/FlagQuiz";
import CapitalQuest from "./pages/CapitalQuest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/flag-quiz" element={<FlagQuiz />} />
        <Route path="/games/capital-quest" element={<CapitalQuest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
