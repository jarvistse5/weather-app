import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div class="main">
        <div className="wrapper">{children}</div>
    </div>
  );
};

export default Wrapper;