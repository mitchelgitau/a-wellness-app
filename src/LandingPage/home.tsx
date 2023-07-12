import React from 'react';
import { About } from './About';
import { Hero } from './Hero';
import { Footer } from './Footer';

const LandingPage = ()=>{
    return(
        <>     
          <Hero />
          < About/>
          <Footer links={[]} />
        </>
        
    )
}
export default LandingPage;