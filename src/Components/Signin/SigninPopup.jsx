export default function SigninPopup(props) {
    return (props.trigger) ? (
        <>
            <div className="popup-overlay">
                <div className="popup">
                    <div className="popup-header">
                        <h2>Login</h2>
                        <button className="close-btn">×</button>
                    </div>

                    <div className="popup-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked /> Remember me
                                </label>
                            </div>

                            <button type="submit" className="btn-submit">Login</button>
                        </form>
                    </div>

                    <div className="popup-footer">
                        <p>Not a member? <a href="#">Sign Up</a></p>
                        <p>Forgot <a href="#">Password?</a></p>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}