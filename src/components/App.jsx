import { useState } from "react"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";





export const App = () =>  {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onLeaveFeedback = (btn) => {

  if ( btn === 'good') {setGood(prevState => (prevState + 1))};

  if ( btn === 'neutral') {setNeutral(prevState => (prevState + 1))};
  
  if ( btn === 'bad') {setBad(prevState => (prevState + 1))};

  };

 
    const countTotalFeedback =  good + neutral + bad
    const countPositiveFeedbackPercentage = Math.round(good / (good + neutral + bad) * 100)
  

  return (
        

    <Layout>
        
      <Section title="Please leave feedback">
            
        <FeedbackOptions
              
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}

            
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
              
          : <Notification message="There is no feedback" />}
    
      </Section>

      <GlobalStyle />
        
    </Layout>
  );
};

