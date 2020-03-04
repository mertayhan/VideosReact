import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null
  };

  componentDidMount(){
      this.onTermSubmit("buildings");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ 
        videos: response.data.items ,
        selectedVideos: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideos: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideos}></VideoDetail>
            </div>
            <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
