import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import FacultyScreen from "./screen/FacultyScreen";
import AluminiScreen from "./screen/AluminiScreen";
import InfrastructureScreen from "./screen/InfrastructureScreen";
import PlacementScreen from "./screen/PlacementScreen";
import DepartmentsScreen from "./screen/DepartmentsScreen";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>} /> 
          <Route path='/about' element={<AboutScreen />} />    
          <Route path='/faculty' element={<FacultyScreen />} /> 
          <Route path='/alumini' element={<AluminiScreen />} />
          <Route path='/infrastructure' element={<InfrastructureScreen />} />
          <Route path='/placement' element={<PlacementScreen />} />
          <Route path='/departments' element={<DepartmentsScreen />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
