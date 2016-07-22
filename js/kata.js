// You Dont Need Jquery ;D
"use strict";

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)){
    return false;
  };
  return true;
};

function maxNumber(number){
  if (number <= 25) {
    var a = true;
  }else{
    var a = false;
  };
  return a;
};

function createWorld(){
	var rows = document.querySelector(".rows").value;
	var columns = document.querySelector(".columns").value;
  if (maxNumber(rows) == false || maxNumber(columns) == false ){
    alert("Max 25");
    return false;
  };
  createMatrix(rows,columns);
  return false; //PreventDefault
};

function createMatrix(y,x){
  var e = eval;
  e("matrix = new Array("+y+")"); //Create matrix
  e("mirror = new Array("+y+")"); //Create mirror
  for (var i = 0; i < y; i++){
    e("matrix"+i+" = new Array("+x+")"); //Create matrix arrays
    e("mirror"+i+" = new Array("+x+")"); //Create mirror arrays
    for (var j = 0; j < x; j++){
      e("matrix" + i + "[" + j + "] = 0");  //Fill matrix arrays
      e("mirror" + i + "[" + j + "] = 0");  //Fill mirror arrays
    };
    e("matrix["+i+"] = matrix"+i); //Fill matrix
    e("mirror["+i+"] = matrix"+i);  //Fill array
  };
  printMatrix(matrix);
};

function printMatrix(matrix){
  var html = "<table>";
  for (var i = 0; i < matrix.length; i++){
    html += "<tr>";
    for (var j = 0; j < matrix[0].length; j++){
      if (matrix[i][j] == 0 ){
        html += "<td class='cell' onclick='activeCell("+i+","+j+")'>" + matrix[i][j]+"</td>";
      }else if(matrix[i][j] == 1){
        html += "<td class='cell active' onclick='activeCell("+i+","+j+")'>" + matrix[i][j]+"</td>";
      };
      //html += "<td class='cell'>" + "matrix["+i+"]["+j+"]</td>"; Here you can check the position [?][?]
    };
    html += "</tr>";
  };
  html += "</table>";
  document.querySelector(".world").innerHTML = html;
};

function activeCell(x,y){
  if (matrix[x][y] == 0){
    matrix[x][y] = 1;
  }else if(matrix[x][y] == 1){
    matrix[x][y] = 0;
  };
  printMatrix(matrix);
};

function startGame(matrix){
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[0].length; j++){
      alert(i+","+j) //CHECK THE POSITION
      alert(checkNeighbours(i,j))
    };
  };
};

function checkNeighbours(i,j){
  var n = 0;
  //LEFT
  if (j - 1 >= 0){
    if (matrix[i][j-1] == 1){
      n += 1;
    };
  };
  //RIGHT
  if (j + 1 < matrix[0].length){
    if (matrix[i][j+1] == 1){
      n += 1; 
    };
  };
  //TOP
  if(i - 1 >= 0){
    if(matrix[i-1][j] == 1){
      n += 1;
    };
    var a = i-1;
    //TOP-LEFT                    
    if(j - 1 >= 0){
      if(matrix[a][j-1] == 1){
        n += 1;
      };
    };
    //TOP-RIGHT
    if(j + 1 < matrix[0].length){
      if(matrix[a][j+1] == 1){
        n += 1;
      };
    };
  };
  //LOWER
  if(i + 1 < matrix.length){
    if(matrix[i+1][j] == 1){
      n += 1;
    };
    var b = i + 1;
    //LOWER LEFT
    if(j - 1 >= 0){
      if(matrix[b][j-1] == 1){
        n += 1;
      };
    };
    //LOWER-RIGHT
    if(j + 1 < matrix[0].length){
      if(matrix[b][j+1] == 1){
        n += 1;
      };
    };
  };
  return n;
};

