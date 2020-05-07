import React, { Component } from 'react';


import './Summary_Item.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryItem extends Component {

  render() {
      return (
        <div className="summary__option" key={this.props.hash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selected}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(this.props.cost)}
          </div>
        </div>
      );
    };
}
   

export default SummaryItem;