import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [responseData, setResponseData] = useState([]);
    const [load, setLoad]=useState(false)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(res=>{console.log(res); setResponseData(res.data.results);  })
            
    }, []); 
    return(
        <div>
            <button onClick={(e)=>setLoad(true)}>Fetch Pokemon</button>
            {load && responseData.map((item, i)=>{
                return  <p key={i}>{item.name}</p>
            }
            ) }

        </div>
    )
}

        // <div>
        //     <button onClick={(e)=>setLoad(true)}>Fetch Pokemon</button>
        //     {load && responseData.map((item, i)=>
        //          <p key={i}>{item.name}</p>
            
        //     ) }

        // </div>  
        // this is like the above one but we ommit the {} and return (when we put {} we have to put return)

export default Pokemon
