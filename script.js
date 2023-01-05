     

const pushMeButton = document.querySelector("#pushMeBtn")
 
const card = document.querySelector(".card")

const bringBackButton = document.getElementById("backBtn")
 
const pushMe2Button = document.getElementById("pushMe2Btn")

const swirlButton = document.getElementById("swirlBtn")

const darkModeButton = document.querySelector("#darkModeBtn")

const pulseButton = document.querySelector("#pulseBtn")
 
const stopPulseButton = document.querySelector("#stopPulseBtn")


const huhButton = document.querySelector("#huhBtn")

const huh2Button = document.querySelector("#huh2Btn")

const bigglesButton = document.querySelector("#bigglesBtn")

const stopBigglesButton = document.querySelector("#stopBigglesBtn")

stopBigglesButton.addEventListener("click", () => {
  card.classList.remove("animate")
  console.log("clicked")
})

bigglesButton.addEventListener("click", () => {
  card.classList.toggle("animate")
  console.log("clicked")
})

huh2Button.addEventListener("click", () => {
  console.log("clicked")
  card.classList.remove("shrink")
  card.classList.remove("expand")
  card.classList.remove("translate-rotate")
  card.classList.remove("pulse")
  card.classList.remove("ellipse")
  card.classList.add("ellipseBack")
})


const huhStopButton = document.querySelector("#huhStopBtn")

huhStopButton.addEventListener("click", () => {
  card.classList.remove("ellipse")
  card.classList.remove("ellipseBack")
})

huhButton.addEventListener("click", () => {
  card.classList.toggle("ellipse")
   
  console.log("clicked")
})





pushMeButton.addEventListener("click", () => {
    slideCardAway()
  
    console.log("Success!!", "please stare at the colors for a moment before returning to something more important")
     
  })

bringBackButton.addEventListener("click", () => {
  console.log("clicked") 
   slideCardBack()
   
})

 
pushMe2Button.addEventListener("click", () => { console.log("You pushed my other button!!")
  console.log("clicked")
  scaleCardIn()

})

swirlButton.addEventListener("click", () => {
  swirlCard()
  console.log("clicked")
  
})

 
 

 
function slideCardAway() {
   card.classList.add("removed")
   card.classList.remove("removed2")
   //card.classList.remove("expand")
   card.addEventListener("transitionend", () => {
    //card.style.display === "none"
   })
 }

 function slideCardBack() {
  card.classList.add("removed2")
  card.classList.remove("removed")

  card.addEventListener("transitionend", () => {
    
  })
 }

 function scaleCardIn() {
  card.classList.add("shrink")
  card.classList.remove("expand")
  card.classList.remove("removed2")
 }

 function scaleCardOut() {
  card.classList.add("expand")
  card.classList.remove("shrink")
 }

function swirlCard() {
  
 // card.classList.add("rotate")
 // card.classList.add("rotate-translate")
  card.classList.add("translate-rotate")
  card.classList.remove("removed2")
  card.classList.remove("removed")
  card.classList.remove("expand")
  card.classList.remove("shrink")
  card.addEventListener("transitionend", () => {
  
  })
}

darkModeButton.addEventListener("click", () => {
    console.log("clicked")
    myFunction()
})



function myFunction() {
    let element = document.body
    element.classList.toggle("dark-mode")
  }

pulseButton.addEventListener("click", () => {
  card.classList.remove("ellipseBack")
  card.classList.remove("ellipse")
  card.classList.toggle("pulse")
})

stopPulseButton.addEventListener("click", () => {
  card.classList.remove("pulse")
})

   

/*function spinCard() {
  let winding = true
let angle = 0

myInterval = setInterval(() => {
  if (winding) {
     angle += 4;
    card.style.transform = `rotate(${angle}deg)`// Template literal

  }
}, 30)
 
 }*/
 

   