import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        {!this.props.stream ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>{this.props.stream.title}</h1>
            <h5>{this.props.stream.description}</h5>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
