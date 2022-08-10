import React, { useState } from "react";
import Statistics from "./Feedback/Statistics/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Section from "./Feedback/Section/Section";
import Notification from "./Feedback/Notification/Notification";

// export class App extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }

//     countPositiveFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         const total = good + neutral + bad;
//         return Math.round((good / total) * 100);
//     }
  
//     addFeedback = name => {
//       this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//       }));
//     }

//     render() {
//         const totalCount = this.countTotalFeedback();
//         const positiveFeedback = this.countPositiveFeedback();
//         const { good, neutral, bad } = this.state;
//       const options = Object.keys(this.state);
//       console.log(options);
//         return (
//         <>
//         <div>
//             <Section title="Please, leave your feedback">
//                 <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback}/>
//             </Section>
//                 <Section title="Statistics">
//                         {totalCount > 0 ?
//                             <Statistics good={good} neutral={neutral} bad={bad} total={totalCount} positivePercentage={positiveFeedback} /> :
//                             <Notification message="There is no feedback" />}
//             </Section>
//         </div>
//         </>
//     );
//   }
// }

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedback = () => {
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  }

  const addFeedback = name => {
    switch (name) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  }

  const keys = Object.keys({ good, neutral, bad });

  return (
        <div>
            <Section title="Please, leave your feedback">
                <FeedbackOptions options={keys} onLeaveFeedback={addFeedback}/>
            </Section>
                <Section title="Statistics">
                        {countTotalFeedback() > 0 ?
                            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedback()} /> :
                            <Notification message="There is no feedback" />}
            </Section>
        </div>
    );

}