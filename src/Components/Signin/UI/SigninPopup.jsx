export default function SigninPopup(props) {
    return (props.trigger) ? (
        <>
            <div className="popup-overlay">
                <div className="popup">
                    <div className="popup-header">
                        <h2>Sign up</h2>
                        <button className="close-btn" onClick={() => { props.setTrigger(false) }}>×</button>
                    </div>

                    <div className="popup-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">First name</label>
                                <input type="text" id="first name" className="form-control" placeholder="Enter first name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Last name</label>
                                <input type="text" id="lastname" className="form-control" placeholder="Enter last name" />
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