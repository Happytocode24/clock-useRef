import { useState,useRef } from "react";

export default function Player() {

  const[EnteredPlayerName ,setSubmittedName]=useState(null)
  const playerName = useRef();  
  // now this playername const will have access directly to
  // perticular elemet in which it is attached 

 const handelClick=()=>{
  setSubmittedName(playerName.current.value)
  playerName.current.value='';

 }

  return (
    <section id="player">
      <h2>Welcome {EnteredPlayerName ??'unkown Entity'}</h2>
      <p>
        <input 
        type="text" 
        ref={playerName}
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
