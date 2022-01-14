import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      groceries: [
        {
          item: 'Potato',
          brand: 'HelloPotato',
          units: '2 lbs',
          quantity: 5,
          isPurchased: false
        },
        {
          item: 'Chicken',
          brand: 'HelloChicken',
          units: '3 lbs',
          quantity: 3,
          isPurchased: false
        },
        {
          item: 'Cheese',
          brand: 'HelloCheese',
          units: '1 Pack',
          quantity: 4,
          isPurchased: false
        }
      ],
    }
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
