import React from 'react';
import PropTypes from 'prop-types';
import shortid from "shortid";


const FeedbackOptions = ({options, onLeaveFeedback}) => (

    <div>
    {options.map((option) => (
        <button
            key={shortid.generate()}
            type="button"
            name={option}
            onClick={()=> onLeaveFeedback(option)}>
            {option}
        </button>
    ))}
    
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions; 