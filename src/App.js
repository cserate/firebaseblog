import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';

// import AddArticle from './pages/AddArticle/AddArticle';



function App() {
  return (
    <div className='App'>
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />
          {/* <Route path='/auth' element={<Auth />} />
          <Route path='/addarticle' element={<AddArticle />} /> */}
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;
