import React from "react";

const Number = props =>{
  if (isNaN(props.id)){
    return(
      <div>
        the word is: {props.id}
      </div>
    )
  }
  return(
    <div> <p>The number is : {props.id} </p></div>
  )
}

export default Number;