import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryBanner from './StoryBanner';
import StoryProgression from './StoryProgression';

const App = () => {
  return (
    <div className="App">
      <StoryBanner />
      <StoryProgression />
    </div>
  );
}

export default App;
