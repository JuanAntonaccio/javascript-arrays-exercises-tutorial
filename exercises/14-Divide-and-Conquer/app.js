let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    for(let i=0;i<firstArray.length;i++){
        newArray.push(firstArray[i]);
    }

    //your code here
    for(let i=0;i<secondArray.length;i++){
        newArray.push(secondArray[i]);
    }
    console.log(newArray.length);
    console.log(firstArray.length);
    console.log(secondArray.length);
    return newArray
}

const mergeTwoList= (lista) => {
    let odd=[];
    let even=[];
    for(let i=0;i<lista.length;i++){

        (lista[i]%2==0)?even.push(lista[i]):odd.push(lista[i]);
    }

    
    return mergeArrays(odd,even);
}






console.log(mergeTwoList(list_of_numbers))
