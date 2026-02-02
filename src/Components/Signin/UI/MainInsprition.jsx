import Carousel from 'react-bootstrap/Carousel';
import img3 from '../../../assets/Carousel03.jpg'
import img2 from '../../../assets/Carousel02.jpg'
import img6 from '../../../assets/imgcard4.jpg'
import img4 from '../../../assets/Carousel01.jpg'
import img5 from '../../../assets/imgcard6.jpg'
import img1 from '../../../assets/imgcard1.jpg'
import img7 from '../../../assets/imgcard2.jpg'
import card from '../../../assets/Card.jpg'
import Card from './Card';

function ControlledCarousel() {
    const cards = [
        {
            img: img1,
            title: "Creative Landscapes",
            text: "Explore breathtaking landscapes captured with a cinematic perspective, perfect for modern websites and visual storytelling."
        },
        {
            img: img2,
            title: "Urban Photography",
            text: "Discover the rhythm of city life through powerful urban compositions designed for blogs and digital brands."
        },
        {
            img: img4,
            title: "Nature & Wildlife",
            text: "Authentic moments from nature that bring calm, beauty, and realism into your creative projects."
        },
        {
            img: img5,
            title: "Minimal Aesthetic",
            text: "Clean and elegant imagery crafted for minimalist designs, portfolios, and professional layouts."
        },
        {
            img: img6,
            title: "People & Emotion",
            text: "Express genuine human emotion through carefully curated portraits and lifestyle photography."
        },
        {
            img: img7,
            title: "Creative Concepts",
            text: "Unique visual concepts designed to spark ideas and elevate your creative vision."
        }
    ];

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <p className='intro-text'>Where Visual Stories Begin</p>
            </div>

            <div className='container d-flex justify-content-center'>
                <div className='mt-5'>
                    <div>
                        <img src={img3} alt="" className='Carousel ' />
                        <p>
                            Discover a curated collection of high-quality photographs that capture emotions,
                            moments, and creative ideas. Every image is crafted to inspire designers,
                            creators, and visual storytellers around the world.
                        </p>
                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {cards.map((c) => (
                                <Card image={c.img} title={c.title} text={c.text} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card m-5" style={{ width: "400px" }}>
                        <img src={card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                Our platform provides carefully selected images that help your brand stand out.
                                All photos are optimized for performance, clarity, and visual impact.
                            </p>
                        </div>
                    </div>

                    <div
                        style={{ width: "200px" }}
                        className='d-flex m-5 justify-content-center align-items-center form-signin'
                    >
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                    style={{ color: "white" }}
                                >
                                    Get Weekly Photography Inspiration
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder='Email'
                                    style={{ borderRadius: 0 }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    width: "257px",
                                    borderRadius: 0,
                                    backgroundColor: "#888888"
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className="card" style={{ width: "400px" }}>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                                <p>Photo Categories</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Landscape Photography</li>
                                <li className="list-group-item">Street & Urban</li>
                                <li className="list-group-item">Nature & Wildlife</li>
                                <li className="list-group-item">Portrait & Lifestyle</li>
                                <li className="list-group-item">Minimal & Abstract</li>
                                <li className="list-group-item">Creative Concepts</li>
                                <li className="list-group-item">Travel & Culture</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ControlledCarousel;
