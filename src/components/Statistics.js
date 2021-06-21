// Приложение должно отображать количество собранных отзывов для каждой категории. Приложение не должно сохранять статистику отзывов между разными сессиями (обновление страницы).

// Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }


import React from 'react';
import './Statistics.css';

class Statistics extends React.Component {
    state = {
        valueGood: 0,
        valueNeutral: 0,
        valueBad: 0,
    };

    handleGood = () => {
        this.setState(prevState => ({
                valueGood: prevState.valueGood + 1,
        }))
    };

    handleNeutral = () => {
        this.setState(prevState => ({
                valueNeutral: prevState.valueNeutral + 1,
        }))
    };

    handleBad = () => {
        this.setState(prevState => ({
                valueBad: prevState.valueBad + 1,
        }))
    };

    render () {
        return (
    <div className="Container">
        <div className="Statistics__btn">
            <button type="button" onClick={this.handleGood}>Good</button>
            <button type="button" onClick={this.handleNeutral}>Neutral</button>
            <button type="button" onClick={this.handleBad}>Bad</button>
        </div>
        <div>
            <ul>
                <li>
                    <span>Good:{this.state.valueGood} </span>
                 </li>
                 
                 <li>
                    <span>Neutral:{this.state.valueNeutral} </span>
                 </li>

                 <li>
                    <span>Bad:{this.state.valueBad}</span>
                </li>
            </ul>
        </div>
     
    </div>
        )
    }
}



export default Statistics;