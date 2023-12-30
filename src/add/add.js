import './add.css'
import {Data,changeIncomplete} from '../data'
import {useContext, useState} from 'react'
import Theme from '../context/themeContext'

function Add({addTask}){
    
    // let dataList=Data.list;
    const [newData,setNewData]=useState({repeat:false})
    const theme=useContext(Theme)

    function handleChange(e){
        setNewData({...newData,
            [e.target.name]:e.target.value
        })
        
    }

    function handleSubmitClick(e){
        e.preventDefault();
        e.stopPropagation();
        newData.repeat=(newData.repeat==='true');
        addTask({type:'ADD',payload:newData});
        // addTask(newData);
    }

    return(
        <div className={`${theme} body`}>
        <h2>Add</h2>
        <div className="addMenu">
            <form>
                <input onChange={handleChange} type='text' placeholder='Task' name="title"></input><br/><br/>
                <label>Repeat</label>
                <select onChange={handleChange} name="repeat">
                    <option value='false'>Off</option>
                    <option value='true'>On</option>
                </select>
                <button onClick={handleSubmitClick} >Submit</button>
            </form>
        </div>
        </div>

    )
}

export default Add;