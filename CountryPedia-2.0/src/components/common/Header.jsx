import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

function Header() {
  const navigate = useNavigate();
  const HeaderLink = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderComponent>
        <Logo onClick={HeaderLink}>CountryPedia</Logo>
      </HeaderComponent>
    </>
  );
}

export default Header;
