import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    errors: {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
  });

  const validateForm = (fieldName, value) => {
    let errors = { ...formState.errors };
    let fieldErrors = '';

    switch (fieldName) {
      case 'name':
        fieldErrors = value.length < 1 ? 'Name is required' : '';
        break;
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        fieldErrors = emailRegex.test(value) ? '' : 'Email is invalid';
        break;
      case 'address':
        fieldErrors = value.length < 1 ? 'Address is required' : '';
        break;
      case 'city':
        fieldErrors = value.length < 1 ? 'City is required' : '';
        break;
      case 'state':
        fieldErrors = value.length < 1 ? 'State is required' : '';
        break;
      case 'zipCode':
        const zipCodeRegex = /^\d{5}(-\d{4})?$/;
        fieldErrors = zipCodeRegex.test(value) ? '' : 'Zip code is invalid';
        break;
      case 'cardNumber':
        const cardNumberRegex = /^\d{16}$/;
        fieldErrors = cardNumberRegex.test(value) ? '' : 'Card number is invalid';
        break;
      case 'expirationDate':
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        fieldErrors = expirationDateRegex.test(value) ? '' : 'Expiration date is invalid';
        break;
      case 'cvv':
        const cvvRegex = /^\d{3}$/;
        fieldErrors = cvvRegex.test(value) ? '' : 'CVV is invalid';
        break;
      default:
        break;
    }

    errors[fieldName] = fieldErrors;
    setFormState({ ...formState, errors });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Form validation logic before submitting
    console.log('Form Submitted', formState);
    // Ideally, here you would also connect to a backend to process the form data
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    validateForm(name, value);
  };

  return (
    <div>
      <h1>Checkout Form</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Each form field setup */}
        {Object.keys(formState).map((key) => {
          if (key !== 'errors') {
            return (
              <div key={key}>
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formState[key]}
                  onChange={handleChange}
                />
                {formState.errors[key] && <p style={{color: 'red'}}>{formState.errors[key]}</p>}
              </div>
            );
          }
          return null;
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
