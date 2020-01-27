import React from "react";

import "./ErrorScreen.scss";

const ErrorScreen = props => {

  const { error } = props;

  return (
    error.hasError && (
      <div className="errorScreen">
        <span>{error.errorMessage}</span>
      </div>
    )
  );
}

export default ErrorScreen;
