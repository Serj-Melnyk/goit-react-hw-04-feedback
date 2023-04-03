
import { ButtonOptions, Button } from "./FeedbackOptionsStyled"
import PropTypes from "prop-types"

export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    
    return (

        <ButtonOptions> 
            {options.map(btn=> {
                return (<Button onClick={() => { onLeaveFeedback(btn) }}
                    key={btn}>
                    {btn}</Button>) 
                    
            })}

            
            {/* <Button onClick={onGood}>Good</Button>  
            <Button onClick={onNeutral}>Neutral</Button>
            <Button onClick={onBad}>Bad</Button> */}
        
            </ButtonOptions > 
  
       
    );   
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.string
      
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
