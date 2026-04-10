import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const roles = ['', 'Student', 'Teacher', 'Admin', 'Developer', 'Designer'];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.role) newErrors.role = 'Please select a role';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '', role: '' });
      setSuccessMessage('Account created successfully!');
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrors(newErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px' }}>Register Account</h2>
      {successMessage && <div style={{ padding: '10px', background: '#d4edda', color: '#155724', marginBottom: '15px', borderRadius: '4px' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }} />
          {errors.fullName && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.fullName}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }} />
          {errors.email && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }} />
          {errors.password && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.password}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Confirm Password *</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }} />
          {errors.confirmPassword && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.confirmPassword}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Role *</label>
          <select name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }}>
            {roles.map(role => <option key={role || 'empty'} value={role}>{role || 'Select a role'}</option>)}
          </select>
          {errors.role && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.role}</p>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Create Account</button>
      </form>
    </div>
  );
};

export default RegistrationForm;