export const getSelectionSortAnimations = (array) =>{
    const animations = [];
    const sortArray = [...array];
    selectionSort(sortArray,sortArray.length, animations);
    return animations;
}

const selectionSort = (sortArray,n,animations)=>{
    for(let i = 0;i<n-1;i++){
        let iMin = i;
        animations.push([i,true])
        for (let j = i+1; j < n; j++) {
            animations.push([j,true])
            animations.push([j,false])
            if(sortArray[j]<sortArray[iMin]){
                iMin = j;
            }
        }
        if(iMin !== i){
            animations.push([i,iMin,sortArray[iMin],sortArray[i]])
            const temp = sortArray[i];
            sortArray[i] = sortArray[iMin];
            sortArray[iMin] = temp;
        }
        animations.push([i,false])

    }
}
