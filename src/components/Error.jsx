import React from "react";
import ErrorImg from "../assets/eror.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="wrapper ">
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>

      <h2>Error 404: Page You Are Looking For Not Found!</h2>
      <h5>Contact your API provider👎🏽</h5>
      <div className="error">
        <img src={ErrorImg} alt="" />

        <div className="error-btn">
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
