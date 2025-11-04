import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="flex nav-content">
        <div className="flex nav-logo">
          <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
          <h4>ResumeRush</h4>
        </div>
        <div className="flex nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <button type="button" className="btn btn-primary"><Link to='/register' style={{color: "#fff", textDecoration: 'none'}}>Get started</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
