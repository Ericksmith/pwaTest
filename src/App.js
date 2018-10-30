import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.canvas = React.createRef();
    this.strip = React.createRef();
    this.state = {
    };
  }

  componentDidMount() {
    const video = this.video.current
    const canvas = this.canvas.current
    // const ctx = canvas.getContext('2d');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    console.log(width, height);
  
    // return setInterval(() => {
    //   ctx.drawImage(video, 0, 0, width, height);
    // }, 16)
  }

  takePhoto = () => {
    const strip = this.strip.current
    const canvas = this.canvas.current
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    console.log(data);
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`
    strip.insertBefore(link, strip.firstChild);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <video class="player" ref={this.video} />
          <button onClick={this.takePhoto}>Take Photo</button>
          <canvas class="photo" ref={this.canvas}></canvas>
          <div class="strip" ref={this.strip}></div>
        </header>
      </div>
    );
  }
}

export default App;
