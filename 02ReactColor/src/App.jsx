import { useState } from 'react'
import Card from '../Components/Card.jsx'


function App() {
  
const [color, setColor] = useState("SkyBlue")

  return (
    <div className='w-full h-screen flex flex-wrap gap-5' style={{backgroundColor: color}}>
      
      
        <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 gap-3'> 
          <button className='bg-white text-black p-2 rounded-md hover:bg-gray-100 outline-none w-40' onClick={()=>{setColor("white")}}>White</button>
          <button className='bg-black text-white p-2 rounded-md hover:bg-gray-400 w-40' onClick={()=>{setColor("black")}}>black</button>
          <button className='bg-green-400 text-black p-2 rounded-md hover:bg-green-300 w-40' onClick={()=>{setColor("green")}}>green</button>
          <button className='bg-red-400 text-black p-2 rounded-md hover:bg-red-300 w-40' onClick={()=>{setColor("red")}}>red</button>
          <button className='bg-orange-400 text-black p-2 rounded-md hover:bg-orange-300 w-40' onClick={()=>{setColor("orange")}}>orange</button>
        </div>
       
      <Card 
      imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" 
      movieName="Inception" />
      <Card 
      imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" 
      movieName="Intersteller" />
      <Card 
      imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" 
      movieName="Avengers:EndGame" />
      <Card 
      imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" 
      movieName="Geeta Govindam" />
      <Card 
      imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" 
      movieName="Dear Comrade" />
      
    </div>
  )
}

export default App
