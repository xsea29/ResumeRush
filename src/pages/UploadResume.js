import React, { useState } from "react";
import { FaUpload, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";

function UploadResume() {
  const [resumeTitle, setResumeTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  console.log(currentUser._id);  
console.log(currentUser.email);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setResumeTitle(selectedFile.name.replace(/\.[^/.]+$/, "")); 
    }
  };


  const handleUpload = async (e) => {
  e.preventDefault();

  if (!file) {
    toast.warning("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("resume", file);
  formData.append("title", resumeTitle);
  formData.append("userId", currentUser._id);
  
  for (let [key, value] of formData.entries()) {
  console.log(key, value);
}


  try {
    const response = await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("File uploaded successfully!");

      localStorage.setItem("activeResume", JSON.stringify(data.file));

      setFile(null);
      setFileName("");
      setResumeTitle("");
    } else {
      toast.error(data.message || "Failed to upload the file.");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    toast.error("Something went wrong while uploading.");
  }
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
          value={resumeTitle || fileName}
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
          <button className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
          <button className="upload-btn" onClick={handleUpload}>
            <FaUpload /> Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadResume;
