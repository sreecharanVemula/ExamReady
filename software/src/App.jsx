import logo from './logo.svg';
import './App.css';
import Subjects from './Modules/Subjects';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Router, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Spage from './Modules/Spage';
import Roots from './Modules/Roots';
 import { useEffect } from 'react';
import { useState } from 'react';
import Qpage from './Modules/Qpage';
import Anspage from './Modules/Anspage';
function App() {
  let [data,setData]=useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/subjects`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  let router=createBrowserRouter(
    [
      {
        path:'',
        element:<Roots/>,
        children:
        [
          {
            path:'',
            element:<Subjects/>
            
          },
          {
            path:'maths',
            element:<Spage datas={data[0]}/>
          },
          {
            path:'physics',
            element:<Spage datas={data[1]}/>
          },
          {
            path:'chemistry',
            element:<Spage datas={data[2]}/>
          },
          {
            path:'qpage',
            element:<Qpage/>
          },
          {
            path:'anspage',
            element:<Anspage/>
          }

          
        ]
      }
    ]
    )
    return(
      <div className="App">
      <RouterProvider router={router}/>
    </div>
    )
}

export default App;
