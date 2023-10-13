 import * as React from 'react';
 import { Formik } from 'formik';
 import { Link } from "react-router-dom";
 import './formLogin.sass'

export default function FormLogin(){
  return(
    <div className='wrapper__formik'>
     <h1>Pentagram</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required email';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.password){
            errors.password = 'Required password';
         } else if(
          !/^[A-Z]{1,}[a-z]{4,}\d/i.test(values.password)
         ){
          errors.password = 'Invalid password';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form id="login" onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <span className="error_span-login">{errors.email && touched.email && errors.email}</span>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <span className="error_span-login">{errors.password && touched.password && errors.password}</span>
           <button type="submit" disabled={isSubmitting}>
             Come to hell
           </button>
         </form>
       )}
     </Formik>
     <div className='choice_autorization'>
        <div className="left_row"></div>
        <p>Or</p>
        <div className="right_row"></div>
     </div>
     <div className='method_choice'>
      <Link className='login_with-facebook' to={'https://uk-ua.facebook.com/'} >Login with Facebook</Link>
      <Link>Forgot password?</Link>
     </div>
   </div>
  )
}