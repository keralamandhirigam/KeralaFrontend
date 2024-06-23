import './App.css';
import { About } from './pages/about';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CreateForm } from './pages/forms/createForm';
import DataTable from './pages/data';
import { useState } from 'react';


function App() {
  const [auth] = useState( localStorage.getItem(`isUserLogged`));
  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={ auth ? <Home /> : <Navigate to="/login" />}>
          <Route path="home" element={<DataTable />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<CreateForm />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
};


export default App;
