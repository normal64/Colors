import { useState, useEffect } from "react";
import chroma from "chroma-js";
import "./App.scss";

function App() {
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    console.log(`useEffect`, chroma.random());
    setRandomColors();
    return () => {};
  }, []);
  function lockIt(e) {
    console.log("icon click",e.target.className);
    if(e.target.className.includes("fa-lock-open")){
      
      e.target.className = "icon click fa-solid fa-lock" 
    }else e.target.className = "icon click fa-solid fa-lock-open" 
    
  }
  document.addEventListener("keydown", (event) => {
    console.log("effect", event);
    if (event.code === "Space") {
      console.log("spacebar pressed");
      setRandomColors();
    }
  });

  function generateRandomColor() {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return "#" + color;
  }
  function setRandomColors() {
    const cols = document.querySelectorAll(".col");
    
    cols.forEach((col) => {
      //let color = generateRandomColor()
      const isLocked = col.querySelector("i").classList.contains("fa-lock")
      console.log(`isLocked`, isLocked);
      if(isLocked) return
      for(let i = 0; i < col.length; i++){
        console.log(`col[i]`, col[i]);
      }
      let color = chroma.random();
      col.style.background = color;
      let text = col.querySelector("h2");
      let button = col.querySelector("button");
      text.textContent = color;
      setTextColor(text, color);
      setTextColor(button, color);
    });
  }
  function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white";
  }

  return (
    <div
      className="colors"
      //onKeyPress={(event) =>handleSpacePress(event)}
    >
      <div className="col">
        <h2>Text</h2>

        <button data-type="lock">
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"  onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"  onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"  onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open"  onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
