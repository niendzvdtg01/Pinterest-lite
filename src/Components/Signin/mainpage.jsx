import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import './mainpage.scss'
import logo from '../../assets/Logo.png'
import BG from '../../assets/MainBG.jpg'
import { useState } from 'react';
import SigninPopup from './SigninPopup';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login({ user }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [click, setClick] = useState(false)
    const naviagate = useNavigate();
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const account = user.find(
                (acc) => acc.username === username && acc.userpassword === password
            );
            console.log(account)
            if (account) {
                alert("Dang nhap thanh cong!!")
                naviagate("/home")
            } else {
                alert("Sai mat khau!!")
            }
        } catch (err) {
            console.log(err)
            alert("Loi ket noi");
        }
    }

    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${BG})`,
                width: "100%",
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                objectFit: "contain"
            }}>
                <Container fluid="xxl" className='d-flex justify-content-between'>
                    <div className='quote-text'>
                        <p>Login to explore Your Ideas</p>
                    </div>
                    <Form className='custom-form d-flex' onSubmit={handleSubmit}>
                        <Image src={logo} width={100} />
                        <div className='logo'>
                            <h1>Welcome To T-WILD</h1>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail" size="lg">
                            <Form.Label style={{ fontSize: 12 }}>User name</Form.Label>
                            <Form.Control type="text" value={username} placeholder="Enter username" style={{ height: 40, width: 250 }} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: 12 }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{ height: 40, width: 250 }} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: 250 }}>
                            Submit
                        </Button>
                        <div className='create-acc'>
                            <p>Don't have account, <a style={{ color: "blue", cursor: "pointer" }} onClick={() => { setClick(true) }}>join us</a></p>
                        </div>
                    </Form>
                </Container >
            </div >
            <SigninPopup trigger={click} setTrigger={setClick} />
        </>
    );
}