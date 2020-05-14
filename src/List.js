import React from 'react';
import Card from './Card';

import './List.css';


export default function List(props) {
    const cards = props.cards.map(card => (
        <Card
            key={card.id}
            title={card.title}
            content={card.content}
            handleDeleteClick={() => props.handleDeleteClicked(props.id)}
            id={card.id}
        />
    ));

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2></header>
            <div className="List-cards">
                {cards}
                <button 
                type="button" 
                className="List-add-button"
                onClick={(props.handleAddClicked(props.id))}
                >
                    + Add Random Card
            </button>
            </div>
        </section>
    );
}