import React from "react";

const String = props =>{
  if (isNaN(props.string)){
    return(
      <div>The word is : {props.string}</div>
    )
  }

  return (
    <div>not a word</div>
  )
}


export default String;