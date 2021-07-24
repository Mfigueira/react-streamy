import { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    // Initialize Google API JS Library to have OAuth (referenced first on index.html!)
    window.gapi.load('client:auth2', () => {
      // This callback executes after the GAPI lib loads.
      // Init out client with the clientId from the https://console.cloud.google.com/ project
      window.gapi.client
        .init({
          clientId:
            '235688351228-r8p2aunmuqkf4pq76k396aoa1t7vvtj3.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          // After init client, get instance of authenticated user (it may be signed in already or not)
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return this.props.isSignedIn === null ? null : this.props.isSignedIn ? (
      <button
        className="ui red google button"
        onClick={this.handleSignOutClick}
      >
        <i className="google icon"></i>
        Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={this.handleSignInClick}>
        <i className="google icon"></i>
        Sign In with Google
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
