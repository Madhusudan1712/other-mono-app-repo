import React from "react";
import Loader from "./Loader";

interface LoaderWrapperProps {
  loading: boolean;
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ loading, children }) => {
  if (loading) return <Loader />;
  return <>{children}</>;
};

export default LoaderWrapper;
