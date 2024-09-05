
import './App.css';
import Home from './components/home';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import LandingPage from './components/landingPage';
import Profile from './components/profile';

const router=createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/main",
    element:<Home/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  );
}
// 
export default App;
