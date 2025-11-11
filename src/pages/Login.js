import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Both email and password are required!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Invalid email or password!");
      return;
    }

    toast.success("Login successful! 🎉");
    setTimeout(()=>{
        navigate('/dashboard');
    }, 2000);

    if (data.token && data.user) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
}


  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Try again!");
  }
};

    return (
        isLoading ? <Loader /> : (
            <div className="login-container gradient-wrapper">
            <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
            <h2 style={{marginBottom: "0"}}>Welcome Back</h2>
            <p>Sign in to access your resume manager</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <h6 style={{marginBottom: "0"}}>Login</h6>
                <p>Enter your credentials to continue</p>
                <label>Email</label>
                <input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" required />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
                <div className="remember-me">
                    <input type="checkbox"  id="rememberMe" name="rememberMe" style={{width: "20px", marginBottom: "0"}} />
                    <label htmlFor="rememberMe" style={{marginBottom: "0", fontWeight: "400", fontSize: ".9rem"}}> Remember me</label>
                </div>
                <button type="submit" className="btn">Sign in</button>
                <div className="signup-link">
                    Don't have an account? <span className="link"><Link to="/register">Create one</Link></span>
                </div>
            </form>
            </div>
        )
    );
}
export default Login;