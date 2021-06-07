import InputField from '../InputField/InputField';
import DropdDown from '../DropDown/DropDown';
import Password from '../Password/Password';
import { Formik } from 'formik';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='left-side'>
        <div className='signup-header'>
          <h1>Let's set up your account</h1>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
        </div>

        <Formik>
          {(formik) => {
            return (
              <div className='form-container'>
                <form id='form' onSubmit={formik.handleSubmit}>
                  <InputField />
                  <DropdDown />
                  <Password />
                  <div className='form-button'>
                    <button type='submit'>Next</button>
                  </div>
                </form>
              </div>
            );
          }}
        </Formik>

        <div className='terms'>
          <small>
            By clicking the "Next" button, you agree to creating a free account,
            and to <span>Terms of Service</span> and <span>Privacy Policy</span>
          </small>
        </div>
      </div>

      <div className='right-side'>
        <div className='right-side-text'>
          <h2>Dummy Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            fugiat dolor quisquam, consequatur facere dicta repellendus dolore
            nisi ut impedit voluptates inventore nulla, nostrum corrupti quam
            natus autem consectetur ipsam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
