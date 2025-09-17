import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/Carousel01.jpg'
import img2 from '../../assets/Carousel02.jpg'
import img3 from '../../assets/Carousel03.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div
                    className="Carousel"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='Carousel'
                    style={{ backgroundImage: `url(${img2})` }}
                >
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='Carousel'
                    style={{ backgroundImage: `url(${img3})` }}
                >
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;