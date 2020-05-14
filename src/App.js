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
  return Object.entries(obj).reduce(
    (newObject, [key, value]) => 
      key === keyToOmit ? newObject : {...newObject, [key]: value}
      , {}
  )};


class App extends React.Component {
  state = {
    store: STORE
  };

  handleDeleteClicked = (cardId) => {
    const { allCards, lists } = this.state.store;

    const newListSet = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !==cardId)
    })
    )
    //filtered


    const newCardSet = omit(allCards, cardId);
    //omit
    
    this.setState({
      store: {
        list: newListSet,
        allCards: newCardSet
      }
    })
    
  };

  handleAddClicked = () => {

  }

  render() {
    const { store } = this.state;
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
}

export default App;
