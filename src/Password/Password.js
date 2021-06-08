import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Password.scss';
import visibility from '../Images/password-visibility.svg';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password is too short'),
      })}
    >
      {(formik) => {
        return (
          <div className='password'>
            <div className='password-container'>
              <label htmlFor='password'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  className={`${formik.touched.password && formik.errors.password ? 'textfield' : 'null'}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                 {formik.touched.password && formik.errors.password ? (
                  <div className='errors'>{formik.errors.password}</div>
                ) : null}
                <span className='placeholder'>Password</span>
              </label>
              <img
                onClick={togglePasswordVisibility}
                src={visibility}
                alt='password visibility'
              />
            </div>
            <small>Minimum 8 characters</small>
            {console.log(formik.values)}
          </div>
        );
      }}
    </Formik>
  );
};

export default Password;
