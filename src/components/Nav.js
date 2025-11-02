function Nav() {
  return (
    <nav className="nav">
      <div className="flex nav-content">
        <div className="flex nav-logo">
          <span className="icon-container icon-small"><i className="ri-file-text-fill"></i></span>
          <h4>ResumeRush</h4>
        </div>
        <div className="flex nav-actions">
          <a href="/login" className="nav-link">Login</a>
          <button type="button" className="btn btn-primary">Get started</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
