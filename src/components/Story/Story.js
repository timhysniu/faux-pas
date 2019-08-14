import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from '../../components/Question/QuestionList'

class Story extends React.Component {
  render() {
    const { questions } = this.props
    return <div className="story">
      <h1>Story: {this.props.id}</h1>
      <p>{this.props.description}</p>
      <div>
        <div>Questions:</div>
        <div>
          <QuestionList questions={questions} />
        </div>
      </div>
    </div>;
  }
}

Story.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  questions: PropTypes.array
};

export default Story;
