import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PetMatchForm extends Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input { ...input } placeholder={label} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        const email = value =>
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

        return (
            <div className="formsize">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
               <Field name="Name"
                      component={this.renderInput}
                      label="Enter Name: " /> 
               <Field name="Email"
                      component={this.renderInput}
                      label="Enter Email: " 
                      validate={email} />
               <Field name="Password"
                      type="password"
                      component={this.renderInput}
                      label="Enter Password1: " />  
                <div className="btn"><button className="ui positive basic button">Sign Up</button>  </div>
            </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.Name) {
        errors.Name = 'You must enter a name';
    }

    if (!formValues.Email) {
        errors.Email = 'You must enter a correct email';
    }

    if (!formValues.Password) {
        errors.Password = 'You must enter a password';
    }

    return errors;
}

export default reduxForm({
    form: 'petMatchForm',
    validate
})(PetMatchForm);