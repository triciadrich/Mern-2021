
import { Router } from '@reach/router';
import './App.css';
import Add from './components/Add';
import Detail from './components/detail';
import Edit from './components/Edit';
import PetList from './components/PetList';

function App() {
  return (
    <div>
     <Router>
       <PetList path="/"/>
       <Add path="/new"/>
       <Detail path="/details/:id"/>
       <Edit path="/edit/:id"/>
     </Router>
    </div>
  );
}

export default App;
