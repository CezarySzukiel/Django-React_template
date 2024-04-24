import React, { useState } from 'react';
import axios from 'axios';

import { Error, Info } from "../helpersComponents/Messages" 
import { refreshToken } from '../../helpers'


export function PasswordChange(props) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword1.length < 8) {
    	setSuccess(null)
      	setError('The new password is too short');
      	return;
    } else if (newPassword1 !== newPassword2) {
    	setSuccess(null)
      	setError("The new passwords don't match");
      	return;
    } else {

	    try {
	      const response = await axios.post(
	        'http://0.0.0.0:8000/api/v1/auth/password/change/',
	        {
	          new_password1: newPassword1,
	          new_password2: newPassword2,
	          old_password: oldPassword
	        },
	        {
	          headers: {
	            Authorization: `Bearer ${props.accessToken}`
	          }
	        }
	      );
	      setError(null);
	      setSuccess('Your password has been successfully changed!');
	    } catch (error) {
	    	if (error.response.status == 401) {
	                try {
	                    const newTokens = await refreshToken(props.refreshToken)
	                    props.setAccessToken(newTokens.access);
	                    props.setRefreshToken(newTokens.refresh);
	                } catch (error) {
	                    console.error('error:', error.response.status, error.response.statusText);
	                }
	            } else {
	                console.error('error:', error.response.status, error.response.statusText);
	            }
	      console.error(error)
	      setSuccess(null)
	      setError('An error occurred while changing your password');
    }}
  };

  return (
    <div>
      <h1>Change the password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current password:</label>
          <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </div>
        <div>
          <label>New password:</label>
          <input type="password" value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} />
        </div>
        <div>
          <label>Repeat new password:</label>
          <input type="password" value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} />
        </div>
        <button type="submit">Change The password</button>
      </form>
      {error && <Error message={error} />}
      {success && <Info message={success} />}
    </div>
  );
}
