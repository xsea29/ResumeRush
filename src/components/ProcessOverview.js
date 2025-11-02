const icons = [
  "ri-upload-2-line",         
  "ri-file-paper-2-line",    
  "ri-share-line"               
];

function ProcessOverview() {
  const processSteps = [
    {
      step: "Upload Resume",
      detail: "Upload your resume in PDF, DOCX, or other formats. Store multiple versions."
    },
    {
      step: "Set Active",
      detail: "Choose which resume version is currently active for quick sharing."
    },
    {
      step: "Share Instantly",
      detail: "Share your resume via email or WhatsApp with pre-filled templates."
    }
  ];

  return (
    <section className="process-overview container">
      <h2 className="text-center">How It Works</h2>
      <p className="text-center section-desc">
        Three simple steps to streamline your job application process
      </p>
      <div className="process-steps">
        {processSteps.map((process, index) => (
          <div className="step" key={index}>
            <span className="process-icon">
              <i className={icons[index]}></i>
            </span>
            <h4 style={{fontWeight: "400"}}><b>{index + 1}. {process.step}</b></h4>
            <p>{process.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessOverview;
