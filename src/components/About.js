import React, { useEffect } from 'react'
import MainSection from './MainSection'
import { GlobalContextValue } from '../context'

const About = () => {

  const { updateAboutPage } = GlobalContextValue();

  useEffect(() => {
    updateAboutPage();
  }, [])

  return (
     <>
       <MainSection />
     </>
  )
}


export default About;
