import React from 'react';
import { reduxForm, Field } from 'redux-form';

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = errors.name || {};
    errors.name.required = true;
  }

  if (values.name && values.name.length > 10) {
    errors.name = errors.name || {};
    errors.name.tooLong = true;
  }

  return errors;
}

function renderField(props) {
  console.log(props);
  const {input, label, meta: {error, touched}} = props;
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {error && touched && (
        <div>
          {error.required && <span>This field is required</span>}
          {error.tooLong && <span>This field is too long</span>}
        </div>
      )}
    </div>
  );
}

function UsersAddFormComponent(props) {
  console.log(props);
  return (
    <form className="UsersAdd">
      <h2>Add a new user</h2>
      <Field name="name" component={renderField} label="Name" />
      <Field name="phone" component={renderField} label="Phone" />
      <Field name="email" component={renderField} label="Email" />
    </form>
  );
}

const UsersAddForm = reduxForm({
  form: 'usersAdd',
  destroyOnUnmount: false,
  validate
})(UsersAddFormComponent);

export function UsersAdd() {
  return <UsersAddForm />
}

