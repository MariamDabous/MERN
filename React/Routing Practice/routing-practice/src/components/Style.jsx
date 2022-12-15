import React from 'react'

const Style = (props) => {
  return (
    <div style={{backgroundColor: props.backColor, color: props.fontColor}}>
        <h1>{props.word}</h1>
    </div>
  )
}

export default Style
{/* <Style path= "/:word/:fontColor/:backColor"/> */}