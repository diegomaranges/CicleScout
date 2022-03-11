import './App.css';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import ObjAndAreas from './Components/ObjAndAreas/ObjAndAreas';
import Header from './Components/Header/Header';
import Activities from "./Components/Activities/Activities";

function App() {
    //console.log = console.warn = console.error = () => {};
    
    return (
        <BrowserRouter>
            <div className="container-xxl">
                <Header></Header>
                    <Routes>
                        <Route path="/objetives" element={<ObjAndAreas />}></Route>
                        <Route path="/" element={<Activities />}></Route>
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
