import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response =>{  return response.json()})
            .then(response => setPeople({ pok:response.results}))
    }, []);
  return (
    <div>
        <br></br>
        {/* <button onClick={} >Fetch Pokemon</button> */}
        {people.pok ? people.pok.map((item, index) => {
            return(<div key={index}>{item.name}</div>) }
        ):null}

    </div>
  );
}

export default Pokemon
