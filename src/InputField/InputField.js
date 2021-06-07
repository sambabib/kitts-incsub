import { Formik } from 'formik';
import * as Yup from 'yup';
import './InputField.scss';

const InputField = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Please enter valid name'),
        email: Yup.string().email('Please enter a valid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => {
        return (
          <div className='inputfield'>
            <div className='inputfield-form'>
              <label htmlFor='your name'>
                <input
                  type='text'
                  name='name'
                  className={`${formik.touched.name && formik.errors.name ? 'textfield' : 'null'}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='errors'>{formik.errors.name}</div>
                ) : null}
                <span className='placehloder'>Your name</span>
              </label>
              {console.log(formik.values)}
            </div>

            <div className='inputfield-form'>
              <label htmlFor='email address'>
                <input
                  type='text'
                  name='email'
                  className='textfield'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='errors'>{formik.errors.email}</div>
                ) : null}
                <span className='placeholder'>Email address</span>
              </label>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default InputField;
