import './components.scss'

export default function Footer() {
    return (
        <>
            <footer className="footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 footer-section">
                            <div className="footer-logo">VisualGallery</div>
                            <p className="footer-about">
                                VisualGallery is a creative platform dedicated to showcasing high-quality
                                photography. We help designers, creators, and brands find inspiring visuals
                                for every project.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-section">
                            <h5>Explore</h5>
                            <ul className="footer-links">
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">Popular Photos</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Featured Artists</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-section">
                            <h5>Resources</h5>
                            <ul className="footer-links">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Usage License</a></li>
                                <li><a href="#">Contributor Guide</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 footer-section">
                            <h5>Stay Inspired</h5>
                            <p className="footer-about">
                                Join our newsletter to receive weekly photography inspiration,
                                featured collections, and creative insights directly to your inbox.
                            </p>
                            <div className="footer-newsletter">
                                <input type="email" placeholder="Enter your email" />
                                <button className="newsletter-btn">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <ul className="footer-bottom-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                        <p>© 2024 VisualGallery. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
