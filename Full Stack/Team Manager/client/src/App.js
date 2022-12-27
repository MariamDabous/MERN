import React from 'react';
import {Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list" />
        {/* <Detail path="/people/:id" /> */}
        <Update path="/author/:id/edit"/>
        <Create path= "/players/addplayer" />
      </Router >
    </div>
  );
}
export default App;


