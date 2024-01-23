// PasswordResetPage.js
import React, { useEffect, useState } from 'react';
import customFetch from '../../../utilits/axios';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [resetSuccessful, setResetSuccessful] = useState(false);
  const { token } = useParams();
  useEffect(() => {
    setResetToken(token);
  }, [token])

  const handleForgotPassword = async () => {
    // Send a request to the server to initiate the password reset
    try {
      const response = await customFetch.post('/user/forgot-password', {
        email: email, // Assuming email is a variable in your scope
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Assuming a 200 status code indicates success
        setEmailSent(true);
        console.log(response)
        Swal.fire({
            title: response.data.success,
            text:response.data.message,
            icon: "success"
          });
      } else {
        // Handle error
        console.error('Password reset email request failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleResetPassword = async () => {
    // Send a request to the server to reset the password
    try {
      const response = await customFetch.post(`/user/reset-password/${resetToken}`, {
        newPassword: newPassword,
        // confirmPassword: confirmPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Assuming a 200 status code indicates success
        setResetSuccessful(true);
      } else {
        // Handle error
        console.error('Password reset failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
  <div className='flex items-center justify-center mt-[30px]'>
      <div className='w-full p-20 flex flex-col items-stretch bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-[32px] dark:bg-gray-800 dark:border-gray-700'>
      {!emailSent && !resetToken && !resetSuccessful && (
        <form class="space-y-4 md:space-y-6" onSubmit={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}>
            <h3 className='text-center text-xl font-bold text-gray-900  dark:text-white py-3'>Forget Password</h3>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button class="w-full text-white bg-login_button hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Reset Password</button>
        </form>
      )}
      {emailSent && !resetToken && !resetSuccessful && (
        <h1>Message Send Successfully</h1>
      )}

      { resetToken && (
        <form class="space-y-4 md:space-y-6"  onSubmit={(e) => {
          e.preventDefault();
          handleResetPassword();
        }}>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password:</label>
          <input  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password:</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button class="w-full text-white bg-login_button hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Reset Password</button>
        </form>
      )}

      {resetSuccessful && <p>Password reset successful! You can now log in with your new password.</p>}
    </div>
  </div>
  );
};

export default PasswordResetPage;
