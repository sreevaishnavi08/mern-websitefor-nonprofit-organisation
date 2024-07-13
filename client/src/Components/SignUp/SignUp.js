// src/Components/SignUp.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function onSignupFormSubmit(newUser) {
        try {
            const endpoint = newUser.userType === 'student' ? 'students' : 'instructors';
            const res = await axios.post(`http://localhost:4000/${endpoint}`, newUser);
            if (res.data.message === 'user created') {
                navigate('/login');
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            alert('An error occurred. Please try again later...');
        }
    }

    return (
        <div style={{ marginTop: '60px' }}>
            <div className='bg-white w-25 mx-auto p-3 rounded-4 shadow-lg'>
                <h1 className='text-center text-primary mb-4'>SignUp</h1>
                <form onSubmit={handleSubmit(onSignupFormSubmit)}>
                    <input type="text" {...register("firstname", { required: true })} id='firstname' className='form-control mb-4 shadow-sm' placeholder='First Name' />
                    {errors.firstname?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>First Name is required</p>}
                    <input type="text" {...register("lastname", { required: true })} id='lastname' className='form-control mb-4 shadow-sm' placeholder='Last Name' />
                    {errors.lastname?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Last Name is required</p>}
                    <input type="text" {...register("email", { required: true })} id='email' className='form-control mb-4 shadow-sm' placeholder='Email' />
                    {errors.email?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Email is required</p>}
                    <input type="password" {...register("password", { required: true, minLength: 6 })} id='password' className='form-control mb-4 shadow-sm' placeholder='Password' />
                    {errors.password?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>Password minimum Length is 6</p>}
                    <select {...register("userType", { required: true })} className='form-control mb-4 shadow-sm'>
                        <option value="">Select User Type</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    {errors.userType?.type === 'required' && <p style={{ marginTop: '-20px' }} className='text-danger text-center'>User Type is required</p>}
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success'>Signup</button>
                    </div>
                </form>
                <p className='text-black text-center mt-3'>Already SignedUp! <Link to='/login'>LogIn</Link> </p>
            </div>
        </div>
    );
}

export default SignUp;
