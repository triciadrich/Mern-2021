
import './App.css';
import { Router } from '@reach/router'
import AuthorList from './components/AuthorList';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorList path ="/"/>
        <Add path="/new"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
