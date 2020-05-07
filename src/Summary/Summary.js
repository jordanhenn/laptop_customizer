import React, { Component } from 'react';

import './Summary.css';

import SummaryItem from '../Summary_Item/Summary_Item'

class Summary extends Component {

  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryItem hash={featureHash} feature={feature} selected={selectedOption.name} cost={selectedOption.cost}/>
      );
    });

    return (
      <div>
            <h2>Your cart</h2>
            {summary}
        </div>
    );
  }
}

export default Summary;