//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout';
import PostDetail from './components/Post/PostDetail';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:postId',
        element: <PostDetail />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
    
  )
}

export default App
