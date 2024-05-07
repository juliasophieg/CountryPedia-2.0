import { useEffect, useState } from "react";
import { fetchAllCountriesData } from "../../utils/api";
import styled from "@emotion/styled";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import Result from "./Result";

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 2rem;
  padding-top: 5rem;
`;

function FlagQuizWrapper() {
  const [correctCountry, setCorrectCountry] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);

  // Function to shuffle answers array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //Generate 3 wrong answers and 1 correct answer
  const generateAnswers = () => {
    fetchAllCountriesData().then((data) => {
      const countries = data;
      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];
      setCorrectCountry(randomCountry);

      const wrongAnswers = [];
      while (wrongAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];
        if (
          randomCountry !== correctCountry &&
          !wrongAnswers.includes(randomCountry)
        ) {
          wrongAnswers.push(randomCountry);
        }
        setWrongAnswers(wrongAnswers);
      }

      const answers = [randomCountry, ...wrongAnswers]; // Combine correct and wrong answers
      setAnswers(shuffleArray(answers)); // Shuffle the combined array
    });
  };

  const handleAnswerClick = (answer) => {
    if (answer === correctCountry) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  };

  useEffect(() => {
    generateAnswers();
  }, []);

  return (
    <QuizContainer>
      <Question flag={correctCountry && correctCountry.flags.png} />
      {console.log(correctCountry && correctCountry.name.common)}
      <AnswerOptions answers={answers} handleAnswerClick={handleAnswerClick} />
    </QuizContainer>
  );
}

export default FlagQuizWrapper;
