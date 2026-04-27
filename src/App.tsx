// const Part = ({ part, ex }) => {
//   return (
//     <p>
//       {part} {ex}
//     </p>
//   );
// };
// const Content = ({ part }) => {
//   const { part1, ex1 } = part[0];
//   const { part2, ex2 } = part[1];
//   const { part3, ex3 } = part[2];
//   return (
//     <div>
//       <Part part={part1} ex={ex1} />
//       <Part part={part2} ex={ex2} />
//       <Part part={part3} ex={ex3} />
//     </div>
//   );
// };

// const Header = ({ course }) => {
//   return <h1>{course}</h1>;
// };

// const Total = ({ ex1, ex2, ex3 }) => {
//   return <p>{ex1 + ex2 + ex3}</p>;
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const part = [
//     {
//       part1: "Fundamentals of React",
//       ex1: 10,
//     },
//     {
//       part2: "Using props to pass data",
//       ex2: 7,
//     },
//     {
//       part3: "State of a component",
//       ex3: 14,
//     },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content part={part} />
//       <Total ex1={part[0].ex1} ex2={part[1].ex2} ex3={part[2].ex3} />
//     </div>
//   );
// };

// const Hello = (props) => {
//   const { name, age } = props;
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad:{bad}</p>
      <p>all :{good + neutral + bad}</p>
      <p>average:{(good + neutral + bad) / 3}</p>
      <p>positives:{good / 3}</p>
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button className="button" onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button className="button" onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button className="button" onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <h2>Statistics</h2>
      {good + bad + neutral > 0 ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
