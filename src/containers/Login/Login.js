import * as React from "react";
import FormLogin from '../../components/FormLogin/FormLogin';
import Logo from '../../assets/loginLogo.png';
import './login.sass'

export default function Login(){
  return(
    <>
    <div className="login">
      <div className="wrapper__pentagram-logo">
        <img className="login__logo" src={Logo}/>
        <div className="wrapper_right-box">
          <FormLogin/>
          <div className="registration_box">
            <p>Don't have an account?</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}