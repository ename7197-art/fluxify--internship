# Week 2 Day 4: React Forms and Validation

## Controlled Inputs
In this project, I used **Controlled Components** to manage form data. This means the form values are handled by React state (`useState`). Each time a user types, the `onChange` event updates the state, and the input's `value` is kept in sync with that state.

## Form Validation
Validation is handled during the `onSubmit` event:
- **Required Fields**: Checks if inputs are empty.
- **Email Format**: Uses a Regular Expression (Regex) to verify a valid email structure.
- **Password Length**: Ensures the password is at least 8 characters long.
- **Match Check**: Compares `password` and `confirmPassword` states.
- **Error Messages**: If validation fails, error messages are stored in an `errors` object and displayed conditionally below each field.

## Live Preview
The profile card uses the same `onChange` mechanism to update a separate `profile` state, allowing the UI to re-render and show changes immediately as the user types.