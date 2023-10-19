import React from 'react';
import { faPlay, faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="left-panel">
          <FontAwesomeIcon icon={faPlay} className='icon'/>
        </div>
        <div className="card lyric-display">
          <div className="card-body">
            Lyric here...
          </div>
        </div>
        <div className="card timer-display">
          <div className="card-body">
            Timer
          </div>
        </div>
      </div>
      <div className='microphone-container'>
        <FontAwesomeIcon icon={faMicrophoneLines} className='icon microphone-icon'/>
      </div>
      <div className='container'>
        <div className="card lyric-display speech-to-text-display">
          <div className="card-body">
            Speech to lyric here...
          </div>
        </div>
      </div>
    </>
  );
};
