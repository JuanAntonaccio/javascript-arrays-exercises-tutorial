var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

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

console.log(mergeArrays(chunk_one, chunk_two));