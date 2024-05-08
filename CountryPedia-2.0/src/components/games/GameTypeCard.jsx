import styled from "@emotion/styled";

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

function GameTypeCard({ onClick, gameName, gameCover, gameDescription }) {
  return (
    <GameCard onClick={onClick}>
      <GameCover src={gameCover}></GameCover>
      <div>
        <h2>{gameName}</h2>
        <p>{gameDescription}</p>
      </div>
    </GameCard>
  );
}

export default GameTypeCard;
