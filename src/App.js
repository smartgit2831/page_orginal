import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { MyContext } from './component/Context';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Detail from './pages/Detail';
import More from './pages/More';
import CreatePost from './component/CreatePost';
import Search from './pages/Search';
import Buy from './pages/Buy';
import Edit from './pages/Edit';

console.log(window.location.pathname);
function App() {
  return (
    <div className={'App'} >
      <MyContext>
      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
          <Route path='/smartgit2831/page_orginal' element={<Navigate to='/'/>}/>
          <Route path='/:name/:id' element={<Detail/>}/>
          <Route path='/edit/:name/:id' element={<Edit/>}/>
          <Route path='/more/:name' element={<More/>}/>
          <Route path='/creatpost/:name' element={<CreatePost/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/buy' element={<Buy/>}/>
          
        </Routes>
        <Footer/>

      </BrowserRouter>
      </MyContext>
    </div>
  );
}

export default App;
