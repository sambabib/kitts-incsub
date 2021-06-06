import './InputField.scss';

const InputField = () => {
  return (
    <div className='inputfield'>
      <div className='inputfield-form'>
        <label htmlFor='your name'>
          <input
            type='text'
            name='your name'
            className='textfield'
          />
          <span className='placehloder'>Your name</span>
        </label>
      </div>

      <div className='inputfield-form'>
        <label htmlFor='email address'>
          <input type='text' name='email address' className='textfield' />
          <span className='placeholder'>Email address</span>
        </label>
      </div>
    </div>
  );
};

export default InputField;
