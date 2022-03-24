import React, { Component } from 'react'
import Card from '../Card'
import './style.css'

class CardCollection extends Component {
  render() {
    return (
      <>
        <div className='cards_wrapper'>
          <Card />
          <Card />
          <Card />
        </div>
      </>
    )
  }
}

export default CardCollection;