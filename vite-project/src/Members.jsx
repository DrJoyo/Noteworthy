import { useState } from 'react'
import Mem from './Mem.jsx'

function Members() {
  const memberPageStyle = {
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
  const memStyle = {
    textAlign: 'center',
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#000000',
    fontWeight:'bold'
  }

  return (
    <>
      <div style={memberPageStyle}>
        <Mem name="Alex" img="./people/Alex.png" style={{...memStyle, top:'0px', left:'0px'}}></Mem>
      </div>
    </>
  )
}

export default Members
