import React, { useState } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './App.css';
import Gif from './gif';

const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);
const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);

const App = () => {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => setGifs(arrayMove(gifs, oldIndex, newIndex));

  return (
    <SortableGifsContainer axis="x" onSortEnd={onSortEnd}>
      {gifs.map((gif, i) =>
        <SortableGif
          // don't forget to pass index prop with item index
          index={i}
          key={gif}
          gif={gif}
        />
      )}
    </SortableGifsContainer>
  );
}

export default App;