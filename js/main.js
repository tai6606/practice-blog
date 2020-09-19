"use strict"


function checked(){
  const navNode = document.getElementById("header-nav")
  const checkbox = document.getElementById("header-checkbox")
  const headerBgc = document.getElementById("close-check-2")

  if(checkbox.checked === false){
    navNode.classList.remove("header-checked-1")
    headerBgc.classList.remove("header-checked-2")
  } else {
    navNode.classList.add("header-checked-1")
    headerBgc.classList.add("header-checked-2")
  }
}









