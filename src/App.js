import React, {Component} from 'react';

// компоненти

import Statistics from './components/Statistics/Stat';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

class App extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
};

onLeaveFeedback = (value) => {
    this.setState(prevState => ({[value]: prevState[value] + 1}));
};

countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;   
};

countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercent = Math.round(100/this.countTotalFeedback()*this.state.good);
    return positiveFeedbackPercent;
};

render () {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
       

return (
<div>
    <Section title="Please leave us feedback">
        <FeedbackOptions 
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback} 
                />
    </Section>

   <Section title="Statistics">
        {total > 0 ? 
            <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {total}
                positive = {positive} /> : 
            <Notification message = {'No feedback  given'} />}      
    </Section>
 </div>      
)
}
}

export default App;