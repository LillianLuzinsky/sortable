import React, { useState } from 'react';
import './App.css';

import Gif from './gif';

const App = () => {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',
  ]);


  return (
    <div className="App">
      <h1>Drag those GIFs around</h1>
      <h2>Set 1</h2>
      {gifs.map((gif, i) => <Gif key={gif} gif={gif} />)}
    </div>
  );
}

export default App;