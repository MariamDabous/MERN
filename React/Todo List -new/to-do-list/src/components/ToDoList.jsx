import React, { useState } from 'react'

const ToDoList = () => {
    const style1={
      textDecoration: "line-through"
    }
    // let style2={
    //   color: 'pink',
    //   textDecoration: "none"
    // }


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
const fun2=(id)=>{
    console.log(id);
    console.log(mission[id].done)
    // item.done=!item.done
    mission[id].done= !mission[id].done
    setMission([...mission])
    // while(mission[id].done){
    //   style1= {style2
    //   }
    // }
}

const deletefun=(id)=>{
  
  setMission(mission.filter((onemission,i)=>i!=id))

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
            
               
                    <p key={i}  style={item.done ? style1: null} ><input type="checkbox" checked={item.done}  onChange={(e)=>fun2(i)}/>  
                      {item.content} 
                      <button onClick={e=>deletefun(i)} >Delete</button>
                      </p>
               
            ) }
                
            

       
      </div>

    </div>
  )
}

export default ToDoList
