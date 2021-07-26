import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    const hasError = meta.touched && !!meta.error;
    return (
      <div className={`field ${hasError ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {hasError && (
          <div className="ui error message">
            <div className="header">{meta.error}</div>
          </div>
        )}
      </div>
    );
  }

  handleSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Must enter a Title!';
  }

  if (!formValues.description) {
    errors.description = 'Must enter a Description!';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
