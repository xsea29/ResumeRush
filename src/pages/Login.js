function Login() {
    return (
        <div className="login-container gradient-wrapper">
            <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
            <h2 style={{marginBottom: "0"}}>Welcome Back</h2>
            <p>Sign in to access your resume manager</p>

            <form className="login-form">
                <h6 style={{marginBottom: "0"}}>Login</h6>
                <p>Enter your credentials to continue</p>
                <label>Email</label>
                <input type="text" name="username" placeholder="xyz@gmail.com" />
                <label>Password</label>
                <input type="password" name="password" placeholder="******" />
                <div className="remember-me">
                    <input type="checkbox"  id="rememberMe" name="rememberMe" style={{width: "20px", marginBottom: "0"}} />
                    <label htmlFor="rememberMe" style={{marginBottom: "0", fontWeight: "400", fontSize: ".9rem"}}> Remember me</label>
                </div>
                <button type="submit" className="btn">Sign in</button>
                <div className="signup-link">
                    Don't have an account? <span className="link">Create one</span>
                </div>
            </form>
            </div>
    );
}
export default Login;