import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './Customize_Form.css';

import CustomizeFormItem from '../Customize_Form_Item/Customize_Form_Item';

class CustomizeForm extends Component {
  
    render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <CustomizeFormItem 
                hash={itemHash}
                feature={feature}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
                name={slugify(feature)}
                itemName={item.name}
                id={item}/>
          );
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    ); 
    }
}     
  
  export default CustomizeForm;
  