import React from "react";

const Color = props =>{
  
  return (
    <div style = {{background: (props.background)}}>
     <h1 style= {{color: (props.text)}}>{props.word}</h1>
    </div>
  )
}

export default Color;