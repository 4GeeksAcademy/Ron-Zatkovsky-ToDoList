import React, { useEffect, useState } from "react";
import ListObject from "./ListObject";

export default function ToDoList(){
    const [listObjects,setListObjects]=useState([]);
    const [entry,setEntry]=useState("");
    const [index,setIndex]=useState(0);
    
    const handleEnter=(entry)=>{
        setListObjects([...listObjects,[index,entry]])
        setEntry("");
        setIndex(index+1);
    }

    useEffect(()=>{
        console.log(index);
    },[index])
    return(
        <div>
            <div>
                <input 
                    placeholder="What needs to be done?"
                    value={entry}
                    onChange={(e)=>{setEntry(e.target.value)}}
                    onKeyUp={(e)=>{e.key==="Enter"?handleEnter(entry):null}}
                ></input>
            </div>
            {listObjects.map(([index,object])=>{
                return(
                    <div key={index}>
                        <ListObject object={object} index={index} listObjects={listObjects} setListObjects={setListObjects}/>
                    </div>
                );
            })}
        </div>
    )
}