import { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleDeleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  handleModalDismiss() {
    history.push('/');
  }

  renderModalActions() {
    return (
      <>
        <button
          className="ui negative button"
          onClick={this.handleDeleteStream}
        >
          Delete
        </button>
        <button className="ui button" onClick={this.handleModalDismiss}>
          Cancel
        </button>
      </>
    );
  }

  renderModalTitle() {
    return `Are you sure you want to delete the stream${
      this.props.stream?.title ? ` "${this.props.stream.title}"` : ''
    }?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        textContent={this.renderModalTitle()}
        actions={this.renderModalActions()}
        onDismiss={this.handleModalDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
