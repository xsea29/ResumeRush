import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";



function Nav() {
  return (
    <nav className="nav">
      <div className="flex nav-content">
        <div className="flex nav-logo">
          <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
          <h4>ResumeRush</h4>
        </div>

        <div><Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/uploads" className="nav-link">Upload</Link>
              <Link to="/share" className="nav-link">Share</Link></div>
        {/* <div className="flex nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <button type="button" className="btn btn-primary"><Link to='/register' style={{color: "#fff", textDecoration: 'none'}}>Get started</Link></button>
        </div> */}
        <div className="flex nav-actions">
          <p style={{marginBottom: "0"}}>xyz@gmail.com</p>
          <button type="button" className="sign-out">
  <Link to='/login' className="sign-out-link">
    <MdLogout size={20} />
    <span >Sign Out</span>
  </Link>
</button>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
