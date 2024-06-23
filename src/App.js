import './App.css';
import { About } from './pages/about';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ViewContent } from './pages/view';
import { CreateForm } from './pages/forms/createForm';
// const auth = sessionStorage.getItem("isUserLogged");

const auth = window.localStorage.getItem(`isUserLogged`);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="login" element={<Login />} />
      <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />}>
        <Route index path="home" element={<ViewContent />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<CreateForm />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);


console.log(auth);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
