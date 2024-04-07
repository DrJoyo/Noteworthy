import { useState } from 'react'
import YoutubeEmbed from "./YoutubeEmbed"

function Videos() {
  const videoPageStyle = {
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
  const videoStyle = {
    textAlign: 'center',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold',
    fontSize:'80px'
  }

  return (
    <>
      <div style={videoPageStyle}>
        
      </div>
      <div style={{width:'1000px', height:'900px'}}>
        <p style={{...videoStyle, color:'black'}}>Our Favorite Videos</p>
        <YoutubeEmbed embedId="n0p8MxT8AxI"/>
        <a style={{...videoStyle, fontSize:'40px', height:'110px'}} href='https://www.youtube.com/@UCBNoteworthy' target='_blank'>Find us on Youtube</a>
      </div>
        
    </>
  )
}

export default Videos
