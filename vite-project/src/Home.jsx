import { useState } from 'react'

import Header from "./Header";
import './Home.css'

function Home() {
  const titleStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    fontSize:'150px',
    color:'#FFFFFF',
    lineHeight:'170px',
    fontWeight:'bold'
  }

  return (
    <>
      <div id='home-page-container'>
        <p style={titleStyle}>Noteworthy <br /> A Capella</p>
      </div>
    </>
  )
}

export default Home
