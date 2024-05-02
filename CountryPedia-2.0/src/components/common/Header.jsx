import styled from "@emotion/styled";

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  @media (min-width: 700px) {
    font-size: 4rem;
  }
`;

function Header() {
  return (
    <>
      <HeaderComponent>
        <Logo>CountryPedia</Logo>
      </HeaderComponent>
    </>
  );
}

export default Header;
