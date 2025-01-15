import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./components/firstDemo/ShoppingCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
    </div>
  );
}

export default App;
