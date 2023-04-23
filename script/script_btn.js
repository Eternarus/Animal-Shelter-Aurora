let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let btn1 = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

  btn1.onclick = function() {
    this.classList.add('btn-active')
    btn2.classList.remove('btn-active')
    btn3.classList.remove('btn-active')
    text1.innerHTML = '<div class="statistic_number" id="text1">2</div>'
    text2.innerHTML = '<div class="statistic_number" id="text1">3</div>'
}

  btn2.onclick = function() {
    this.classList.add('btn-active')
    btn1.classList.remove('btn-active')
    btn3.classList.remove('btn-active')
    text1.innerHTML = '<div class="statistic_number" id="text1">15</div>'
    text2.innerHTML = '<div class="statistic_number" id="text1">30</div>'
}

  btn3.onclick = function() {
    this.classList.add('btn-active')
    btn1.classList.remove('btn-active')
    btn2.classList.remove('btn-active')
    text1.innerHTML = '<div class="statistic_number" id="text1">87</div>'
    text2.innerHTML = '<div class="statistic_number" id="text1">140</div>'
}
