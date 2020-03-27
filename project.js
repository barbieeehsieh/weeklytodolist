
// function for adding elements
function addmon(){
  document.querySelector(".mondayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+ '<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addtues(){
  document.querySelector(".tuesdayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addwed(){
  document.querySelector(".wednesdayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addthurs(){
  document.querySelector(".thursdayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addfri(){
  document.querySelector(".fridayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addsat(){
  document.querySelector(".saturdayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

function addsun(){
  document.querySelector(".sundayitem").innerHTML +='<div class="item-container" onclick="remove(this)">'+'<input type="checkbox">'+ document.querySelector(".myInput").value + '</div>';

  document.querySelector(".myInput").value = ''
}

function addthings(){
  document.querySelector(".thingsitem").innerHTML +='<div class="remember-container" onclick="remove(this)">'+ '✔️ '+ document.querySelector(".myInput").value + '</div>';
  document.querySelector(".myInput").value = ''
}

// remove function
function remove(x){
  x.remove();
}
