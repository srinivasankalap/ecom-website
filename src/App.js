import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RootLayout from './Pages/Root';
import About from './Pages/About/About';
import Store from './Pages/Store';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

const handleFormSubmit = async (formData) => {
  try {
    const response = await fetch(
      'https://e-com-bea02-default-rtdb.asia-southeast1.firebasedatabase.app/query.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit the form.');
    }

    console.log('Form Data submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};
  
const router=createBrowserRouter([
  {path: '/',
  element: <RootLayout/>,
  children:[
    {path: '/About', element: <About/>},
    {path: '/', element: <Store/>},
    {path: '/Home', element: <Home/>},
    { path: '/Contact', element: <Contact onSubmit={handleFormSubmit} /> },
  ]
}
])

function App() {
 
    return <RouterProvider router={router}/>
}

export default App;
