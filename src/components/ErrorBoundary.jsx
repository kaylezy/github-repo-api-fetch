import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorImg from "../assets/eror.png";

function refreshPage() {
  window.location.reload(false);
}

<Helmet>
  <title>Error boundary page</title>
  <meta
    name="description"
    content="This is the home page for my github repositories using the github api calls"
  />
  <link rel="canonical" href="/repos" />
</Helmet>;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="error-header">Oops! Something went wrong!!!</h1>

          <div className="error-btn">
            <p>To Fix this Error, Kindly</p>
            <Link to="/" className="reload reset btn">
              Reset
            </Link>

            <p className="reload-p"> and</p>
            <button className="btn" onClick={refreshPage}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
