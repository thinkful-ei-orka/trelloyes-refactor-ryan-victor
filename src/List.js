import React from 'react';
import Card from './Card';

import './List.css';


export default function list(props) {
    const cards = props.cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
    ));

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2></header>
            <div className="List-cards">
                {cards}
                <button type="button" className="List-add-button">
                    + Add Random Card
            </button>
            </div>
        </section>
    );
}