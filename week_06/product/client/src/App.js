
import "./App.css";
import ProductList from "./components/ProductList";
import Detail from "./views/Detail";
import { Router } from '@reach/router'
import Update from "./views/Update";

function App() {
  
  return (
    <div className="App">
      
      
     
      <Router>
        <ProductList path ="/products"/>
        <Detail path="/products/:id"/>
        <Update path="/products/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
