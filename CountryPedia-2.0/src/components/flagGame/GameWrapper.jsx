import React, { useState, useEffect } from "react";
import { fetchAllCountriesData } from "../../utils/api";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
import Result from "./Result";

import styled from "@emotion/styled";

const MainContent = styled.div`
  width: calc(100vw - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  transition: all 0.3s linear;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  gap: 3rem;
`;

const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: auto;
  width: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const GameCover = styled.div`
  background-color: ${(props) => props.gameCoverColor};
  padding: 1rem;
  border-radius: 8px 8px 2px 2px;
  height: 200px;
  width: calc(100% - 2rem);
`;

function GameWrapper() {
  return (
    <>
      <MainContent>
        <CardsContainer>
          <GameCard>
            <GameCover gameCoverColor="#f2f8ff"></GameCover>
            <h2>Guess the flag</h2>
          </GameCard>
          <GameCard>
            <GameCover gameCoverColor="#f2f8ff"></GameCover>
            <h2>Guess the capital</h2>
          </GameCard>
        </CardsContainer>
      </MainContent>
    </>
  );
}

export default GameWrapper;
