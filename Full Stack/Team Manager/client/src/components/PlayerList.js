import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
const PlayerList = (props) => {
    const {removeFromDom}= props;
    const [Players, setPlayers]= useState([]) ;


    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .then(navigate('/players/list'))  
            .catch(err => console.error(err));
    }
    

    return (
        <div>
            <table border={1} >
                <tr>
                    <td>Team Name</td>
                    <td>Preffered Position</td>
                    <td style={{width:100, padding:5}}>Actions </td>
                </tr>
            {props.Players.map( (player, i) =>
                <tr key={i}>
                    <td>{player.name}</td>
                    <td>{player.position }</td>
                    <td style={{width:100, padding:5}}><button style={{color:"white", backgroundColor:"red", width:100 }} onClick={(e)=>{deletePlayer(player._id)}}>
                        Delete
                    </button> </td>
                </tr>
            )}
            </table> 
        </div>
    )
}
    
export default PlayerList;


