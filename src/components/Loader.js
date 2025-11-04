function Loader({ size = 50, color = "#000" }) {
  const style = {
    "--loader-size": `${size}px`,
    "--loader-color": color,
  };

  return (
    <div className="loader-container" style={style}>
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
