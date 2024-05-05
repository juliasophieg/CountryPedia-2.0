import styled from "@emotion/styled";
import Button from "./Button";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media (min-width: 700px) {
    flex-direction: row;
    max-width: 600px;
    justify-content: space-between;
    gap: 1.5m;
  }
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
          buttonTitle="Games"
          buttonColor="var(--yellow)"
          buttonHoverColor="var(--hover-yellow)"
          onClick={handleGame}
        />
      </Buttons>
    </>
  );
}

export default ButtonContainer;
