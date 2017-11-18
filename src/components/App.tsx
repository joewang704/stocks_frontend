import * as React from 'react';
import './App.css';
import Album from './Album';

class App extends React.Component {
  render() {
    const albumTitles: string[] = ['chance', 'coldplay', 'halsey',
      'owlcity', 'pinkfloyd', 'watsky', 'weeknd'];

    return (
      <div className="App">
        <div className="App-content">
          {albumTitles.map(title => <Album title={title} key={title} />)}
        </div>
      </div>
    );
  }
}

export default App;
