import {BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORT COMPONENTS
import LoginContainer from './Components/Connection/Login.Container';
import HomeContainer from './Components/Home/Home.Container';
import AdminContainer from './Components/Admin/Admin.Container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginContainer/>} />

        <Route path='/Home' element = {<HomeContainer/>} />
        
        <Route path='/Admin' element = {<AdminContainer/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
