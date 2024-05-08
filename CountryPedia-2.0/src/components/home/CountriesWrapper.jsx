import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllCountriesData } from "../../utils/api";
import ButtonContainer from "./ButtonContainer";
import CountryDiv from "./CountryDiv";
import IconsDescription from "./IconsDescription";

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

function CountriesWrapper() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [iconDescription, setIconDescription] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Fetch all countries on initial render
  useEffect(() => {
    handleAllCountries();
  }, []);

  const handleAllCountries = () => {
    setLoading(true);
    fetchAllCountriesData().then((data) => {
      //Sorting the countries alphabetically
      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setLoading(false);
      setCountries(sortedCountries);
      setSelectedCountries([]); // Reset selected countries
      setIconDescription(true);
    });
  };

  const handleRandomCountry = () => {
    fetchAllCountriesData().then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCountry = data[randomIndex];
      setCountries([randomCountry]);
      setSelectedCountries([randomCountry]); // Show country content directly
      setIconDescription(true);
    });
  };

  const handleGame = () => {
    navigate("/games");
  };

  const toggleCountryContent = (country) => {
    setSelectedCountries((prevSelectedCountries) => {
      if (prevSelectedCountries.includes(country)) {
        // Remove country if already selected
        return prevSelectedCountries.filter((c) => c !== country);
      } else {
        // Add country if not selected
        return [...prevSelectedCountries, country];
      }
    });
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
          {iconDescription && <IconsDescription />}
          {countries.map((country, index) => (
            <CountryDiv
              key={index}
              country={country}
              isOpen={selectedCountries.includes(country)}
              toggleCountryContent={toggleCountryContent}
            />
          ))}
          <button type="submit">
            {loading ? <>Loading..</> : <>All countries loaded</>}
          </button>
        </DisplayCountries>
      </ContentContainer>
    </>
  );
}

export default CountriesWrapper;
