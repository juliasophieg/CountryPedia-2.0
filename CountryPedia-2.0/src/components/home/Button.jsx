import styled from "@emotion/styled";

const ButtonElement = styled.div`
  background-color: ${(props) => props.buttonColor};
  border-radius: 10px;
  padding: 1rem 2rem;
  width: 180px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  transition: all 0.1s linear;

  @media (max-width: 699px) {
    width: unset;
  }
  &:hover {
    background-color: ${(props) => props.buttonHoverColor};
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 5px;
    transform: scale(1.02);
  }
`;

function Button({ buttonTitle, buttonColor, buttonHoverColor, onClick }) {
  return (
    <>
      <ButtonElement
        buttonColor={buttonColor}
        buttonHoverColor={buttonHoverColor}
        onClick={onClick}
      >
        {buttonTitle}
      </ButtonElement>
    </>
  );
}

export default Button;
