import { List } from "./StstisticStyled";
import PropTypes from "prop-types"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
 
    <div>
           
            
                <List>
                    <li>
                        <span>Good: </span>{good}</li>
                    <li>
                         <span>Neutral: </span>{neutral}</li>
                    <li>
                          <span>Bad: </span>{bad}</li>
                    <li>
                         <span>Total: </span>{total}</li>
                    <li> 
                         <span>Positive feedback: </span>{positivePercentage} %</li>
                        
                </List>
   </div>

    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}