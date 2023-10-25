import Carousel from 'react-bootstrap/Carousel';
import { useStateContext } from '../../assets/Context/ContextProvide';

function Tourslide() {
    const{tours}=useStateContext()
  return (
    <div cl>
 


    <Carousel>
        {tours?.map((tour)=>(
  <Carousel.Item key={tour._id} className='tour-slide'>
  <img src={tour.backdropImage} text="First slide" />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
        ))}
    
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

    </div>
  )
}

export default Tourslide