import { useState } from 'react'
import { Link } from "react-router-dom";

function About() {
  

  const aboutPageStyle = {
    backgroundColor:'#5EA8DD',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }
  const aboutStyle = {
    textAlign: 'left',
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#000000',
    fontWeight:'bold'
  }

  return (
    <>
      <div style={aboutPageStyle}>
        <p style={{ ...aboutStyle, left:'100px', top:'200px', fontSize:'80px'}}>About Us</p>
        <p style={{ ...aboutStyle, left:'100px', top:'380px', fontSize:'30px', width:'80%'}}>We're an all-inclusive lower-voices a cappella group known for our fun performances and original music! Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed for Cal Athletics and at UC Berkeley's 2022 commencement!</p>
        <p style={{ ...aboutStyle, left:'100px', top:'580px', fontSize:'55px'}}>Events</p>
        <p style={{ ...aboutStyle, left:'100px', top:'700px', fontSize:'30px', width:'20%'}}>We organize Welcome Back to A Cappella, Cal’s a cappella orientation, at the beginning of every semester. Hundreds of students turn out to hear 13+ a cappella groups perform. The show is always fun, and we hope you’ll come!</p>
        <p style={{ ...aboutStyle, left:'950px', top:'580px', fontSize:'55px'}}>Hire Us</p>
        <p style={{ ...aboutStyle, left:'950px', top:'700px', fontSize:'30px', width:'20%'}}>We’re no stranger to weddings, private parties, tailgates, and conferences. We’ve performed at venues including San Francisco City Hall, University House, the Faculty Club, and UC Berkeley’s 2022 Commencement.</p>
        <p style={{ ...aboutStyle, left:'1800px', top:'580px', fontSize:'55px'}}>Follow Us</p>
        <p style={{ ...aboutStyle, left:'1800px', top:'700px', fontSize:'30px', width:'20%'}}>Instagram: @noteworthyacappella</p>
      </div>
    </>
  )
}

export default About
