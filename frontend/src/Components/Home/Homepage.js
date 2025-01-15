import React from 'react'
import Header from './Header'
import About from './knowme'
import Blog from './blog'
import Projectsimg from './projectsimg'
import WhyChooseUs from './whychooseus'

const Homepage = () => {
  return (
    <div>
     <Header/> 
     <About/>
    <Projectsimg/>
    <Blog/>
    <WhyChooseUs/>
    </div>
  )
}

export default Homepage