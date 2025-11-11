import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";



function Nav() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    // ✅ Remove user data (localStorage/sessionStorage)
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Optionally clear sessionStorage if you use it
    sessionStorage.clear();

    // ✅ Redirect to login
    navigate("/login");
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userEmail = currentUser?.email || "User";
  
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
          <p style={{marginBottom: "0"}}>{userEmail}</p>
          <button type="button" className="sign-out">
  <Link to='/login' className="sign-out-link">
    <MdLogout size={20} />
    <span onClick={handleSignOut}>Sign Out</span>
  </Link>
</button>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
