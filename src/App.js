import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee,fas);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
