import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Error, Info } from "../helpersComponents/Messages"  


export function PasswordReset(props) {
	const { uid, token } = useParams();
	const [newPassword1, setNewPassword1] = useState('');
  	const [newPassword2, setNewPassword2] = useState('');
  	const [error, setError] = useState(null);
  	const [success, setSuccess] = useState(null);

  	const handleSubmit = async (e) => {
    	e.preventDefault();

	    if (newPassword1 !== newPassword2) {
	      setError('The passwords are not the same');
	      return;
	    }

		try {
	      	const response = await axios.post('http://0.0.0.0:8000/api/v1/auth/password/reset/confirm/', {
	        	token: token,
	        	uid: uid,
	        	new_password1: newPassword1,
	        	new_password2: newPassword2
	      	});
	      	setError(null);
	      	setSuccess("Password changed successfully");
	    } catch (error) {
	    		console.error(error)
	    		setSuccess(null)
	      	setError('An error occurred while changing your password');
	    }
	 };    

	return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New password:</label>
          <input type="password" value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} />
        </div>
        <div>
          <label>Repeat new password:</label>
          <input type="password" value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} />
        </div>
        <button type="submit">confirm</button>
      </form>
      {error && <Error message={error} />}
      {success && <Info message={success} />}
    </div>
  );
}
