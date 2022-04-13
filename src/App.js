import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Loader, NavBar, Footer } from './components'
import { useSelector } from 'react-redux';


function App() {
  const loader = useSelector(state => state.loader)

  return (

      
      <HashRouter>
        <NavBar /> 
        {loader && <Loader/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
