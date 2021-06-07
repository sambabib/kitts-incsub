import { useState } from 'react';
import './Password.scss';
import visibility from '../Images/password-visibility.svg';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='password'>
      <div className='password-container'>
        <label htmlFor='password'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            className='password-field'
          />
          <span className='placeholder'>Password</span>
        </label>
        <img
          onClick={togglePasswordVisibility}
          src={visibility}
          alt='password visibility'
        />
      </div>
      <small>Minimum 8 characters</small>
    </div>
  );
};

export default Password;
