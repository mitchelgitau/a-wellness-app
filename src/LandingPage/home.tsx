import React from 'react';
import { HeaderSimple } from './Header';
import { Hero } from './Hero';
import { Footer } from './Footer';

const links = [
  {
    link: '#',
    label: 'About Us',
  },
  {
    link: '#',
    label: "Sign Up",
  },
  {
    link: '#',
    label: 'LogIn',
  },
  
];

const LandingPage = ()=>{
    return(
        <>     
          <Hero />
          
          <Footer links={[]} />
        </>
        
    )
}
export default LandingPage;