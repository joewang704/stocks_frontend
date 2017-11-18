import * as React from 'react';

interface AlbumProps {
  title: string;
}

class Album extends React.Component<AlbumProps, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <img src={require(`../assets/${this.props.title}.jpg`)} height={500} width={500} />
        </div>
      </div>
    );
  }
}

export default Album;
