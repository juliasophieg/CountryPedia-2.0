import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlagGame from "./pages/FlagGame";
import FlagQuiz from "./pages/FlagQuiz";
import CapitalQuest from "./pages/CapitalQuest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<FlagGame />} />
        <Route path="/game/flag-quiz" element={<FlagQuiz />} />
        <Route path="/game/capital-quest" element={<CapitalQuest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
