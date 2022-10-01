import { useParams } from "react-router-dom";

export const withURL = (WrappedComponent) => (props) => {
  return <WrappedComponent {...props} params={useParams()} />;
};
