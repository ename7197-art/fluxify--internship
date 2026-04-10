import RegistrationForm from './components/RegistrationForm.jsx';
import DynamicProfileForm from './components/DynamicProfileForm.jsx';
function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Task 1: Registration Form</h1>
        <RegistrationForm />
        
        <div style={{ borderTop: '2px solid #d1d5db', margin: '40px 0' }}></div>
        
        <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Task 2: Dynamic Profile with Live Preview</h1>
        <DynamicProfileForm />
      </div>
    </div>
  );
}

export default App;