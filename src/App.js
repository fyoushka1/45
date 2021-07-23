import './App.css';
import Home from './page/Home/Home';
import { Route } from "react-router-dom"
import Cart from './page/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {Home} exact />
      <Route path = "/cart" component = {Cart} exact />
    </div>
  );
}

export default App;
