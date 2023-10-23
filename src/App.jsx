
import './App.css'

import ControlledCarousel from './Slider'
import Slider from './Slider'
import Thumbnail from './components/Thumbnail/Thumbnail'
import About from './components/pages/About'
import Amazing from './components/pages/Amazing'
import Offers from './components/pages/Offers'
import Tourslide from './components/pages/Tourslide'
function App() {
  
  return (
    <>
      <div className='main'>
<Thumbnail />
<About/>
<Amazing />


      </div>
    </>
  )
}

export default App
