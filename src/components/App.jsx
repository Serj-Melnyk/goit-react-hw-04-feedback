import { Component } from "react"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";


export class App extends Component {

  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onOptionGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1
      
  //   }));
  // };

  // onOptionNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1
      
  //   }));
  // };
  
  // onOptionBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1
      
  //   }));
  // };
  

  onLeaveFeedback = (btn) => {
    this.setState(prevState => ({
      [btn]: prevState[btn] + 1
    }));
};


  // countPositiveFeedbackPercentage({ good, neutral, bad }) {
    
  //   return (Math.round(good / (good + neutral + bad) * 100))
    
  // };

    


  render() {

    const { good, neutral, bad } = this.state;
    
    const countTotalFeedback = good + neutral + bad
    const countPositiveFeedbackPercentage = Math.round(good / (good + neutral + bad) * 100)

    return (
        

      <Layout>
        
          <Section title="Please leave feedback">
            
            <FeedbackOptions
              
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}

            
            // onGood={this.onOptionGood}
            // onNeutral={this.onOptionNeutral}
            // onBad={this.onOptionBad}
          
            />
            </Section>

             <Section title="Statistics">

            {countTotalFeedback > 0
              
              ? <Statistics
              
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
              
              : <Notification message="There is no feedback" /> }
    
          </Section>

          <GlobalStyle />
        
        </Layout>
      )
    };
};
