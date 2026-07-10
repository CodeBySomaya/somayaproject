import { useState } from 'react'
import './App.css'
import Navbar from './Components/layout/Navbar';
import Hero from './Components/Sections/Hero';
import About from './Components/sections/About';
import Skills from './Components/sections/Skills';
import EducationLanguages from './Components/sections/EducationLanguages';
import Projects from './Components/sections/Projects';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <main className='container'>
    <Hero />
     <About/>
     <Skills/>
     <EducationLanguages/>
     <Projects/>
     </main>
 
    </>
  );
   
}

export default App;
