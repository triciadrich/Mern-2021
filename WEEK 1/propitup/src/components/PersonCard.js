import React from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{hairColor}</p>
      <hr></hr>
    </div>
  );
};

export default PersonCard;
