import React, { useState, useEffect } from "react";
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

const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: auto;
  width: 40%;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    color: #737dd6;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    max-width: 633px;
    width: 100%;
    align-items: flex-start;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const GameCover = styled.img`
  border-radius: 8px 8px 2px 2px;
  width: 100%;
  height: 280px;
  opacity: 0.8;
  @media (max-width: 800px) {
    width: 33%;
    border-radius: 8px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

function GameWrapper() {
  const navigate = useNavigate();
  const FlagGameLink = () => {
    navigate("/game/flag-quiz");
  };
  const CapitalGameLink = () => {
    navigate("/game/capital-quest");
  };

  return (
    <>
      <MainContent>
        <CardsContainer>
          <GameCard onClick={FlagGameLink}>
            <GameCover src="/images/gameimg5.avif"></GameCover>
            <div>
              <h2>Flag Quiz Challenge</h2>
              <p>
                Test your global knowledge! With just a glance, can you
                correctly match the flag to its country? Sharpen your geography
                skills and become the ultimate flag master!
              </p>
            </div>
          </GameCard>
          <GameCard onClick={CapitalGameLink}>
            <GameCover src="/images/gameimg3.jpeg"></GameCover>
            <div>
              <h2>Capital Quest</h2>
              <p>
                Embark on a journey around the world! In this thrilling game,
                players are challenged to match countries with their capitals.
                Explore the globe and test your knowledge of world capitals.
              </p>
            </div>
          </GameCard>
        </CardsContainer>
      </MainContent>
    </>
  );
}

export default GameWrapper;
