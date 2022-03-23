import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/audience-mixtape-cd-cover-art-template-design-8c62ec86ba4f92c86622f45b755c4fb8_screen.jpg?ts=1566631082" className="card_image" alt="Avatar" /> 
                    <h3 className="card_title"></h3>
                    <button className="card_button">Comprar</button>
                </div>
            </React.Fragment>
        )
    }
}
