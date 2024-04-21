import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const TestError = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong!");
  }
  return (
    <div className="error-btn">
      <Helmet>
        <title>Error boundary page</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>
      <button onClick={() => setError(true)} className="btn error-boundary">
        Test ErrorBoundary
      </button>
    </div>
  );
};

export default TestError;
