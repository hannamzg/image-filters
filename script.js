let theImg = document.getElementById('theImg');
let filter1 = document.getElementById('filter1');
let filter2 = document.getElementById('filter2');
let filter3 = document.getElementById('filter3');
let filter4 = document.getElementById('filter4');
let inp1Value =document.getElementById('inp1Value');
let inp2Value =document.getElementById('inp2Value');
let inp3Value =document.getElementById('inp3Value');
let inp4Value =document.getElementById('inp4Value')

filter1.onchange = function(){
    theImg.style.filter = `blur(${filter1.value}px)`
    inp1Value.innerHTML = filter1.value
}

filter2.onchange = function(){
    theImg.style.filter = `contrast(${filter2.value}%)`
    inp2Value.innerHTML = filter2.value
}

filter3.onchange = function(){
    theImg.style.filter = `grayscale(${filter3.value}%)`
    inp3Value.innerHTML = filter3.value
}

filter4.onchange = function(){
    theImg.style.filter = `hue-rotate(${filter4.value}deg)`
    inp4Value.innerHTML = filter4.value
}