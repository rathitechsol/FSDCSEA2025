import { useState } from 'react'


function ICard(props) {
 

  return (
    <div>
    ICard
    <h2>Name: {props.name}</h2>
        <h2>age: {props.age}</h2>

    <h2>branch: {props.branch}</h2>

    <h2>college: {props.college}</h2>
    <h2>location: {props.location}</h2>

    </div>
  )
}

export default ICard
