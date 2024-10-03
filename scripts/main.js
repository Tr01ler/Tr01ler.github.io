nerd = document.querySelector("img");
let bigText = document.querySelector("h1");
let awkwardCorrection = document.querySelector("button");

function setUserName() {
  const myName = prompt("Wait! W-Who are you!?");
  if (!myName) {
	  setUserName();
  } else {
	  localStorage.setItem("name", myName);
	  bigText.textContent = `Well, ${myName}, t-the ummm... 
	  The Day of Reckoning is... it's ermm... it's here!!!`;
  };
}

if (!localStorage.getItem("name")) {
	  setUserName();
  } else {
	  const storedName = localStorage.getItem("name")
	  bigText.textContent = `H-Hey again ${storedName}, the ummm... 
  The Day of Reckoning is... it's ermm... it's here!!!`;
  }
  
  awkwardCorrection.onclick = () => {
	  setUserName();
  }
  
  
nerd.addEventListener("mouseover", function () {
  nerd.src = "images/Skeletron.png";
});

nerd.addEventListener("mouseout", function () {
  nerd.src = "images/nerd.png";
});