import React from 'react';

import './Card.css';

export default function Card(props) {
        return (
            <div className='Card'>
                <button 
                type='button' 
                onClick={() => props.handleDeleteClicked(props.id)}
                >
                    Delete
                </button>
                <h3 className='Card-title'>{this.props.title}</h3>
                <p className='Card-content'>{this.props.content}</p>
            </div>
        );
    }
