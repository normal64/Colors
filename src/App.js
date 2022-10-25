import { useEffect } from 'react';
import chroma from "chroma-js"
import './App.scss';


function App() {
  useEffect(() => {
    console.log(`useEffect`,chroma.random());

    setRandomColors()
    return () => {
      
    }
  }, [])  
  
  function generateRandomColor(){
    const hexCodes = "0123456789ABCDEF"
    let color = ""
    for(let i = 0 ; i < 6 ; i++){
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return "#" + color
  }
  function setRandomColors(){
    const cols = document.querySelectorAll('.col')
    cols.forEach(col=>{
      //let color = generateRandomColor()
      let color = chroma.random()
      col.style.background = color; 
      let text = col.querySelector("h2")
      let button = col.querySelector("button")
      text.textContent = color;
      setTextColor(text,color)
      setTextColor(button,color)
    })
  }
  function setTextColor(text,color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5  ? "black" : "white"

  }
 
  return (
    <div className="colors">
      <div className="col" >
        <h2>Text</h2>
        
        <button>
          <i className="fa-solid fa-lock-open"></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
