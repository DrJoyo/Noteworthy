import { useState } from 'react'
import Mem from './Mem.jsx'

function Members() {
  const memberPageStyle = {
    backgroundColor:'#5EA8DD',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: 0,
    left: 0,
    position:'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
    margin:0,
  }
  const memStyle = {
    textAlign: 'center',
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#000000',
    fontWeight:'bold',
  }

  return (
    <>
      <div style={memberPageStyle}>
        
      </div>
      <p style={{position:'relative', top:'50px', justifyContent:'center', textAlign:'center', color:'black', fontSize:'80px', fontWeight:'bold', alignItems: 'center', height:'50px'}}>Members</p>
      <div style={{marginTop:'-300px', left: '-420px', top:'300px', position: 'relative', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', gridAutoRows:'minmax(100px, auto)'}}>
          <Mem name="Alex Pease" img="./people/Alex.png"></Mem>
          <Mem name="Andrew Tran" img="./people/Andrew.jpeg"></Mem>
          <Mem name="Athena Liu" img="./people/Athena.jpeg"></Mem>
          <Mem name="Bhaskar Roberts" img="./people/Bhaskar.jpeg"></Mem>
          <Mem name="Caitlyn" img="./people/Caitlyn.jpeg"></Mem>
          <Mem name="Dell" img="./people/Dell.jpeg"></Mem>
          <Mem name="Eddie Cekiki" img="./people/Eddie.jpeg"></Mem>
          <Mem name="Ellington Chen" img="./people/Ellington.jpeg"></Mem>
          <Mem name="Jerry" img="./people/Jerry.jpeg"></Mem>
          <Mem name="Jessica" img="./people/Jessica.jpeg"></Mem>
          <Mem name="Justin Wong" img="./people/justin_wong.jpg"></Mem>
          <Mem name="Kian Chou" img="./people/Kian.jpeg"></Mem>
          <Mem name="Maya Rotenberg" img="./people/Maya.jpeg"></Mem>
          <Mem name="Stephenus Yang" img="./people/Stephanus.jpeg"></Mem>
          <Mem name="Tom Guan" img="./people/Tom.jpeg"></Mem>
      </div>
    </>
  )
}

export default Members
