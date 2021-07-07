// Приложение должно отображать количество собранных отзывов для каждой категории. Приложение не должно сохранять статистику отзывов между разными сессиями (обновление страницы).

// Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// Шаг 2
// Расширь функционал приложения так, чтобы в интерфейсе отображалось больше статистики о собранных отзывах.
// Добавь отображение общего количества собранных отзывов из всех категорий и процент положительных отзывов. 
// Для этого создай вспомогательные методы countTotalFeedback() и countPositiveFeedbackPercentage(), 
// подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные).

// Шаг 3
// Выполни рефакторинг приложения. Состояние приложения должно оставаться в корневом компоненте <App>.

// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} 
// positivePercentage={}>.
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). 
// Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.


import React from 'react';
//import './Statistics/Stat';
import './Statistics/Statistics.css';

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

    countTotalFeedback = () => {
        const total = this.state.valueGood + this.state.valueNeutral + this.state.valueBad;
        return total;   
    };

    countPositiveFeedbackPercentage = () => {
        const positiveFeedbackPercent = Math.round(100/this.countTotalFeedback()*this.state.valueGood);
        return positiveFeedbackPercent;
    }

    render () {
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();


        return (

    <div className="Container">
        <h1> Please leave us feedback</h1>
        <div className="Statistics__btn">
            <button className="positive__btn" type="button" onClick={this.handleGood}>Good</button>
            <button className="neutral__btn" type="button" onClick={this.handleNeutral}>Neutral</button>
            <button className="bad__btn" type="button" onClick={this.handleBad}>Bad</button>
        </div>

     {/* <Stat 
     onGood = {this.state.valueGood}
     onNeutral = {this.state.valueNeutral}
     onBad = {this.state.valueBad}
     onTotalFeedback = {totalFeedback}
     onPositivePercentage = {positiveFeedbackPercentage}
     /> */}

        <div>
            <h3 className="Statistics__title">Statistics</h3>
        </div>
        <div>
            <ul>
                <li>Good:{this.state.valueGood}</li>
                 
                 <li>Neutral:{this.state.valueNeutral} </li>

                 <li>Bad:{this.state.valueBad}</li>

                 <li>Total:{totalFeedback}</li>

                 <li>Positive feedback:{positiveFeedbackPercentage}%</li>

            </ul>
        </div>
     
    </div>
        )
    }
}

export default Statistics;