import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.buttonList}>
            {options.map((option) => (
                <button type="button" className={css.button} key={option} name={option} onClick={onLeaveFeedback}>
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