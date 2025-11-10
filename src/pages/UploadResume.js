import React, { useState } from "react";
import { FaUpload, FaInfoCircle } from "react-icons/fa";

function UploadResume() {
  const [resumeTitle, setResumeTitle] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="upload-container">
      <h1>Upload Resume</h1>
      <p className="subtitle">
        Upload your resume to start sharing it with recruiters
      </p>

      <div className="upload-box">
        <h3>New Resume</h3>
        <p className="small-text">
          Upload a PDF, DOCX, DOC, or TXT file (max 10MB)
        </p>

        <label className="label-text">Resume Title</label>
        <input
          type="text"
          placeholder="e.g., Software Engineer Resume 2024"
          value={resumeTitle}
          onChange={(e) => setResumeTitle(e.target.value)}
        />
        <p className="hint-text">
          Give your resume a descriptive title to easily identify it
        </p>

        <div className="upload-dropzone">
          <input
            type="file"
            id="resumeFile"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            hidden
          />
          <label htmlFor="resumeFile" className="dropzone-label">
            <FaUpload size={30} />
            <p>
              {fileName
                ? fileName
                : "Click to upload or drag and drop"} <br />
              <span>PDF, DOCX, DOC, or TXT (max 10MB)</span>
            </p>
          </label>
        </div>

        <div className="note-box">
          <FaInfoCircle className="info-icon" />
          <div>
            <strong>Note: Demo Mode</strong>
            <p>
              In this demo, files are simulated and not actually uploaded to
              cloud storage. In production, files would be uploaded to AWS S3,
              Google Cloud Storage, or similar services.
            </p>
          </div>
        </div>

        <div className="button-row">
          <button className="cancel-btn">Cancel</button>
          <button className="upload-btn" disabled>
            <FaUpload /> Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadResume;
