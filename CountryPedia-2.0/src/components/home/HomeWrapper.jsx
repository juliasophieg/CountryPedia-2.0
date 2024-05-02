import styled from "@emotion/styled";
import CountriesWrapper from "./CountriesWrapper";

const MainContent = styled.div`
  height: 100svh;
  width: calc(100vw - 4rem);
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
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
