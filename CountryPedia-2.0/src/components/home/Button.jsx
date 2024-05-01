import styled from "@emotion/styled";

const ButtonElement = styled.div`
  background-color: ${(props) => props.buttonColor};
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  &:hover {
    background-color: ${(props) => props.buttonHoverColor};
    cursor: pointer;
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
