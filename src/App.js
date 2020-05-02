import React from "react";
import PropTypes from "prop-types";

const membersOfFlex = [
  {
    id: 1,
    name: "장민석",
    male: true,
    age: 20,
    univ: "중앙대학교",
    major: "소프트웨어학",
    rating: 5,
  },
  {
    id: 2,
    name: "곽동욱",
    male: true,
    age: 20,
    univ: "아주대학교",
    major: "산업공학",
    rating: 4.9,
  },
  {
    id: 3,
    name: "이영훈",
    male: true,
    age: 20,
    univ: "반수 중",
    major: "none",
    rating: 4.5,
  },
  {
    id: 4,
    name: "원지성",
    male: true,
    age: 20,
    univ: "가천대학교",
    major: "전자공학",
    rating: 5.1,
  },
  {
    id: 5,
    name: "장영재",
    male: true,
    age: 20,
    univ: "재수 중",
    major: "none",
    rating: 4.8,
  },
  {
    id: 6,
    name: "주동묵",
    male: true,
    age: 20,
    univ: "경희대학교",
    major: "항공우주학",
    rating: 5.2,
  },
  {
    id: 7,
    name: "채범수",
    male: true,
    age: 20,
    univ: "아주대학교",
    major: "소프트웨어학",
    rating: 5.3,
  },
];

function CallInfo({ name, male, age, univ, major, rating }) {
  const sex = male === true ? "He" : "She";
  if (major !== "none") {
    return (
      <div>
        <h1>
          <p>
            {name} is {age} years old.
          </p>
          <p>
            And {sex} is majoring in {major} at {univ}.
          </p>
        </h1>
        <h4>{rating}/5</h4>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <p>
            {name} is {age} years old. {sex} is {univ}.
          </p>
          <br></br>
        </h1>
        <h4>{rating}/5</h4>
      </div>
    );
  }
}

CallInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  male: PropTypes.bool.isRequired,
  univ: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {membersOfFlex.map((member) => (
        <CallInfo
          key={member.id}
          name={member.name}
          male={member.male}
          age={member.age}
          univ={member.univ}
          major={member.major}
          rating={member.rating}
        />
      ))}
    </div>
  );
}

export default App;
