import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Joine from './components/Joine'

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Analytics/>
     <Newsletter />
     <Cards/>
     <Footer/>
     <Joine/>
    </div>
  )
}

export default App