import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.buttonList}>
            {options.map((option, index) => (
                <button type="button" className={css.button} key={index} name={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </ul>
    );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;