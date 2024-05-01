import styled from "@emotion/styled";

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
`;

const Menu = styled.div`
  width: 24px;
  height: 20px;
  border-radius: 2px;
  background-color: var(--text-color);
`;

function Header() {
  return (
    <>
      <HeaderComponent>
        <Logo>CountryPedia</Logo>
        <Menu />
      </HeaderComponent>
    </>
  );
}

export default Header;
