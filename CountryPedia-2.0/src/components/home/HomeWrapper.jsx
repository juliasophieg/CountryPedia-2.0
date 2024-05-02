import styled from "@emotion/styled";
import CountriesWrapper from "./CountriesWrapper";

const MainContent = styled.div`
  height: 100vh;
  width: calc(100vw - 4rem);
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  transition: all 0.3s linear;
`;

function HomeWrapper() {
  return (
    <>
      <MainContent>
        <CountriesWrapper />
      </MainContent>
    </>
  );
}

export default HomeWrapper;
