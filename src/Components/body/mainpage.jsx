import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import './mainpage.css'
import logo from '../../assets/Logo.png'
import BG from '../../assets/MainBG.jpg'
import { useState } from 'react';
import axios from 'axios'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get("http://localhost:3003/Accounts")
            console.log(res)
            const account = res.data.find(
                (acc) => acc.user === email && acc.password === password

            );
            console.log(account)
            if (account) {
                alert("Dang nhap thanh cong!!")
            } else {
                alert("Sai mat khau!!")
            }
        } catch (err) {
            console.log(err)
            alert("Loi ket noi");
        }

    }

    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${BG})`,
            height: "90vh",
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
                        <Form.Label style={{ fontSize: 12 }}>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" style={{ height: 40, width: 250 }} onChange={(e) => setEmail(e.target.value)} />
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
                </Form>
            </Container >
        </div >
    );
}