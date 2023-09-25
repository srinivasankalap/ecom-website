import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RootLayout from './Pages/Root';
import About from './Pages/About';
import Home from './Pages/Home';
  
const router=createBrowserRouter([
  {path: '/',
  element: <RootLayout/>,
  children:[
    {path: '/About', element: <About/>},
    {path: '/', element: <Home/>}
  ]
}
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
