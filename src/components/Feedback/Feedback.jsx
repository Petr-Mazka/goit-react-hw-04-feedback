import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import css from "./index.css";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return Math.round((good / total) * 100);
    }

    addFeedback = (event) => {
        const feedback = event.target.name;
        this.setState((prevState) => ({
                [feedback]: prevState[feedback] += 1
        }));
    }

    render() {
        const totalCount = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedback();
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
        <>
        <div className={css.feedback}>
            <Section title={"Please, leave your feedback"}>
                <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback}/>
            </Section>
                <Section title={"Statistics"}>
                        {totalCount > 0 ?
                            <Statistics good={good} neutral={neutral} bad={bad} total={totalCount} positivePercentage={positiveFeedback} /> :
                            <Notification message={"There is no feedback"} />}
            </Section>
        </div>
        </>
    );
  }
}

export default Feedback;