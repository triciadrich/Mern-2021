import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, hairColor } = props;
  const [age, setAge] = useState(props.age);
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{hairColor}</p>
      <button onClick={(event) => setAge(age + 1)}>Birthday button for {firstName}</button>
      <hr></hr>
    </div>
  );
};

export default PersonCard;
