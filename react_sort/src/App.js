import { useState} from "react"
import './App.css';
import { getMergeSortAnimations } from "./algorithms/MergeSort";
import { getQuickSortAnimations } from "./algorithms/QuickSort";





function App() {
  const [size,setSize] = useState(5)
  const [elements,setElements] = useState([40,45,60,50,76])
  const BASECOLOR = "white";
  const PIVOTCOLOR = "purple"
  const COMPARECOLOR = "red";
  const ANIMATION_DELAY = 30;
  const FINISHCOLOR = "green"



  const ElementColumn = (props)=>{
    const elementWidth = 20/props.size
    const elementHeight = props.num-39
    return(
      <>
        <div className="element" style={{width:`${elementWidth}vw`, height:`${elementHeight}vh`}}></div>
      </>
    )
  }


  const createArray = (num_elements)=>{
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
    const animations = getMergeSortAnimations(elements)
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
        }, i*ANIMATION_DELAY)
      }
      else{
        setTimeout(()=>{
          const[elementIdx, elementHeight] = animations[i];
          const elementStyle = element[elementIdx].style;
          elementStyle.height = `${elementHeight-39}vh`;
        }, i*ANIMATION_DELAY)
      }
      setTimeout(()=>{
        animateSortedArray();
      },animations.length*ANIMATION_DELAY)
    }
  }


  const QuickSort = ()=>{
    const animations = getQuickSortAnimations(elements)
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
        },i*ANIMATION_DELAY)
      }
      if(isColor){
        const [leftElementIdx, rightElementIdx,bool] = animations[i]
        const colour = bool? COMPARECOLOR:BASECOLOR;
        const leftElementStyle = element[leftElementIdx].style;
        const rightElementStyle = element[rightElementIdx].style;
        setTimeout(()=>{
          leftElementStyle.backgroundColor = colour;
          rightElementStyle.backgroundColor = colour;
        },i*ANIMATION_DELAY)
      }
      if(isSwap){
        setTimeout(()=>{
          const[leftIdx, rightIdx, leftHeight, rightHeight] = animations[i];
          const leftStyle = element[leftIdx].style;
          const rightStyle = element[rightIdx].style;
          leftStyle.height = `${leftHeight-39}vh`
          rightStyle.height = `${rightHeight-39}vh`
        }, i*ANIMATION_DELAY)
      }
      setTimeout(()=>{
        animateSortedArray();
      },animations.length*ANIMATION_DELAY)
    }
  }


  const animateSortedArray = ()=>{
    const finishedElements = document.getElementsByClassName("element")
    for(let i = 0;i<elements.length;i++){
      const finishedElementStyle = finishedElements[i].style;
      setTimeout(()=>{
        finishedElementStyle.backgroundColor = FINISHCOLOR
      },i*ANIMATION_DELAY)
    }
  }


  return (
    <>
      <div className="App">
        <div className="sorting_wrapper">
          {elements.map((element,i)=><ElementColumn num={element} key={i} size={size}></ElementColumn>)}
        </div>
        <div className="settings_wrapper">
          <div className="size_wrapper">
            <label htmlFor="size" id="size_label">Size</label>
            <input type="range" id="size" className="size_array_input" min="5" max="100" onChange={(e)=>createArray(e.target.value)} value={size}></input>
            <h1>{size}</h1>
          </div>
          <div className="sorter_wrapper">
            <div onClick={MergeSort}><p>Merge Sort</p></div>
            <div onClick={QuickSort}><p>Quick Sort</p></div>
            <div><p>Buble Sort</p></div>
            <div><p>Selections Sort</p></div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
