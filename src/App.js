import './App.css';
import { About } from './pages/about';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import { ViewContent } from './pages/view';
import { CreateForm } from './pages/forms/createForm';
import { useEffect } from 'react';
import DataTable from './pages/data';

const auth = window.localStorage.getItem(`isUserLogged`);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route index path="login" element={<Login />} />
//       <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />}>

//       {
//         auth ? <>
//         <Route index path="home" element={<ViewContent />} />
//         <Route path="about" element={<About />} />
//         <Route path="form" element={<CreateForm />} />
//         </> : <Navigate to="/login" />
//       }

//       </Route>
//       <Route path="*" element={<Error />} />
//     </>
//   )
// );


console.log(auth);

function App() {
  useEffect(() => {

    <Navigate to="/home" />

  }, [auth])



  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
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
