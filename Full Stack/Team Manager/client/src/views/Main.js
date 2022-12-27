import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import { Link } from "@reach/router"
    
const Main = (props) => {
    const [Players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    const removeFromDom = playerId => {
        setPlayers(Players.filter(player => player._id != playerId));
    }
    
    return (
        <div style={{marginLeft:10}}>
            <h1><Link to='/players/list' >Manage players </Link>|<Link to='/players/list' >Manage Player Status</Link></h1>
            <div style={{paddingLeft:10,
            width:900,
            height:350,
            marginBottom:10, 
            borderStyle: 'solid',
            borderColor:'black' }}>
            <h2><Link to='/players/list' >List </Link>|<Link to='/players/addplayer' > Add Player</Link></h2>
            {loaded && <PlayerList Players={Players} removeFromDom={removeFromDom} />}
            </div>
        </div>
    )
}
    
export default Main;



// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';


// const Main = (props) => {
//     const [people, setPeople] = useState([]);
//     const [loaded, setLoaded] = useState(false);
    
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/all')
//             .then(res=>{
//                 setPeople(res.data);
//                 setLoaded(true);
//             })
//             .catch(err => console.error(err));
//     },[]);

//     const removeFromDom = personId => {
//         setPeople(people.filter(person => person._id != personId));
//     }
// // export default () => {
// //     const [ message, setMessage ] = useState("Loading...")
// //     useEffect(()=>{
// //         axios.get("http://localhost:8000/api")
// //             .then(res=>setMessage(res.data.message))       
// //     }, []);
//     return (
//         <div>
//             {/* <h2>Message from the backend: {message}</h2> */}
//             <PersonForm/>
//             <hr></hr>
//             {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
//         </div>
//     )
// }

// export default Main;

