import { Audio } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#61258f"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;