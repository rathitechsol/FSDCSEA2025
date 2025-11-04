import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import ICard from './component/ICard'
import Book from './component/Book'
import ImageManipulation from './component/imageManipulation'
import Nav from './component/Nav'
import Cards from './component/Cards'
import Footer from './component/Footer'


// function App() {
//   const books = [
//     { name: 'C Book', age: 2001, branch: 'Lang', college: 'Pub A', location: 'EN', img: 'https://www.freepik.com/free-photos-vectors/book' },
//     { name: 'Java Book', age: 2005, branch: 'Lang', college: 'Pub B', location: 'EN', img: 'https://www.freepik.com/free-photos-vectors/book' },
//     { name: 'JS Book', age: 2015, branch: 'Lang', college: 'Pub C', location: 'EN', img: 'https://www.freepik.com/free-photos-vectors/book' },
//     { name: 'Python Book', age: 2019, branch: 'Lang', college: 'Pub D', location: 'EN', img: 'https://www.freepik.com/free-photos-vectors/book' }
//   ]
//   const student=
//   [{
// name:"Ansh",
// age:19,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Ram",
// age:20,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Vansh",
// age:20,
// barnch:"IT",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   }
// ]
function App() {
  return (
    <div>
    <Nav />
    <div style={{ padding: '16px' }}>
      <h2 style={{ marginTop: '16px' }}>Welcome our Hotels</h2>
      <Cards />
    </div>
    <Footer />

    {/* <div style={{ display:'flex', gap:'12px' }}>
      {books.map((b, i) => (
        <div key={i} style={{ border:'1px solid #ccc', borderRadius:'8px', padding:'12px', width:'200px' }}>
          <img src={b.img} alt={b.name} style={{ width:'100%', height:'120px', objectFit:'cover', borderRadius:'6px' }} />
          {Book([b])}
        </div>
      ))}
    </div> */}

    {/* {student.map((ele,indes)=>(
      <ICard data={ele} />
    ))}
     */}
    </div>
  )
}

export default App
