function lockIt(e) {
    console.log("icon click", e.target.className);
    if (e.target.className.includes("fa-lock-open")) {
      e.target.className = "icon click fa-solid fa-lock";
    } else e.target.className = "icon click fa-solid fa-lock-open";
  }
  export default lockIt