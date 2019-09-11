import React from 'react';
import PropTypes from 'prop-types';
import _clone from 'lodash/cloneDeep';
import Question from '../Question/Question'

class Questionaire extends React.Component {
  constructor(props) {
    super(props);
    
    const questions = _clone(props.questions);
    const currentQn = questions[0];
    currentQn.shown = true;

    this.state = {
      questions,
      current: currentQn.id
    }
  }

  setCurrentQuestion = (id, type) => {
    const { questions } = this.state;
    questions.filter(qn => qn.id === id).map(qn => ({...qn, shown: true}));

    const nextQn = questions.find(qn => !qn.shown);
    const nextQnId = nextQn ? nextQn.id : null;

    this.setState({
      questions,
      current: nextQnId
    })

    alert(`${id} ${type} was clicked`);
  }

  render() {
    const { data } = this.props;
    const { current } = this.state;
    return <div className="questionaire">
      {data.filter(q => q.id === current).map((q) => {
        const { images, id } = q
        const { originals, distractors, main } = images;
        const original = originals[0];
        const distractor = distractors[0];
        return (
          <Question 
            key={id} 
            id={id}
            main={main} 
            original={original}
            distractor={distractor}
            onCompleted={this.setCurrentQuestion} />
        )
      })}
    </div>
  }
}

Questionaire.propTypes = {
  data: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired
};

export default Questionaire;
