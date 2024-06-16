import { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
function Gameplay() {
  const Main = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1180px;
    margin: 0 auto;
    align-items:center
  `;

  const Sec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 100px;
      line-height: 20px;
    }
    p {
      font-size: 24px;
      margin-top:-20px;
      font-weight: 800;
    }
  `;
  const Div=styled.div`
  display:flex;
  gap:24px
  `
  const Box =styled.div`
 height:72px;
 width:72px;
 border:1px solid black;
 display:grid;
 place-items:center;
 font-size:24px;
 font-weight:700;
 background-color:${(props)=>(props.isSelected ? "black" : "white")};
 color:${(props)=>(props.isSelected ? "white" : "black")};
  `
  const BTN =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  button{
    border-radius: 5px;
    color:  black;
    padding: 10px 18px;
    border: none;
    background-color:  lightgray;
    min-width: 220px;
    transition: 0.3s background ease-in;

    &:hover {
      background-color: black;
      color: white;
      border: 0px solid black;
      transition: 0.3s background ease-in;
    }

  }
 
  `
  
  const SelNum =styled.p`
  font-size:24px;
  font-weight:700;
  `
const arrNumber=[1,2,3,4,5,6];
const [selectedNumber,setSelectedNumber]= useState("")
const[Cdice,setCdice]= useState(1);
const[score,setScore]=useState(0);
const[error,setError]=useState("");
const [showRules,setShowRules]= useState(false);

const generateRandomNumber=(min, max) =>{
  console.log(Math.floor(Math.random() * (max - min) + min))

  return Math.floor(Math.random() * (max - min) + min);
};

function resetGame(){
  setScore(0);
  setSelectedNumber(" ");
  setError(" ");
  setCdice(1)

}



function handleError(value){
  setSelectedNumber(value)
  setError(" ")
}
function roleDice(){
  if(!selectedNumber){
  setError("You have not selected any NUMBER");
  return;}

  const randomNumber = generateRandomNumber(1,7);
  setCdice((prev)=>randomNumber)
  console.log(randomNumber)

  if(selectedNumber==randomNumber){
    setScore((prev)=>prev+randomNumber)
  }
  else{
    setScore((prev)=>prev-randomNumber)
  }setSelectedNumber(undefined)
};
  return (
    <>
    <Main>
      <Sec>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Sec>
      <div style={{marginTop:"45px",display:"flex",flexDirection:"column",alignItems:"end"}}>
      <Div>
      {arrNumber.map((value,index)=>(
        <Box 
        isSelected={value==selectedNumber}
        key={index} onClick={()=>handleError(value)}>{value}</Box>
      ))}
        
      </Div>
      <SelNum>Select Number</SelNum>

      </div>
    </Main>
    <RoleDice Mdice={Cdice} Ndice={setCdice} Rdice={roleDice} Error={error}/>
    <BTN>
      <button onClick={resetGame}>Reset Game</button>
      <button
       onClick={(()=>setShowRules((prev)=>!prev))}>
      {showRules ? "Hide" : "Show"} Rules</button>
    </BTN>

    
    {showRules && <Rules/>}
    
    
    </>
  );
}

export default Gameplay;
