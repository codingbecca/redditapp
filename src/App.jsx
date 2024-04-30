import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PostDetail from './components/Post/PostDetail';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/:postId' element={<PostDetail/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
