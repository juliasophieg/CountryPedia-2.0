import React, { useState, useEffect } from "react";
import GameTypeCard from "./GameTypeCard";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

const MainContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  transition: all 0.3s linear;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  gap: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

function GamesWrapper() {
  const navigate = useNavigate();
  const FlagGameLink = () => {
    navigate("/games/flag-quiz");
  };
  const CapitalGameLink = () => {
    navigate("/games/capital-quest");
  };

  return (
    <>
      <MainContent>
        <CardsContainer>
          <GameTypeCard
            onClick={FlagGameLink}
            gameCover="/images/gameimg5.avif"
            gameName="Flag Quiz Challenge"
            gameDescription=" Test your global knowledge! With just a glance, can you
          correctly match the flag to its country? Sharpen your geography
          skills and become the ultimate flag master!"
          />
          <GameTypeCard
            onClick={CapitalGameLink}
            gameCover="/images/gameimg3.jpeg"
            gameName="Capital Quest (Coming soon!)"
            gameDescription="Embark on a journey around the world! In this thrilling game,
          players are challenged to match countries with their capitals.
          Explore the globe and test your knowledge of world capitals."
          />
        </CardsContainer>
      </MainContent>
    </>
  );
}

export default GamesWrapper;
