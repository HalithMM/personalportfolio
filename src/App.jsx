import { useState } from 'react'
import About from './components/About'
import Bio from './components/Bio'
import Header from './components/Header'
import Landing from './components/Landing'   
import Loader from './components/Loader'
import Projectss from './components/Projectss'
import Skill from './components/Skill'
import Career from './components/career'
import Footer from './components/footer'
import Reveal from './components/reveal'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className='bg-black'> 
      {isLoading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Header/>
          <Reveal><Landing/></Reveal>
          <Reveal><Bio/></Reveal>
          <Reveal><About/></Reveal>
          <Reveal><Skill/></Reveal>
          <Reveal><Career/></Reveal>
          <Projectss/> 
          <Reveal><Footer/></Reveal>
        </>
      )}
    </div>
  )
}

export default App