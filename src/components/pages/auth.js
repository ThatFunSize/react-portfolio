import React, { Component } from "react"; 
import loginImg from "../../../static/assets/images/auth/login.jpeg";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
               <div className="left-column"
               style={{
                   backgroundImage: "url(../../../static/assets/images/auth/login.jpeg)"
               }}
               
               />

               <div className="right-column">
                   <h1>Login Component Goes here</h1>
               </div>
            </div> 
        );
    }
}
