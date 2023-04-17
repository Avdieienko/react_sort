export const getMergeSortAnimations = (array)=>{
    const animations = [];
    const sortArray = [...array];
    const mainArray = [...array]
    mergeSortHelper(mainArray, 0, array.length-1, sortArray, animations)
    // animation has form of [[indexes that are compared],
    // [indexes that are compared],
    //  [index to change, height to which chenga the bar]]
    return animations;
}


const mergeSortHelper = (mainArray, startIdx, endIdx, sortArray, animations) =>{
    if(startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(sortArray, startIdx, midIdx, mainArray, animations);
    mergeSortHelper(sortArray, midIdx+1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, midIdx,endIdx,sortArray,animations);
}


const merge = (mainArray, startIdx, midIdx, endIdx, sortArray, animations) =>{
    let k = startIdx;
    let i = startIdx;
    let j = midIdx+1;
    while(i<=midIdx && j<=endIdx){
        // Push back compared indexes to highlight them
        animations.push([i,j]);
        // Push back compared indexes to revert their color back;
        animations.push([i,j])
        // If element from left part is less than element from right part
        if(sortArray[i]<=sortArray[j]){
            animations.push([k,sortArray[i]])
            mainArray[k++] = sortArray[i++]
        }
        else{
            animations.push([k,sortArray[j]])
            mainArray[k++] = sortArray[j++]
        }
    }
    while(i<=midIdx){
        // Push back compared indexes to highlight them
        animations.push([i,i]);
        // Push back compared indexes to revert their color back;
        animations.push([i,i])
        // As we know that right part was fully iterated,
        // we just leave compared elements as in case of left part is less than right part are
        animations.push([k,sortArray[i]])
        mainArray[k++] = sortArray[i++]
    }
    while(j<=endIdx){
        // Push back compared indexes to highlight them
        animations.push([j,j]);
        // Push back compared indexes to revert their color back;
        animations.push([j,j])
        // As we know that left part was fully iterated,
        // we just leave compared elements as in case of left part is bigger than right part
        animations.push([k,sortArray[j]])
        mainArray[k++] = sortArray[j++]
    }
}