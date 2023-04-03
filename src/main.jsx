import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './Screens/Projects'
import About from './Screens/About'
import HomePage from './Screens/HomePage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/Projects',
      element:<Projects/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {path:'/',
     element:<HomePage/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
