
// test Data
function lyricsGenerator(vector){
    let mcont = 0;
    let text = "";
    for(let i=0;i<vector.length;i++){
       if (vector[i] == 0){
           text += "Boom ";
       } else {
           text += "Drop the base ";
           mcont++;
           if (mcont==3){
               mcont = 0;
               text += "!!!Break the base!!! ";
           }
       }
    }
    return text.trim();
}
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))