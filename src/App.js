import React from "react";
const membersOfFlex = [
  {
    id: 1,
    name: "장민석",
    male: true,
    age: "20",
    univ: "중앙대학교",
    major: "소프트웨어학",
  },
  {
    id: 2,
    name: "곽동욱",
    male: true,
    age: "20",
    univ: "아주대학교",
    major: "산업공학",
  },
  {
    id: 3,
    name: "이영훈",
    male: true,
    age: "20",
    univ: "반수 중",
    major: "none",
  },
  {
    id: 4,
    name: "원지성",
    male: true,
    age: "20",
    univ: "가천대학교",
    major: "전자공학",
  },
  {
    id: 5,
    name: "장영재",
    male: true,
    age: "20",
    univ: "재수 중",
    major: "none",
  },
  {
    id: 6,
    name: "주동묵",
    male: true,
    age: "20",
    univ: "경희대학교",
    major: "항공우주학",
  },
  {
    id: 7,
    name: "채범수",
    male: true,
    age: "20",
    univ: "아주대학교",
    major: "소프트웨어학",
  },
];

function CallInfo({ name, male, age, univ, major }) {
  const sex = male === true ? "He" : "She";
  if (major !== "none") {
    return (
      <h1>
        <p>
          {name} is {age} years old.
          <p>
            And {sex} is majoring in {major} at {univ}.
          </p>
        </p>
        <br></br>
      </h1>
    );
  } else {
    return (
      <h1>
        <p>
          {name} is {age} years old. {sex} is {univ}.
        </p>
        <br></br>
      </h1>
    );
  }
}

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
        />
      ))}
    </div>
  );
}

export default App;
