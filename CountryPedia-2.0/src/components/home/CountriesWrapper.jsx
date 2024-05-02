import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllCountriesData } from "../../utils/api";
import ButtonContainer from "./ButtonContainer";

import styled from "@emotion/styled";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`;

const DisplayCountries = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
  width: 100%;
`;

const IconDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--divs);
`;

const Country = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 3rem);
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--divs);
  @media (min-width: 700px) {
    padding: 2rem;
    width: calc(100% - 4rem);
  }
`;

const CountryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
  @media (min-width: 700px) {
    font-size: 2.5rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 700px) {
    max-width: 50%;
  }
`;
const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.2rem;
  @media (min-width: 700px) {
    font-size: 1.2rem;
  }
`;

const CountryImg = styled.img`
  border-radius: 8px;
  max-width: 400px;
  @media (min-width: 700px) {
    max-width: 250px;
  }
`;

function CountriesWrapper() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const handleAllCountries = () => {
    fetchAllCountriesData().then((data) => {
      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    });
  };

  const handleRandomCountry = () => {
    fetchAllCountriesData().then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCountry = [data[randomIndex]];
      setCountries(randomCountry);
    });
  };

  const handleGame = () => {
    navigate("/game");
  };

  return (
    <>
      <ContentContainer>
        <ButtonContainer
          handleAllCountries={handleAllCountries}
          handleRandomCountry={handleRandomCountry}
          handleGame={handleGame}
        />
        <DisplayCountries>
          <IconDescription>
            <TextRow>
              <img src="public/continent.svg" />
              <Text>= Continent</Text>
            </TextRow>
            <TextRow>
              <img src="public/capital.svg" />
              <Text>= Capital</Text>
            </TextRow>
            <TextRow>
              <img src="public/population.svg" />
              <Text>= Population</Text>
            </TextRow>
            <TextRow>
              <img src="public/language.svg" />
              <Text>= Language(s)</Text>
            </TextRow>
          </IconDescription>
          {countries.map((country, index) => (
            <Country key={index}>
              <Title>{country.name.common}</Title>
              <CountryContent>
                <TextWrapper>
                  <TextRow>
                    <img src="public/continent.svg" alt="Continent" />
                    <Text>{country.continents}</Text>
                  </TextRow>
                  <TextRow>
                    <img src="public/capital.svg" alt="Capital" />
                    {/* Check if country.languages exists, add comma if so */}
                    {country.capital && (
                      <Text>{Object.values(country.capital).join(", ")}</Text>
                    )}
                  </TextRow>
                  <TextRow>
                    <img src="public/population.svg" alt="Population" />
                    <Text>{country.population}</Text>
                  </TextRow>
                  <TextRow>
                    <img src="public/language.svg" alt="Language" />
                    {/* Check if country.languages exists, add comma if so */}
                    {country.languages && (
                      <Text>{Object.values(country.languages).join(", ")}</Text>
                    )}
                  </TextRow>
                </TextWrapper>
                <CountryImg src={country.flags.png} alt={country.name.common} />
              </CountryContent>
            </Country>
          ))}
        </DisplayCountries>
      </ContentContainer>
    </>
  );
}

export default CountriesWrapper;
