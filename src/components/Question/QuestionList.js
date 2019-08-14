import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question'

class QuestionList extends React.Component {
  render() {
    const { questions } = this.props
    return <div>
      {questions.map(question =>
        <Question key={question.content} content={question.content} />
      )}
    </div>
  }
}

QuestionList.propTypes = {
  questions: PropTypes.array
};

export default QuestionList;
