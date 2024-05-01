import styled from "@emotion/styled";
import Button from "./Button";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

function ButtonContainer({
  handleAllCountries,
  handleRandomCountry,
  handleGame,
}) {
  return (
    <>
      <Buttons>
        <Button
          buttonTitle="All countries"
          buttonColor="var(--pink)"
          buttonHoverColor="var(--hover-pink)"
          onClick={handleAllCountries}
        />
        <Button
          buttonTitle="Random country"
          buttonColor="var(--blue)"
          buttonHoverColor="var(--hover-blue)"
          onClick={handleRandomCountry}
        />
        <Button
          buttonTitle="Play a game"
          buttonColor="var(--yellow)"
          buttonHoverColor="var(--hover-yellow)"
          onClick={handleGame}
        />
      </Buttons>
    </>
  );
}

export default ButtonContainer;
