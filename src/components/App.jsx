import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VidoeDetail";
import ErrorPage from "./ErrorPage";
import Alert from "./Alert";
import "./App.scss";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    api_key: null,
    error: null
  };

  onFormSubmit = async (api_key, inputValue) => {
    try {
      const KEY = process.env.REACT_APP_YOUTUBE_API_KEY
        ? process.env.REACT_APP_YOUTUBE_API_KEY
        : api_key;

      // For the first ApI request, use tiger as search word
      inputValue = inputValue ? inputValue : "tiger";

      console.log("Key From Env is: ", process.env.REACT_APP_YOUTUBE_API_KEY);
      console.log("Key From Input is: ", api_key);
      console.log("Key From state: ", this.state.api_key);

      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search/",
        {
          params: {
            part: "snippet",
            maxResults: 4,
            key: KEY,
            q: inputValue
          }
        }
      );
      // console.log(response.data.items);
      this.setState({
        videos: response.data.items,
        // for the main video take the first video from response
        selectedVideo: response.data.items[0],
        api_key: api_key
      });
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        // err.response.data.message =
        //   "We could not find any results to your search. Please try again";
        this.setState({
          // error: err.response.status
          error: err.response.data
        });
        console.log(`Error Response status is:  ${err.response.status}`);
        console.log(`Error Response message is:  ${err.response.data}`);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
      console.log(err.config);
    }
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <Alert passApiKey={this.onFormSubmit} />
        <h3>Youtube Video Search</h3>
        <SearchBar
          api_key={this.state.api_key}
          onceSubmited={this.onFormSubmit}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-8">
              {this.state.error ? (
                <ErrorPage error={this.state.error.message} />
              ) : (
                <VideoDetail video={this.state.selectedVideo} />
              )}
            </div>
            <div className="col-lg-2 col-4">
              <VideoList
                onVideoSelect={this.handleVideoSelect}
                videoArray={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
