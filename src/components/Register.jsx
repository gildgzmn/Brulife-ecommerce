import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Register = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3.5rem', fontWeight: 'bold' }}>Register</h1>
      <form style={{ width: '700px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
        
        {/* First row */}
        <div style={{ gridColumn: 'span 2' }}>
          <label>
            First Name*
            <Input type="text" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <label>
            Middle Initial
            <Input type="text" style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Last Name*
            <Input type="text" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        
        {/* Second row */}
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Username*
            <Input type="text" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Email Address*
            <Input type="email" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        
        {/* Third row */}
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Password*
            <Input type="password" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <label>
            Contact Number*
            <Input type="text" required style={{ marginBottom: '10px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>

        {/* Fourth row */}
        <div style={{ gridColumn: 'span 6' }}>
          <label>
            Confirm Password*
            <Input type="password" required style={{ marginBottom: '20px', width: '100%', backgroundColor: '#f3f4f6' }} />
          </label>
        </div>

        {/* Submit button */}
        <Button type="submit" style={{ gridColumn: 'span 6', justifySelf: 'center', padding: '10px 20px', backgroundColor: '#000', color: '#fff', width: '40%', borderRadius: '5px' }}>
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
    </div>
  );
};

export default Register;
