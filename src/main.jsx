import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router";
import Models from "./pages/Models.jsx"
import Technology from "./pages/Techonolgy.jsx"
import About from "./pages/About.jsx"
import Alert from "./pages/Alert.jsx"
import Contact from "./pages/Contact.jsx"
import Events from "./pages/Events.jsx"
import News from "./pages/News.jsx"
import { BrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,

  },
  {
    path:'/technology',
    element:<Technology/>,
  },
  {
        path:'/models',
        element:<Models/>
      },
      
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/alert',
        element:<Alert/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/event',
        element:<Events/>
      },
      {
        path:'/news',
        element:<News/>
      },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RouterProvider router={router}/>
    </BrowserRouter>
  </StrictMode>,
)
