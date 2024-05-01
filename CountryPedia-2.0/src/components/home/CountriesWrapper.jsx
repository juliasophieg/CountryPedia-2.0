import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllCountriesData } from "../../utils/api";
import ButtonContainer from "./ButtonContainer";

import styled from "@emotion/styled";

const DisplayCountries = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid lightgray;
`;

const Country = styled.div`
  display: flex;
  padding: 1rem 2rem;
  background-color: var(--divs);
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
      <ButtonContainer
        handleAllCountries={handleAllCountries}
        handleRandomCountry={handleRandomCountry}
        handleGame={handleGame}
      />
      <DisplayCountries>
        {countries.map((country, index) => (
          <Country key={index}>{country.name.common}</Country>
        ))}
      </DisplayCountries>
    </>
  );
}

export default CountriesWrapper;
