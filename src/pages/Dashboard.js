import { useEffect, useState } from "react";
import { FaUpload, FaShareAlt, FaFileAlt } from "react-icons/fa";
import Loader from "../components/Loader";

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    }, 3000);

    return () => clearTimeout();
    }, []);

    if (isLoading) return <Loader />;

  return (

        <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">
        Manage your resumes and track sharing activity
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Resumes</h2>
          <p className="card-value">0</p>
        </div>

        <div className="card">
          <h2>Total Shares</h2>
          <p className="card-value">0</p>
          <p className="card-subtext">0 email • 0 WhatsApp</p>
        </div>

        <div className="card">
          <h2>Quick Actions</h2>
          <div className="actions">
            <button className="action-btn">
              <FaUpload /> Upload Resume
            </button>
            <button className="action-btn">
              <FaShareAlt /> Share Resume
            </button>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>Your Resumes</h2>
        <p className="resume-subtext">
          No resumes yet. Upload your first resume to get started.
        </p>

        <div className="resume-empty">
          <FaFileAlt className="resume-icon" />
          <p>No resumes uploaded yet</p>
          <button className="upload-btn">
            <FaUpload /> Upload Your First Resume
          </button>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
