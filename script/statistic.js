let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let btn1 = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

btn1.onclick = function () {
  this.classList.add('btn-active')
  btn2.classList.remove('btn-active')
  btn3.classList.remove('btn-active')
  text1.innerText = '2'
  text2.innerText = '3'
}

btn2.onclick = function () {
  this.classList.add('btn-active')
  btn1.classList.remove('btn-active')
  btn3.classList.remove('btn-active')
  text1.innerText = '15'
  text2.innerText = '30'
}

btn3.onclick = function () {
  this.classList.add('btn-active')
  btn1.classList.remove('btn-active')
  btn2.classList.remove('btn-active')
  text1.innerText = '87'
  text2.innerText = '140'
}
