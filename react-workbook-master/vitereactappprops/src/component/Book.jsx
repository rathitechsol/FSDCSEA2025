import React from 'react'

export default function Book([data]) {
  return (
    <div>Book
        <h2>Name:{data.Name}</h2>
        <h2>year:{data.year}</h2>
        <h2>author:{data.author}</h2>
        <h2>publication:{data.publication}</h2>
        <h2>Language:{data.Language}</h2>
    </div>
  )
}
