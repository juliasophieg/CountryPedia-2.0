import { useEffect, useState } from "react";
import { fetchAllCountriesData } from "../../../utils/api";
import styled from "@emotion/styled";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 2rem;
`;

function FlagQuizWrapper() {
  const [correctCountry, setCorrectCountry] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0); // State to track the score

  // Function to shuffle answers array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Generate 3 wrong answers and 1 correct answer
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

      const answers = [
        { name: randomCountry.name.common, isCorrect: true, isClicked: false },
        ...wrongAnswers.map((country) => ({
          name: country.name.common,
          isCorrect: false,
          isClicked: false,
        })),
      ]; // Combine correct and wrong answers
      setAnswers(shuffleArray(answers)); // Shuffle the combined array
    });
  };

  // Function to handle when an answer is clicked
  const handleAnswerClick = (answer) => {
    if (answer.isCorrect) {
      // If the clicked answer is correct, increase the score
      setScore(score + 1); // Increment the score
    }

    const updatedAnswers = answers.map((ans) =>
      ans.name === answer.name
        ? { ...ans, isClicked: true }
        : { ...ans, isClicked: false }
    );
    setAnswers(updatedAnswers);

    // After 0.5 seconds, generate a new question
    setTimeout(() => {
      generateAnswers();
    }, 500);
  };

  useEffect(() => {
    generateAnswers();
  }, []);

  return (
    <QuizContainer>
      <Question flag={correctCountry && correctCountry.flags.png} />
      {console.log(correctCountry && correctCountry.name.common)}
      <AnswerOptions answers={answers} handleAnswerClick={handleAnswerClick} />
      
      {/* Displaying the score */}
      <h3>Right Guesses: {score}</h3>
    </QuizContainer>
  );
}

export default FlagQuizWrapper;

