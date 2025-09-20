import Carousel from 'react-bootstrap/Carousel';
import img3 from '../../assets/Carousel03.jpg'
import img2 from '../../assets/Carousel02.jpg'
import img6 from '../../assets/imgcard4.jpg'
import img4 from '../../assets/Carousel01.jpg'
import img5 from '../../assets/imgcard6.jpg'
import img1 from '../../assets/imgcard1.jpg'
import img7 from '../../assets/imgcard2.jpg'
import card from '../../assets/Card.jpg'

function ControlledCarousel() {


    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <p className='intro-text'>Origin of ides</p>
            </div>
            <div className='container d-flex justify-content-center'>
                <div className='mt-5'>
                    <div>
                        <img src={img3} alt="" className='Carousel ' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum! Error, eaque pariatur quidem corrupt quisquam?</p>
                    </div>
                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img4} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptatlendus deserunt laboriosam tempore, alias labore inventore impedit repudiandae. Impedit alias quisquam laborum saepe eaque.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img5} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img6} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={img7} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card m-5" style={{ width: "400px" }}>
                        <img src={card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div style={{ width: "200px" }} className='d-flex m-5 justify-content-center align-items-center form-signin'>
                        <form className=''>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Subscribe to My Newsletter</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder='Email'
                                    style={{ borderRadius: 0 }}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary"
                                style={{ width: "257px", borderRadius: 0, backgroundColor: "#888888" }}>Subscribe</button>
                        </form>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="card" style={{ width: "400px" }}>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                                <p>Categories</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ControlledCarousel;