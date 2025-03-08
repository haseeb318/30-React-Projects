
import './App.css'
import TreeView from './Components/nested-menu'
import menus from './Components/nested-menu/data'

function App() {


  return (
    <>
    <TreeView menus={menus}/>
    </>
 
  )
}

export default App
