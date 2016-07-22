// You Dont Need Jquery ;D
"use strict";

function createWorld(){
	var rows = document.querySelector(".rows").value;
	var columns = document.querySelector(".columns").value;
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
        html += "<td class='cell'>" + matrix[i][j]+"</td>";
      }else if(matrix[i][j] == 1){
        html += "<td class='cell active' onclick=''>" + matrix[i][j]+"</td>";
      };
      //html += "<td class='cell'>" + "matrix["+i+"]["+j+"]</td>"; Here you can check the position [?][?]
    };
    html += "</tr>";
  };
  html += "</table>";
  document.querySelector(".world").innerHTML = html;
};