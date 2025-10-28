import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/gallery'
import Profile from './component/profile'
import ICard from './component/ICard'

function App() {
 

  return (
    <>
     <h1>ABES Engg College</h1>
     <ICard name = "Rahul" location = "noida">
     <Gallery />
     <div class="image">
     <Profile />
      
          <Profile />

     <Profile />

     <Profile />
     </div>
     </ICard>

    </>
  )
}

export default App
