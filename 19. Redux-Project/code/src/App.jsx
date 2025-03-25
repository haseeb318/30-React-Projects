import {BrowserRouter, Route, Routes} from "react-router-dom"
import{  Home } from "./pages/Home"
import  ProductTile from "./pages/Cart"
import Header from "./components/Header"
import ErrorPage from "./pages/ErrorPage"
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter> 
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={< ProductTile/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>   
    </BrowserRouter>
    </Provider>
    </>
 
  )
}

export default App
