import { useContext, useState } from "react";
import { UserContext } from "../API/UserContext";
import { toast } from 'react-toastify';

// public UserCreation(String username, String email, String userpassword, String firstname, String lastname) {
//     this.username = username;
//     this.email = email;
//     this.userpassword = userpassword;
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
export default function SigninPopup(props) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        userpassword: "",
        firstname: "",
        lastname: ""
    })
    const context = useContext(UserContext)
    console.log(form)
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        context.handleCreateUser(form);
        toast.success("Upload thanh cong!!");
    }
    return (props.trigger) ? (
        <>
            <div className="popup-overlay">
                <div className="popup">
                    <div className="popup-header">
                        <h2>Sign up</h2>
                        <button className="close-btn" onClick={() => { props.setTrigger(false) }}>×</button>
                    </div>

                    <div className="popup-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="Enter username" name="username" value={form.username} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password" name="userpassword" value={form.userpassword} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter email" name="email" value={form.email} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">First name</label>
                                <input type="text" id="first name" className="form-control" placeholder="Enter first name" name="firstname" value={form.firstname} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Last name</label>
                                <input type="text" id="lastname" className="form-control" placeholder="Enter last name" name="lastname" value={form.lastname} onChange={handleChange} />
                            </div>

                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked /> Remember me
                                </label>
                            </div>

                            <button type="submit" className="btn-submit">Create account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}