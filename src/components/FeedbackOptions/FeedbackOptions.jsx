import React from 'react';
import { OptionsContainer, OptionButton } from './FeedbackOptions.styles';


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
  
  export default FeedbackOptions;