# Day 4: React Forms with Controlled Inputs & Validation

## Overview
This project contains two React form components demonstrating controlled inputs, form validation, and live preview functionality.

## Files
- `RegistrationForm.jsx` - Registration form with validation
- `DynamicProfileForm.jsx` - Live profile preview form

## Task 1: Registration Form

### Controlled Inputs Explained
Controlled inputs in React are form elements whose value is controlled by React state rather than the DOM. Here's how it works:

1. **State Management**: Each input field has a corresponding state value stored in the `formData` object:
```javascript
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: ''
});