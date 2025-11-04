import { Link } from "react-router-dom";

function Hero(){
    return (
        <div className="hero flex-column">
            <span className="icon-container icon-medium"><i class="ri-file-text-fill"></i></span>
            <h1>Share Your Resume Instantly</h1>
            <p>Upload your resume once and share it with recruiters via email or WhatsApp in seconds. Keep track of all your sharing activity in one place.</p>
            <div className="button-group">
                <button type="button" className="btn btn-primary"><Link to='/register' style={{textDecoration: "none", color: "inherit"}}>Get Started Free</Link></button>
                <button type="button" className="btn btn-secondary">
                    <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>Sign In</Link>
                </button>
            </div>
        </div>
    );
}

export default Hero;