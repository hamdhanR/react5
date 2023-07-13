import { useState } from "react";
import { ReactDOM } from "react";

function Setclass(){
    const [color,setcolor]=useState("red")
    return(
        <div>
        <h1>i like {color} pencil</h1>
        <button onClick={()=>setcolor("blue")}>blue</button>
        <button onClick={()=>setcolor("pink")}>pink</button>
        <button onClick={()=>setcolor("voilet")}>violet</button>
        </div>
    )
}

export default Setclass