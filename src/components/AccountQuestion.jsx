import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const AccountQuestion = ({question, buttonText, to}) => {
  return (
    <article className="flex items-center lg:gap-3">
      <p>{question}</p>
      <Link to={to} className="lg:bg-[#28a7d3] text-[#28a7d3] lg:text-white py-1 px-3 rounded-lg">
        {buttonText}
      </Link>
    </article>
  );
};


AccountQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default AccountQuestion;
