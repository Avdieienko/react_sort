export const getBubbleSortAnimations = (array) =>{
    const animations = [];
    const sortArray = [...array];
    bubbleSort(sortArray,sortArray.length, animations);
    return animations;
}

const bubbleSort = (sortArray, n, animations)=>{
    for(let i=0;i<n;i++){
        for(let j=0;j<n -i-1;j++){
            animations.push([j,j+1,true])
            animations.push([j,j+1,false])
            if(sortArray[j]>sortArray[j+1]){
                animations.push([j,j+1,sortArray[j+1],sortArray[j]])
                const temp = sortArray[j];
                sortArray[j] = sortArray[j+1];
                sortArray[j+1] = temp;
            }
        }
    }
}