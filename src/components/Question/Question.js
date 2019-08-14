import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    return <div>
      <div>{this.props.content}</div>
      <div><input type="text" max-length="256" /></div>
    </div>;
  }
}

Question.propTypes = {
  content: PropTypes.string
};

export default Question;
