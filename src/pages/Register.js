import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

    const handleSubmit= async(e)=>{
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }
        if(password.length < 8){
            toast.error("Password must be at least 8 characters long!");
            return;
        }

        if(password !== confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }

       try {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Something went wrong!");
     
    }

    toast.success("Account Created Successfully!");
     setTimeout(()=>{
navigate('/login');
    }, 2000);

  } catch (err) {
    console.error(err);
    toast.error("Server error. Please try again.");
  }
            
    }
    return (
        isLoading ? <Loader /> : (
            <div className="gradient-wrapper">
            <div className="login-container ">
            <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
            <h2 style={{marginBottom: "0"}}>Create Account</h2>
            <p>Start managing your resumes today</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <h6 style={{marginBottom: "0"}}>Register</h6>
                <p>Create your free account</p>
                <label>Full Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tushar Tripathi"  />
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com"  />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" style={{marginBottom: "0"}} />
                <span style={{fontSize: ".7rem", color:"#aaa", marginBottom:"8px"}}>Must be at least 8 characters long</span>

                <label>Confirm Password</label>
                <input type="password" name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="******"   />
                <div className="remember-me">
                    <input type="checkbox"  id="rememberMe" name="rememberMe" style={{width: "20px", marginBottom: "0"}} />
                    <label htmlFor="rememberMe" style={{marginBottom: "0", fontWeight: "400", fontSize: ".9rem"}}> Remember me</label>
                </div>
                <button type="submit" className="btn">Create Account</button>
                <div className="signup-link">
                    Already have an account? <span className="link"><Link to="/login">Sign in here</Link></span>
                </div>
            </form>
            </div>
            </div>
        )
    );
}
export default Register;