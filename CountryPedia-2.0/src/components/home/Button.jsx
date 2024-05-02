import styled from "@emotion/styled";

const ButtonElement = styled.div`
  background-color: ${(props) => props.buttonColor};
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 700px) {
    width: 120px;
  }
  &:hover {
    background-color: ${(props) => props.buttonHoverColor};
    cursor: pointer;
    text-decoration: underline;
    transition: all 0.3s linear;
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
