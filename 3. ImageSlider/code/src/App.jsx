import ImageSlider from './components/image-slider/ImageSlider'
import './App.css'

function App() {


  return (<>
<ImageSlider url={'https://picsum.photos/v2/list'} 
  page={10}
  limit={"10"}/>
  </>
 
  )
}

export default App
