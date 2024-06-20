import './App.css';
import { CreateForm } from './pages/createForm';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} >
      <Route path="create" element={<CreateForm />} />

      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
