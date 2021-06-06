import './Password.scss';
import visibility from '../Images/password-visibility.svg';

const Password = () => {
  return (
    <div className='password'>
      <div className='password-container'>
        <label htmlFor='password'>
          <input type='password' name='password' className='password-field' />
          <span className='placeholder'>Password</span>
        </label>
        <img src={visibility} alt="password visibility" />
      </div>
      <small>Minimum 8 characters</small>
    </div>
  );
};

export default Password;
