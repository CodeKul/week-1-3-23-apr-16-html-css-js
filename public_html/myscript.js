/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function basics(){

    for(i = 0; i<10; i++){
        
        console.log(" value of i is - "+i);
    }
    
    var carName = "bmw";
    
    if(carName === "bmw"){
        console.log("it is bmw");
    }
    else {
        console.log("another car");
    }
    
    var j = 0;
    do {
        j++;
        if(j === 10) break;
        console.log("Value of j is "+j);
    }while(true)
}

function fewBasicClasses(){
    
    var dateObj = new Date();
    
    var currentDate = document.getElementById("currentDate");
    currentDate.innerHTML = " Current Date is "+dateObj.toString();
    
    var strSample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("String length - "+strSample.length);
    
    var myArr = [];
    myArr[0] = "India";
    myArr[1] = "China";
    myArr[2] = "Japan";
    for(i = 0; i < myArr.length;i++){
        console.log(" MyArr ["+i +"] = "+myArr[i]);
    }
    var myObj = {
        
        objOwner : "JavaScript",
        objSize : 10,
        objFun : function (){
            alert("Object function");
        }
    };
    
    console.log("Obj Owner - "+myObj.objOwner);
    myObj.objFun();
}
