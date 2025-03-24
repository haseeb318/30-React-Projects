import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import ErrorPage from './pages/ErrorPage';
import Favorite from './pages/favorite/Favorite';
import GlobalState from './context';
import { RecipesDetails } from './pages/recipes-details/RecipesDetails';

function App() {
  return (
    <BrowserRouter>
    <GlobalState>
      
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/detail/:id' element={<RecipesDetails />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
   
    </GlobalState>
    </BrowserRouter>
  );
}

export default App;
