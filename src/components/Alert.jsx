import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

// Creating custom dialog alerts using React-Bootstrap-Sweetalert
// http://djorg83.github.io/react-bootstrap-sweetalert/

class Alert extends Component {
  state = {
    alert: null, // initialising an empty alert
    api_key: ""
  };

  // Defining first alert
  showAlert() {
    const getAlert = e => (
      <SweetAlert
        input
        showCancel
        confirmBtnText="Confirm"
        confirmBtnBsStyle="warning"
        cancelBtnBsStyle="info"
        placeHolder="Type your API Key"
        title="Please add your YouTube API-Key"
        onConfirm={e => this.addAPIKey(e)}
        onCancel={() => this.closeAlert()}
      >
        For this site to work, you need a YouTube API Key
      </SweetAlert>
    );
    this.setState({
      alert: getAlert()
    });
  }

  addAPIKey(e) {
    // console.log(e);
    this.setState({
      alert: null, // This will colse the dialog window
      api_key: e
    });

    // console.log(`Am I here: `, e);
    this.props.passApiKey(e);
  }

  closeAlert() {
    this.setState({
      alert: null // This will colse the dialog window
    });
  }

  componentDidMount() {
    this.showAlert();
  }

  render() {
    return <>{this.state.alert}</>;
  }
}

export default Alert;
