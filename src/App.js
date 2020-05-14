import React, { Component } from 'react'
import List from './List'
import STORE from './store'

import './App.css'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4) + 
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : {...newObj, [key]: value}, 
    {}
  );
}


class App extends Component {
  state = {
    store: STORE,
  };

  handleDelete = (cardId) => {
    const { lists, allCards } = this.state.store;

    //filtered
    const newListSet = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    //omit
    const newCardSet = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newListSet,
        allCards: newCardSet
      }
    })
  };

  handleAdd = (listId) => {
    const newCard = newRandomCard()

    const newListSet = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newListSet,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const { store } = this.state
    console.log(store);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>        
        </header>
          <div className='App-list'>
            {store.lists.map(list => (
              <List
                key={list.id}
                id={list.id}
                header={list.header}
                cards={list.cardIds.map(id => 
                  store.allCards[id])}
                onClickDelete={this.handleDelete}
                onClickAdd={this.handleAdd}
              />
            ))}
          </div>
      </main>
    );
  }
}

export default App;