import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../../src/assets/Logo.png'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Image src={logo} width={80} height={80} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Gallery</Nav.Link>
                        <Nav.Link href="#pricing">Collections</Nav.Link>
                        <NavDropdown title="Explore" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Landscape Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Urban & Street
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Portrait & Lifestyle
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Creative Concepts
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contribute</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
