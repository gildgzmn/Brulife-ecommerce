import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Register = () => {
  const [data, setData] = useState({
    first_name: "",
    middle_initial: "",
    last_name: "",
    username: "",
    email: "",
    contact_number: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState({});
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/newregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setProcessing(false);

      if (response.ok) {
        setMessage(responseData.message);
        navigate('/login'); // Redirect to login or another page after successful registration
      } else {
        setMessage(responseData.message);
        setError(responseData.errors || {});
      }
    } catch (error) {
      setProcessing(false);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3.5rem', fontWeight: 'bold' }}>Register</h1>
      <form onSubmit={submit} style={{ width: '700px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
        
        {/* First row */}
        <div style={{ gridColumn: 'span 2' }}>
          <label>
            First Name*
            <Input type="text" required value={data.first_name} onChange={(e) => handleInputChange('first_name', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <label>
            Middle Initial
            <Input type="text" value={data.middle_initial} onChange={(e) => handleInputChange('middle_initial', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Last Name*
            <Input type="text" required value={data.last_name} onChange={(e) => handleInputChange('last_name', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        
        {/* Second row */}
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Username*
            <Input type="text" required value={data.username} onChange={(e) => handleInputChange('username', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Email Address*
            <Input type="email" required value={data.email} onChange={(e) => handleInputChange('email', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        
        {/* Third row */}
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Password*
            <Input type="password" required value={data.password} onChange={(e) => handleInputChange('password', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Contact Number*
            <Input type="text" required value={data.contact_number} onChange={(e) => handleInputChange('contact_number', e.target.value)} style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>

        {/* Fourth row */}
        <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ width: '50%' }}>
            Confirm Password*
            <Input type="password" required value={data.password_confirmation} onChange={(e) => handleInputChange('password_confirmation', e.target.value)} style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>

        {/* Submit button */}
        <Button type="submit" style={{ gridColumn: 'span 6', justifySelf: 'center', padding: '10px 20px', backgroundColor: '#000', color: '#fff', width: '40%', borderRadius: '5px' }} disabled={processing}>
          Confirm
        </Button>

        {/* Google Sign-in button */}
        <div style={{ gridColumn: 'span 6', textAlign: 'center', marginTop: '20px' }}>
          <p>or continue with</p>
          <Button style={{ width: '35%', margin: '10px', padding: '8px 16px', backgroundColor: '#fff', color: '#000', border: '1px solid #ddd', borderRadius: '5px' }}>
            <img src="src/assets/google.png" alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
            Continue with Google
          </Button>
        </div>
        
        {/* Terms of Service */}
        <div style={{ gridColumn: 'span 6', textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#aaa' }}>
          <p>By clicking continue, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
        </div>
      </form>
      {message && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}
    </div>
  );
};

export default Register;
