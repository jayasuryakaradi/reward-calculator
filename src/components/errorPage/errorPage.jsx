import React from "react";
import PropTypes from "prop-types";
import { UI_LABELS } from "../../constants";

import "./errorPage.css";

const ErrorPage = ({ error }) => {
  return (
    <main className="error-container">
      <h2>{UI_LABELS.ERROR_TITLE}</h2>
      <p>{error}</p>
    </main>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorPage;
