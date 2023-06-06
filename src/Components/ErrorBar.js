
const ErrorBar = (props) => {

  return (
    <div className="errorbar">
      <p>Error! An error occurred: {props.error}</p>
    </div>
  );
};

export default ErrorBar;
