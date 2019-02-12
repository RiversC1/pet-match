import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FileField from '../FileField';

class PetForm extends Component {
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
        return (
            <div className="formsize">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="Name"
                    component={this.renderInput}
                    label="Enter Name: " />
                <Field name="Genre"
                    component={this.renderInput}
                    label="Enter Sex: " />
                <Field name="Birthday"
                    type="date"
                    component={this.renderInput}
                    label="Enter Birthday: " />
                <Field name="Type"
                    component={this.renderInput}
                    label="Enter Type: " />
                <Field name="About"
                    component={this.renderInput}
                    label="About: " />
                <Field name="Photo"
                    component={FileField} />
                <div className="btn"><button className="ui positive basic button">Add a pet</button></div>
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
    form: 'petForm',
    validate
})(PetForm);