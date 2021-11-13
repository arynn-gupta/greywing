import React, { Component } from 'react';
import * as THREE from 'three';
import Song from '../assets/greywing.mp3';
import './music.style.scss';
import { AiFillSound } from 'react-icons/ai';
import { AiOutlineSound } from 'react-icons/ai';

const listener = new THREE.AudioListener();
// create a global audio source
const sound = new THREE.Audio(listener);

class Music extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {
      isPlaying: true,
    };

    var camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.add(listener);

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(Song, function loadBuffer(buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.2);
      sound.play();
    });
  }

  handlePlay() {
    this.setState({ isPlaying: true });
    sound.play();
  }

  handlePause() {
    this.setState({ isPlaying: false });
    sound.stop();
  }

  render() {
    let button;
    if (this.state.isPlaying) {
      button = (
        <button className='musicToggle' onClick={this.handlePause}>
          <AiFillSound />
        </button>
      );
    } else {
      button = (
        <button className='musicToggle' onClick={this.handlePlay}>
          <AiOutlineSound />
        </button>
      );
    }

    return (
      <div className='music'>
        <canvas className='musicBg'></canvas>
        {button}
      </div>
    );
  }
}

export default Music;
