import React from 'react';
import { OptionsContainer, OptionButton } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <OptionsContainer>
        {/* <h2>Залиште відгук:</h2> */}
        {options.map((option) => (
          <OptionButton 
          key={option} 
          onClick={() => onLeaveFeedback(option)}>
            {option}
          </OptionButton>
        ))}
      </OptionsContainer>
    );
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;