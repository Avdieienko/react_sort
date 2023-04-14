import {useState} from "react"
import './App.css';





function App() {
  const ElementColumn = (props)=>{
    const elementWidth = 10/props.size
    const elementHeight = props.num-39
    return(
      <>
        <div className="element" style={{width:`${elementWidth}vw`, height:`${elementHeight}vh`}}></div>
      </>
    )
  }

  const [size, setSize] = useState(5)

  const createArray = (num_elements)=>{
    const elements  = []
    const min = 40;
    const max = 100;
    for(let i =0;i<num_elements;i++){
      const rand = Math.round(min + Math.random() * (max - min));
      elements.push(rand)
    }
    return(
    <>
      {elements.map((element,i)=><ElementColumn num={element} key={i} size={size}></ElementColumn>)}
    </>
    )

    // for(let i = 0;i<numelement;i++){
    //   elements.push(<ElementColumn num={rand}></ElementColumn>)
    // }
  }

  return (
    <div className="App">
      <div className="sorting_wrapper">
        {createArray(size)}
      </div>
      <div className="settings_wrapper">
        <div className="size_wrapper">
          <label for="size" id="size_label">Size</label>
          <input type="range" id="size" className="size_array_input" min="5" max="100" onChange={(e)=>setSize(e.target.value)} value={size}></input>
          <h1>{size}</h1>
        </div>
        <div className="sorter_wrapper">
          <div><p>Merge Sort</p></div>
          <div><p>Quick Sort</p></div>
          <div><p>Buble Sort</p></div>
          <div><p>Selections Sort</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
