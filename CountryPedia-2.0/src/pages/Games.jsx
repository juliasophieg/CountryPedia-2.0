import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/common/Header";
import GamesWrapper from "../components/games/GamesWrapper";
import styled from "@emotion/styled";

// Wrapper for centering the Home button
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; // This ensures the button is vertically centered
`;

// Styling for the home button
const HomeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

function Games() {
  return (
    <>
      <Header />
      <CenteredContainer>
        <Link to="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </CenteredContainer>
      <GamesWrapper />
    </>
  );
}

export default Games;
