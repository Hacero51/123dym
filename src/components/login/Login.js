import React, { useEffect, useState, useRef} from 'react';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import logo from "../../imagen/logo.jpg";

const baseUrl="http://localhost:3001/user";							


function Login(){

 return(
		<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100 p-t-190 p-b-30">
						<form className="login100-form validate-form">
							<div className="login100-form-avatar">
								<img  src={logo} alt="AVATAR"></img>	
							</div>
							<br />
							<form className="row">
								<div className="wrap-input100 validate-input m-b-10">
									<input className="input100" type="text" name="usuario" label="Usuario"/>
									<span className="symbol-input100">
										<PersonIcon/>
									</span>
								</div>
								
								<div className="wrap-input100 validate-input m-b-10">
									<input className="input100" type="password" name="password" label="Contraseña"/>
									<span className="symbol-input100">
										<LockIcon/>
									</span>
								
								</div>
								<div className="container-login100-form-btn p-t-10">
									<button className="login100-form-btn" type="submit">
										Ingresar
									</button>
								</div>
							</form>
						</form>
					</div>
				</div>
		</div>
 )
 
 }
 
export default Login;			
