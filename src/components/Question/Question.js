import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCover: true };

    setTimeout(() => {
      this.setState({ showCover: false })
    }, 2000)
  }

  renderCover() {
    const { main } = this.props;
    const { showCover } = this.state;
    return showCover && (
      <div>
        <p>Please take a look at this person.</p>
        <img className="img-cover" src={main} alt="" />
      </div>
    )
  }

  renderOptions() {
    const { id, original, distractor, onCompleted } = this.props;
    const { showCover } = this.state;
    return !showCover && (
      <div>
        <p>Select the correct face you saw moment ago.</p>
        <button className="btn-option" onClick={(e) => { 
          onCompleted(id, 'original');
        }}>
          <img className="img-option" src={original} alt="" />
        </button>
        <button className="btn-option" onClick={(e) => {
            onCompleted(id, 'distractor');
        }}>
          <img className="img-option" src={distractor} alt="" />
        </button>
      </div>
    )
  }

  render() {
    return <div>
      {this.renderCover()}
      {this.renderOptions()}
    </div>;
  }
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  distractor: PropTypes.string.isRequired,
  onCompleted: PropTypes.func.isRequired
};

export default Question;
