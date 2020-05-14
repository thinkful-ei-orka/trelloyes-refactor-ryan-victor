import React from 'react';
import STORE from './store';
import List from './List';

import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  // let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}



class App extends React.Component {
  const lists = STORE.lists.map(list => (
    <List 
    key={list.id} 
    id={list.id}
    header={list.header} 
    cards={list.cardIds.map(id => STORE.allCards[id])} 
    />
  ))
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
        <div className='App-list'>
          {lists}
        </div>
      </header>
    </main>
  );
}

export default App;
