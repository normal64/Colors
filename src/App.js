import { useState, useEffect } from "react";
import chroma from "chroma-js";
import "./App.scss";
import copyToClipboard from "./functions/copyToClipboard"
import lockIt from "./functions/lockIt"
function App() {
  const [initial, setInitial] = useState(true);
  useEffect(() => {
    console.log("from hash", getColorsFromHash());
      setRandomColors(initial);
      //setInitial(false)
      return () => {};
  },[]);
  

  document.addEventListener("keydown", (event) => {
    console.log("effect", event);
    if (event.code === "Space") {
      console.log("spacebar pressed");
      setRandomColors();
    }
  });
  // function generateRandomColor() {
  //   const hexCodes = "0123456789ABCDEF";
  //   let color = "";
  //   for (let i = 0; i < 6; i++) {
  //     color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  //   }
  //   return "#" + color;
  // }
  function setRandomColors(initial) {
    const cols = document.querySelectorAll(".col");
  console.log(`isInitial`, initial);
    const colors = initial ?  getColorsFromHash() : [] ;
    cols.forEach((col,index) => {
      //let color = generateRandomColor()
      const isLocked = col.querySelector("i").classList.contains("fa-lock");
      console.log(`isLocked`, isLocked);
      if (isLocked) {
        console.log("locked", col.querySelector("h2").textContent);
        colors.push(col.querySelector("h2").textContent);
        return;
      }
      for (let i = 0; i < col.length; i++) {
        console.log(`col[i]`, col[i]);
      }
      // let color = chroma.random();
      const color = initial
      ? colors[index]
        ? colors[index]
        : chroma.random()
      : chroma.random()
      if (!initial) {
        colors.push(color)
      }
      //colors.push(color);
      col.style.background = color;
      let text = col.querySelector("h2");
      let button = col.querySelector("button");
      text.textContent = color;
      setTextColor(text, color);
      setTextColor(button, color);
    });

      updateColorsHash(colors);

  }

  function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white";
  }

  function updateColorsHash(colors = []) {
    document.location.hash = colors
      .map((elem) => {
        return elem.toString().slice(1);
      })
      .join("-");
  }

  function getColorsFromHash() {
    if (document.location.hash.length > 1) {
      return document.location.hash
        .substring(1)
        .split("-")
        .map((color) => "#" + color);
    }
    return [];
  }
  
  return (
    <div
      className="colors"
      //onKeyPress={(event) =>handleSpacePress(event)}
    >
      <div className="col">
        <h2 onClick={(e) => copyToClipboard(e.target.innerHTML)}>Text</h2>

        <button data-type="lock">
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2 onClick={(e) => copyToClipboard(e.target.innerHTML)}>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2 onClick={(e) => copyToClipboard(e.target.innerHTML)}>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2 onClick={(e) => copyToClipboard(e.target.innerHTML)}>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
      <div className="col">
        <h2 onClick={(e) => copyToClipboard(e.target.innerHTML)}>Text</h2>
        <button>
          <i className="fa-solid fa-lock-open" onClick={(e) => lockIt(e)}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
