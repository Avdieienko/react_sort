import { useState} from "react"
import './SortingVisualiser.css';
import { getMergeSortAnimations } from "../algorithms/MergeSort";
import { getQuickSortAnimations } from "../algorithms/QuickSort";
import { getBubbleSortAnimations } from "../algorithms/BubbleSort";
import { getSelectionSortAnimations } from "../algorithms/SelectionSort";

export const SortingVisualiser = ()=>{
    const [size,setSize] = useState(5)
    const [elements,setElements] = useState([40,45,60,50,76])
    const [isSorting,setIsSorting] = useState(false)
    const [animationSpeed, setAnimationSpeed] = useState(30)
    const BASECOLOR = "white";
    const PIVOTCOLOR = "purple"
    const COMPARECOLOR = "red";
    const FINISHCOLOR = "green"



    const ElementColumn = (props)=>{
        const elementWidth = 50/props.size
        const elementHeight = props.num-39
        return(
        <>
            <div className="element" style={{width:`${elementWidth}vw`, height:`${elementHeight}vh`}}></div>
        </>
        )
    }


    const createArray = (num_elements)=>{
        if(isSorting) return;
        setSize(num_elements)
        const temp_elements  = []
        const min = 40;
        const max = 100;
        for(let i =0;i<num_elements;i++){
            const rand = Math.round(min + Math.random() * (max - min));
            temp_elements.push(rand)
        }
        setElements(temp_elements)
    }

    const MergeSort = ()=>{
        if(isSorting) return;
        setIsSorting(true)
        const animations = getMergeSortAnimations(elements)
        setTimeout(()=>{
            for (let i = 0;i<animations.length;i++){
                const element = document.getElementsByClassName("element");
                const isColor = i%3 !== 2;
                if(isColor){
                    const [leftElementIdx, rightElementIdx] = animations[i];
                    const colour = i%3 === 0 ? COMPARECOLOR : BASECOLOR;
                    const leftElementStyle = element[leftElementIdx].style;
                    const rightElementStyle = element[rightElementIdx].style;
                    setTimeout(()=>{
                        leftElementStyle.backgroundColor = colour;
                        rightElementStyle.backgroundColor = colour;
                    }, i*animationSpeed)
                }
                else{
                    setTimeout(()=>{
                        const[elementIdx, elementHeight] = animations[i];
                        const elementStyle = element[elementIdx].style;
                        elementStyle.height = `${elementHeight-39}vh`;
                    }, i*animationSpeed)
                }
            }
        })
        setTimeout(()=>{
            animateSortedArray();
        },animations.length*animationSpeed+100)
    }


    const QuickSort = ()=>{
        if(isSorting) return;
        setIsSorting(true)
        const animations = getQuickSortAnimations(elements)
        setTimeout(()=>{
            for(let i = 0;i<animations.length;i++){
                const element = document.getElementsByClassName("element");
                const isColor = animations[i].length === 3;
                const isPivot = animations[i].length === 2;
                const isSwap = animations[i].length === 4;
                if(isPivot){
                    const [pivotIdx, pivotBool] = animations[i];
                    const colour = pivotBool? PIVOTCOLOR:BASECOLOR;
                    const pivotStyle = element[pivotIdx].style;
                    setTimeout(()=>{
                    pivotStyle.backgroundColor = colour;
                    },i*animationSpeed)
                }
                if(isColor){
                    const [leftElementIdx, rightElementIdx,bool] = animations[i]
                    const colour = bool? COMPARECOLOR:BASECOLOR;
                    const leftElementStyle = element[leftElementIdx].style;
                    const rightElementStyle = element[rightElementIdx].style;
                    setTimeout(()=>{
                    leftElementStyle.backgroundColor = colour;
                    rightElementStyle.backgroundColor = colour;
                    },i*animationSpeed)
                }
                if(isSwap){
                    setTimeout(()=>{
                    const[leftIdx, rightIdx, leftHeight, rightHeight] = animations[i];
                    const leftStyle = element[leftIdx].style;
                    const rightStyle = element[rightIdx].style;
                    leftStyle.height = `${leftHeight-39}vh`
                    rightStyle.height = `${rightHeight-39}vh`
                    }, i*animationSpeed)
                }
            }
        })
        setTimeout(()=>{
            animateSortedArray();
        },animations.length*animationSpeed+100)
    }


    const BubbleSort = ()=>{
        if(isSorting) return;
        setIsSorting(true)
        const animations = getBubbleSortAnimations(elements)
        setTimeout(()=>{
            for(let i = 0;i<animations.length;i++){
                const element = document.getElementsByClassName("element");
                const isColor = animations[i].length === 3;
                if(isColor){
                    const [leftElementIdx, rightElementIdx, isActive] = animations[i];
                    const colour = isActive?COMPARECOLOR:BASECOLOR;
                    const leftElementStyle = element[leftElementIdx].style;
                    const rightElementStyle = element[rightElementIdx].style;
                    setTimeout(()=>{
                    leftElementStyle.backgroundColor = colour;
                    rightElementStyle.backgroundColor = colour;
                    },i*animationSpeed)
                }
                else{
                    setTimeout(()=>{
                    const[leftIdx, rightIdx, leftHeight, rightHeight] = animations[i];
                    const leftStyle = element[leftIdx].style;
                    const rightStyle = element[rightIdx].style;
                    leftStyle.height = `${leftHeight-39}vh`
                    rightStyle.height = `${rightHeight-39}vh`
                    }, i*animationSpeed)
                }
                }
        })
        setTimeout(()=>{
            animateSortedArray();
        },animations.length*animationSpeed+100)
    }


    const SelectionSort = ()=>{
        if(isSorting) return;
        setIsSorting(true)
        const animations = getSelectionSortAnimations(elements);
        setTimeout(()=>{
            for(let i = 0;i<animations.length;i++){
                const element = document.getElementsByClassName("element");
                const isColor = animations[i].length === 2;
                if(isColor){
                    const [elementIdx, isActive] = animations[i]
                    const colour = isActive?COMPARECOLOR:BASECOLOR;
                    const elementStyle = element[elementIdx].style;
                    setTimeout(()=>{
                        elementStyle.backgroundColor = colour;
                    },i*animationSpeed)
                }
                else{
                    setTimeout(()=>{
                        const[leftIdx, rightIdx, leftHeight, rightHeight] = animations[i];
                        const leftStyle = element[leftIdx].style;
                        const rightStyle = element[rightIdx].style;
                        leftStyle.height = `${leftHeight-39}vh`
                        rightStyle.height = `${rightHeight-39}vh`
                    }, i*animationSpeed)
                }
            }
        })
        setTimeout(()=>{
            animateSortedArray();
        },animations.length*animationSpeed+100)
    }


    const animateSortedArray = ()=>{

        const finishedElements = document.getElementsByClassName("element")
        for(let i = 0;i<finishedElements.length;i++){
            const finishedElementStyle = finishedElements[i].style;
            setTimeout(()=>{
                finishedElementStyle.backgroundColor = FINISHCOLOR
            },i*10)
        }
        setTimeout(()=>{
            setIsSorting(false)
        },finishedElements.length*20)
    }


    return (
        <>
        <div className="App">
            <div className="settings_wrapper">
            <div className="size_wrapper">
                <label htmlFor="size" id="size_label">Size: </label>
                <input
                type="range"
                id="size"
                className="size_array_input"
                min="5" max="100"
                onChange={(e)=>createArray(e.target.value)}
                value={size}
                disabled = {isSorting?"disabled":""}
                ></input>
                <h1>{size}</h1>
            </div>
            <div className="speed_wrapper">
                <label htmlFor="speed" id="speed_label">Speed: </label>
                <input
                type="range"
                id="speed"
                className="speed_input"
                min="1" max="50"
                onChange={(e)=>setAnimationSpeed((e.target.value))}
                value={animationSpeed}
                disabled = {isSorting?"disabled":""}
                ></input>
                <h1>{animationSpeed}</h1>
            </div>
            <div className="generate_array">
                <div onClick={()=>createArray(size)} className="generate"><p>Generate new array</p></div>
            </div>
            <div className="sorter_wrapper">
                <div onClick={MergeSort}><p>Merge Sort</p></div>
                <div onClick={QuickSort}><p>Quick Sort</p></div>
                <div onClick={BubbleSort}><p>Buble Sort</p></div>
                <div onClick={SelectionSort}><p>Selection Sort</p></div>
            </div>
            </div>
            <div className="sorting_wrapper">
            {elements.map((element,i)=><ElementColumn num={element} key={i} size={size}></ElementColumn>)}
            </div>
        </div>
        </>
    );
}
