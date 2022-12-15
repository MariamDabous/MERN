import React, { useState } from 'react'

const ToDoList = () => {

    const [mission,setMission]=useState([])
    const[onemission, setOneMission]=useState({})
    // const [isDone, setIsDone] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        addfun(onemission);

    }

    const addfun =(x)=>{
        setMission([...mission,x])
    }

const fun=(e)=>{
    setOneMission({
        content:e.target.value,
        done:false
    })
}
const fun2=(e,item)=>{
    console.log(item.done)
    item.done=!item.done
   
}

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={fun} /><br></br>
        <input type="submit" value="Add"/>
      </form>
      <hr></hr>
      <div>
    
      
            { mission.map( (item, i) =>
            <div>
               
                    <input type="checkbox" key={i} onChange={(e,item)=>fun2(e,item)}/>    {item.content}
               
            </div> ) }
                
            

       
      </div>

    </div>
  )
}

export default ToDoList
