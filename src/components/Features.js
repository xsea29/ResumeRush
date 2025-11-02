const featureData = [
  {
    icon: "ri-file-paper-2-line",
    title: "Multiple Resumes",
    description: "Store and manage multiple resume versions for different job applications."
  },
  {
    icon: "ri-flashlight-line",
    title: "Quick Sharing",
    description: "Share your resume via email or WhatsApp with ready-made templates."
  },
  {
    icon: "ri-time-line",
    title: "Share History",
    description: "Track when and where you've shared your resume with detailed history."
  },
  {
    icon: "ri-shield-line",
    title: "Secure Storage",
    description: "Your resumes are stored securely with cloud-based backup."
  },
  {
    icon: "ri-file-list-2-line",
    title: "Multiple Formats",
    description: "Support for PDF, DOCX, DOC, and TXT file formats."
  },
  {
    icon: "ri-share-line",
    title: "Analytics",
    description: "View statistics on your sharing activity and engagement."
  }
];

function Features() {
  return (
    <section className="features-section">
      <h2 className="text-center features-title">Features</h2>
      <p className="text-center features-desc">
        Everything you need to manage and share your resumes efficiently
      </p>
      <div className="features-grid">
        {featureData.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <span className="feature-icon">
              <i className={feature.icon}></i>
            </span>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
