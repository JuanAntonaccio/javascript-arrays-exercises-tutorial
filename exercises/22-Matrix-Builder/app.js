// Code goes here
function matrixBuilder(number){
   let mat=[],[];
   for(let i=0;i<number;i++){
       for(let j=0;j<number;j++){
           mat[i][j]=(Math.floor(Math.random()*1));
       }
   }
   return mat;
}


// do not change anything from this line down
console.log(matrixBuilder(5));