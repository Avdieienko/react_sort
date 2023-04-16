
export const getQuickSortAnimations = (array)=>{
    const animations = [];
    const sortArray = [...array];
    quickSortHelper(sortArray, 0, sortArray.length - 1, animations);
    return animations;
}

const quickSortHelper = (sortArray, startIdx, endIdx, animations) =>{
    if(endIdx <=startIdx) return;
    const part = partition(sortArray, startIdx, endIdx, animations);
    quickSortHelper(sortArray, startIdx, part-1,animations)
    quickSortHelper(sortArray, part+1, endIdx, animations)
}


const partition = (sortArray, startIdx, endIdx, animations) =>{
    let i = startIdx-1;
    const pivot = sortArray[endIdx];
    // push back pivot location to highlight it
    for(let j = startIdx;j<=endIdx-1;j++){
        if(i===-1){
            // push back i and j pointer but i = 0
            animations.push([0,j,true]);
            animations.push([0,j,false]);
        }
        else{
            // push back i and j pointers to highlight them
            animations.push([i,j,true])
            // push back i and j pointers to revert their color back
            animations.push([i,j,false])
        }

        if(sortArray[j]<pivot){
            i++;
            animations.push([i,j,sortArray[j],sortArray[i]])
            const temp = sortArray[i];
            sortArray[i] = sortArray[j];
            sortArray[j] = temp;
        }
    }
    i++;
    animations.push([i,endIdx,sortArray[endIdx],sortArray[i]])
    const temp = sortArray[i];
    sortArray[i] = sortArray[endIdx];
    sortArray[endIdx] = temp;

    return i;
}
