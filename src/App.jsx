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
import Reveals from './components/Reveals'

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
         <Reveals><Landing/></Reveals>
          <Reveals><Bio/></Reveals>
          <Reveals><About/></Reveals>
          <Reveals><Skill/></Reveals>
          <Reveals><Career/></Reveals>
          <Projectss/> 
          <Reveals><Footer/></Reveals>
        </>
      )}
    </div>
  )
}

export default App