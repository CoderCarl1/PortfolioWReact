import React from "react";
import "../Styles/Darklight.scss";

function DarkLight() {
// const [mode, setMode] = useState('lightmode')
// const checkbox = document.getElementById('darklight-toggle')
let counter = 0;
let doc = document.getElementById('root')
const darkToggle = () => {
  
  if (counter === 0){
    counter += 1
    doc.className = 'darkmode'
  } else if (counter >= 1){
    counter -=1
    doc.className = 'lightmode'
  }
}
  return (
    <>
      {/* <input type="checkbox" id="darklight-toggle" />
      <label htmlFor="darklight-toggle" id="darklight-label" aria-label="toggle dark mode" onChange={darkToggle}/> */}
      <button onClick={darkToggle} className='darklight-toggle'>Dark/Light</button>
    </>
  );
}

export default DarkLight;
