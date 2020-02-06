import React, { useState } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './App.css';
import Gif from './gif';

const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);
const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);


const App = () => {
  const [gifs, setGifs] = useState([
    './letters/a.svg',
    './letters/b.svg',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',
  ]);

  const [newGifs, setNewGifs] = useState([
    './letters/a.svg',
    './letters/b.svg',
    './letters/c.svg',
    './letters/d.svg',
    './letters/e.svg',
    './letters/f.svg',
    './letters/g.svg',
    './letters/h.svg',
    './letters/i.svg',
    './letters/j.svg',
    './letters/k.svg',
    './letters/l.svg',
    './letters/m.svg',
    './letters/n.svg',
    './letters/o.svg',
    './letters/p.svg',
    './letters/q.svg',
    './letters/r.svg',
    './letters/s.svg',
    './letters/t.svg',
    './letters/u.svg',
    './letters/v.svg',
    './letters/w.svg',
    './letters/x.svg',
    './letters/y.svg',
    './letters/z.svg'

  ]);

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    switch (collection) {
      case 'gifs':
        setGifs(arrayMove(gifs, oldIndex, newIndex))
        break;
      case 'newGifs':
        setNewGifs(arrayMove(newGifs, oldIndex, newIndex))
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>Drag those gifs around</h1>
      <h2>Set 1</h2>
      <SortableGifsContainer axis="x" onSortEnd={onSortEnd} onSortStart={(_, event) => event.preventDefault()}>
        {gifs.map((gif, i) =>
          <SortableGif
            index={i}
            key={gif}
            gif={gif}
            collection="gifs"
          />
        )}
      </SortableGifsContainer>

      <h2>Set 2</h2>
      <SortableGifsContainer axis="x" onSortEnd={onSortEnd} onSortStart={(_, event) => event.preventDefault()} >
        {newGifs.map((gif, i) => <SortableGif index={i} key={gif} gif={gif} collection="newGifs" />)}
      </SortableGifsContainer>
    </div>
  );
}

export default App;