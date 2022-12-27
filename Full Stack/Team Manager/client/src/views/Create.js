import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import { Link, navigate } from '@reach/router';

export default () => {
    const [Players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]); 

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res =>{ 
                setPlayers(res.data)
            });
    }, [])




    const createPlayer = player => {
        axios.post('http://localhost:8000/api/new', player)
            .then(res=>{setPlayers([...Players, res.data]);
                navigate("/players/list")} )
            .catch(err=>{const errorResponse = err.response.data.errors;
                        const errorArr = [];
                        for (const key in errorResponse) { // Loop through all errors and get the messages
                            errorArr.push(errorResponse[key].message)
                        }
                        // Set Errors
                        setErrors(errorArr);
                    })            
            }
    return (
        <div style={{margin:10}}>
            <h1><Link to='/players/list' >Manage players </Link>|<Link to='/players/list' >Manage Player Status</Link></h1>
            <div style={{paddingLeft:10,
            width:900,
            height:350,
            marginBottom:10, 
            borderStyle: 'solid',
            borderColor:'black' }}>
            <h2><Link to='/players/list' >List </Link>|<Link to='/players/addplayer' > Add Player</Link></h2>


            {/* <Link to='/' >Home</Link> */}
            <div style={{paddingLeft:10,marginLeft:10, height:250, width:800, borderStyle:"solid", borderColor:"black" }}>
            <h3>Add player:</h3>
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <PlayerForm onSubmitprop={createPlayer} initialName="" initialPosition="" />
            </div>
            </div>
        </div>
    )
}

