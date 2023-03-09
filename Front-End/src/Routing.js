import React from 'react';

import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import RegistrationForm from './Post';
import Get from './Get';
import UpdateForm from './Put';
function Routing(){
    return(
        <>
        <Router>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/Post" class="nav-link">Fill details</Link>
  </li>
  <li class="nav-item">
    <Link to="/Get" class="nav-link">Get details</Link>
  </li>
  <li class="nav-item">
    <Link to="/Put" class="nav-link">Update details</Link>
  </li>

  
</ul>
<Routes>
  <Route path="/Post" element={<RegistrationForm/>}/>
  <Route path="/Get" element={<Get/>}/>
  <Route path="/Put" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
        </>
    );
}
export default Routing;