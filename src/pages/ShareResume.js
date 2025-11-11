import React, { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaShareAlt, FaFileAlt, FaClock, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function ShareResume() {
  const [activeResume, setActiveResume] = useState(null);
  const [shareHistory, setShareHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [shareMethod, setShareMethod] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [notes, setNotes] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //   //   setActiveResume({
  //   //     id: 1,
  //   //     title: "Software Engineer Resume 2024",
  //   //     fileName: "Sagar_Resume.pdf",
  //   //     fileType: "PDF",
  //   //   });
  //     setShareHistory([
  //       {
  //         id: 1,
  //         shareMethod: "email",
  //         recipient: "hr@company.com",
  //         sharedAt: new Date().toISOString(),
  //         notes: "Please find my resume attached.",
  //       },
  //     ]);
  //     setIsLoading(false);
  //   }, 1200);
  // }, []);

  useEffect(() => {
  const storedResume = localStorage.getItem("activeResume");
  if (storedResume) {
    const resume = JSON.parse(storedResume);
    setActiveResume({
      title: resume.originalname,
      fileName: resume.filename,
      fileType: resume.mimetype.split("/")[1].toUpperCase(),
      fileUrl: `http://localhost:3001/uploads/${resume.filename}`,
    });
  }

  setShareHistory([
    {
      id: 1,
      shareMethod: "email",
      recipient: "hr@company.com",
      sharedAt: new Date().toISOString(),
      notes: "Please find my resume attached.",
    },
  ]);
  setIsLoading(false);
}, []);

   useEffect(() => {
    const fetchLatestResume = async () => {
      try {
        const res = await fetch(`http://localhost:3001/latest-resume/${currentUser._id}`);
        if (!res.ok) throw new Error("No resume found");
        const data = await res.json();
        setActiveResume(data);
      } catch (err) {
        console.warn("No resume found or server error:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestResume();

    // Dummy share history for demo
    setShareHistory([
      {
        id: 1,
        shareMethod: "email",
        recipient: "hr@company.com",
        sharedAt: new Date().toISOString(),
        notes: "Please find my resume attached.",
      },
    ]);
  }, []);


const handleShare = async () => {
  if (!activeResume) {
    toast.error("No active resume to share. Please upload one first.");
    return;
  }

  if (!shareMethod) {
    toast.error("Please select a sharing method (Email or WhatsApp).");
    return;
  }

  if (!recipient.trim()) {
    toast.error(
      shareMethod === "email"
        ? "Please enter a valid email address."
        : "Please enter a valid phone number (with country code)."
    );
    return;
  }

  setIsSharing(true);

  const resumeLink =
    activeResume.fileUrl || `http://localhost:3001/uploads/${activeResume.filename}`;
  const message =
    notes?.trim() || `Hi, please find my resume here: ${resumeLink}`;

  try {
    if (shareMethod === "email") {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient,
          message,
          resumeLink,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send email");

      toast.success("Email sent successfully!");
    } else if (shareMethod === "whatsapp") {
      const whatsappUrl = `https://wa.me/${recipient.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }

    const newShare = {
      id: shareHistory.length + 1,
      shareMethod,
      recipient,
      sharedAt: new Date().toISOString(),
      notes: message,
    };

    setShareHistory([newShare, ...shareHistory]);
    setRecipient("");
    setNotes("");
    setShareMethod(null);
  } catch (error) {
    console.error(error);
    alert("Failed to share resume. Please try again.");
  } finally {
    setIsSharing(false);
  }
};



  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  if (isLoading) {
    return (
      <div className="loader-screen">
        <Loader />
      </div>
    );
  }
  // const formatDate = (dateString) => {
  //   return new Date(dateString).toLocaleString("en-US", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };

  // if (isLoading) {
  //   return (
  //     <div className="loader-screen">
  //       <Loader />
  //     </div>
  //   );
  // }

 return (
    <div className="share-container">
      <h1>Share Resume</h1>
      <p className="subtitle">Quickly share your active resume via Email or WhatsApp</p>

      {/* Active Resume Section */}
      {activeResume ? (
        <div className="card">
          <h2>Active Resume</h2>
          <p className="card-desc">This is the resume that will be shared</p>

          <div className="resume-box">
            <FaFileAlt className="resume-icon"  />
            <div>
              <h3 style={{marginBottom: "0"}}>{activeResume.title}</h3>
              <p>
                {activeResume.filename} • PDF
              </p>
              <a
                href={`http://localhost:3001/${activeResume.path}`}
                target="_blank"
                rel="noreferrer"
                className="view-link"
                style={{textDecoration: "none"}}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="card center">
          <FaFileAlt className="resume-icon" />
          <h3>No Active Resume</h3>
          <p>Please upload a resume before sharing.</p>
          <button className="primary-btn">
            <Link to="/uploads" style={{ color: "#fff", textDecoration: "none" }}>
              Upload Resume
            </Link>
          </button>
        </div>
      )}

      {/* Share Options */}
      <div className="card">
        <h2>Share Via</h2>
        <p className="card-desc">Choose how you want to share your resume</p>

        <div className="share-buttons">
          <button
            className={`share-btn ${shareMethod === "email" ? "active" : ""}`}
            onClick={() => setShareMethod("email")}
            disabled={isSharing}
          >
            <FaEnvelope /> Email
          </button>
          <button
            className={`share-btn ${shareMethod === "whatsapp" ? "active" : ""}`}
            onClick={() => setShareMethod("whatsapp")}
            disabled={isSharing}
          >
            <FaWhatsapp /> WhatsApp
          </button>
        </div>

        {shareMethod && (
          <div className="share-form">
            <label>
              {shareMethod === "email" ? "Email Address" : "Phone Number"}
            </label>
            <input
              type={shareMethod === "email" ? "email" : "tel"}
              placeholder={
                shareMethod === "email" ? "recruiter@company.com" : "+1234567890"
              }
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              disabled={isSharing}
            />

            <label>Message (Optional)</label>
            <textarea
              placeholder="Add a personal message..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              disabled={isSharing}
            />

            <button
              className="primary-btn"
              onClick={handleShare}
              disabled={isSharing}
            >
              {isSharing ? (
                <>
                  <FaSpinner className="spin" /> Sharing...
                </>
              ) : (
                <>
                  <FaShareAlt /> Share via{" "}
                  {shareMethod === "email" ? "Email" : "WhatsApp"}
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Share History */}
      <div className="card">
        <h2>Recent Shares</h2>
        <p className="card-desc">Your sharing history</p>

        {shareHistory.length === 0 ? (
          <p className="no-history">No sharing history yet</p>
        ) : (
          <ul className="share-list">
            {shareHistory.map((item) => (
              <li key={item.id}>
                <div className="icon">
                  {item.shareMethod === "email" ? (
                    <FaEnvelope />
                  ) : (
                    <FaWhatsapp />
                  )}
                </div>
                <div className="details">
                  <strong>{item.recipient}</strong>
                  {item.notes && <p>{item.notes}</p>}
                  <span>
                    <FaClock /> {formatDate(item.sharedAt)}
                  </span>
                </div>
                <span className={`tag ${item.shareMethod}`}>
                  {item.shareMethod}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ShareResume;
