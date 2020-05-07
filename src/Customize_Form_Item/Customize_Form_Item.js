import React, { Component } from 'react';

import './Customize_Form_Item.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CustomizeFormItem extends Component {

    render() {
          return (
            <div key={this.props.hash} className="feature__item">
              <input
                type="radio"
                id={this.props.hash}
                className="feature__option"
                name={this.props.name}
                checked={this.props.itemName === this.props.selected[this.props.feature].name}
                onChange={e => this.props.updateFeature(this.props.feature, this.props.id)}
              />
              <label htmlFor={this.props.hash} className="feature__label">
                {this.props.itemName} ({USCurrencyFormat.format(this.props.id.cost)})
              </label>
            </div>
          );
        };
}

  export default CustomizeFormItem;
  