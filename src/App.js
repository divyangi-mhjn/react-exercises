import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneratorHome from './exercises/passwordGenerator/GeneratorHome'
import EmiHome from './exercises/emiCalculator/EmiHome';
import SearchHome from './exercises/SearchBar/SearchBarHome';
import ProgressBarHome from './exercises/ProgressBar/ProgressBarHome';
import ModalHome from './exercises/Modal/ModalHome';
import NavBar from './NavBar';

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/search" element={<SearchHome />} />
          <Route path="/password" element={<GeneratorHome />} />
          <Route path="/emi" element={<EmiHome />} />
          <Route path="/progressBar" element={<ProgressBarHome />} />
          <Route path="/modal" element={<ModalHome />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
