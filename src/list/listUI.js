import Theme from '../context/themeContext';
import useDispatch from '../hooks/useDispatch';
import './listUI.css'

import { useContext, useState } from 'react';

function ListUI({task}){

    const theme=useContext(Theme);
    const[titleCSS,setTitleCSS]=useState("")
    const dispatch=useDispatch()

    function handleUpClick(e){
        e.stopPropagation();
        dispatch({type:'UP',payload:task.id})
    }

    function handleDownClick(){
        dispatch({type:'DOWN',payload:task.id})
        // let list=Data.list;
    }

    function handleTaskClick(){
        titleCSS==""?setTitleCSS("complete"):setTitleCSS("");
        
        console.log("click")
    }

    function handleDeleteClick(){
        console.log(task)
        dispatch({type:'DELETE',payload:task.id})
    }

    return(
    <div className={`task ${theme}`}>
        <div onClick={handleTaskClick} className={`${titleCSS} title_holder`} >
            <p>{task.title}</p>
        </div>
        <button className=""onClick={handleUpClick}>Up</button>
        <button onClick={handleDownClick}>Down</button>
        <button onClick={handleDeleteClick}>X</button>
    </div>
    )
}

export default ListUI;