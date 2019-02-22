import React from "react";

const ErrorPage = props => {
  return (
    <>
      <div className="error">
        <p>
          {props.error}
          <br />
          It seems the API Key you entered wasn't valid. Please reload the page
          and use a valid API Key.
        </p>
      </div>
      <div>
        For this app to work, you need a YouTube Key.
        <br />
        To get your API KEY go to:{" "}
        <a
          href="https://console.developers.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Developer Console
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
