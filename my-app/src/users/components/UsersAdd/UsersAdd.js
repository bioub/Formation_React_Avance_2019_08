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
  const {input} = props;
  return (
    <div>
      <input {...input} />
    </div>
  );
}

function UsersAddFormComponent(props) {
  console.log(props);
  return (
    <form className="UsersAdd">
      <h2>Add a new user</h2>
      <Field name="name" component={renderField} />
      <Field name="phone" component={renderField} />
      <Field name="email" component={renderField} />
    </form>
  );
}

const UsersAddForm = reduxForm({
  form: 'usersAdd',
  validate
})(UsersAddFormComponent);

export function UsersAdd() {
  return <UsersAddForm />
}

