import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';


const Statistics = ({good, neutral, bad, total, positive}) => (
    
         <div className="Statistics__title">
    
        <ul>
            <li>Good: {good} </li>
            <li>Neutral: {neutral} </li>
            <li> Bad: {bad} </li>

        </ul>

        <h3> Total: {total} </h3>
        <h3> Positive feedback: {positive} % </h3>
        
    </div>
); 

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};
    export default Statistics;