let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(matriz){
  let mdisp=0;
  let mocu=0;
  for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
      if (matriz[i][j]==1){
        mocu++;
      }
      if (matriz[i][j]==2){
        mdisp++;
      } 
      

    }
    
  }
  let mtotal=mocu+mdisp;
    const state = {
      totalSlots: mtotal,
      availableSlots: mdisp,
      occupiedSlots: mocu
    }
    
    return state;
}
console.log(getParkingLotState(parking_state))