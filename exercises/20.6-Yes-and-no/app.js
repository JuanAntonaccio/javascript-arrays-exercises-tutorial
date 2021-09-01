let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let myFunction = function(valores){
    let resul = (valores==0)? "woko": "wiki";
    return resul;
}

console.log(theBools.map(myFunction));