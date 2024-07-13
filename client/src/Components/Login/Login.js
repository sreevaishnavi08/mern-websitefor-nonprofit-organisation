import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CounterContext } from '../CounterContext';
import axios from 'axios';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useContext(CounterContext);
    const navigate = useNavigate();

    async function onSigninFormSubmit(userData) {
        try {
            const { email, userType } = userData;
            const endpoint = userType === 'student' ? 'students-login' : 'instructors-login';
            const res = await axios.post(`http://localhost:4000/${endpoint}`, userData);
            if (res.data.message === 'login success') {
                const token = res.data.token;
                localStorage.setItem('token', token);
                setUser(res.data.user);
                navigate(`/${userType}dashboard`); // Navigate to appropriate dashboard
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            console.error('Login Error:', error);
            setErrorMessage('An error occurred. Please try again');
        }
    }

    return (
        <div style={{ paddingTop: '60px' }}>
            <div className='bg-white w-25 mx-auto p-3 rounded-4 shadow-lg'>
                <h1 className='text-center text-primary mb-4'>LogIn</h1>
                <form onSubmit={handleSubmit(onSigninFormSubmit)}>
                    <input type="text" {...register('email', { required: true })} id='email' className='form-control mb-4 shadow-sm' placeholder='Email' />
                    {errors.email?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Email is required</p>}
                    <input type="password" {...register('password', { required: true })} id='password' className='form-control mb-4 shadow-sm' placeholder='Password' />
                    {errors.password?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Password is required</p>}
                    <select {...register("userType", { required: true })} className='form-control mb-4 shadow-sm'>
                        <option value="">Select User Type</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    {errors.userType?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>User Type is required</p>}
                    {errorMessage && <p className='text-danger text-center mt-2'>{errorMessage}</p>}
                    <div className='text-center'>
                        <button className='btn btn-success'>Login</button>
                    </div>
                </form>
                <p className='text-black text-center mt-3'>New User! <Link to='/signup'>SignUp</Link> </p>
            </div>
        </div>
    );
}

export default Login;
