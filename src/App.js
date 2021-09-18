import React, { Component } from 'react';
import UploadModalButton from './components/UploadModalButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gabe's Uploading Site :)</h1>
        </header>

        <h2>Upload</h2>
        <UploadModalButton />
      </div>
    );
  }
}

export default App;
