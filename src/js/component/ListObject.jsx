import React, { useEffect, useState } from "react";

export default function ListObject(props){
    const [removeable,setRemoveable]=useState(false);
    const [xHover,setXHover]=useState(false);

    const removeItem=()=>{
        props.listObjects.forEach((element,it) => {
            if(element[0]===props.index){
                props.setListObjects([...props.listObjects.splice(0,it),...props.listObjects.splice(it+1,props.listObjects.length)])
f            }
        });
    }

    return(
        <div className="d-flex border" onMouseOver={()=>{setRemoveable(true)}} onMouseLeave={()=>{setRemoveable(false)}}>
            <div className="col p-2">
                {props.object}
            </div>
            <a className="btn p-2" onMouseOver={()=>{setXHover(true)}}f style={{opacity:xHover?0.2:1, display:removeable?'block':'none'}} onMouseLeave={()=>{setXHover(false)}} onClick={()=>{removeItem()}}>
                X
            </a>
        </div>
    )
}