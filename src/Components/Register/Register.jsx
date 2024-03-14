import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem("username", data.username)
        localStorage.setItem("email", data.email)
        navigate('/questions')
    };
    return (
        <div className='registration'>
            <form id="registrationForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Exam Registration</h2>
                <label for="name">Name:</label>
                <input type="text" id="username" name="username" required  {...register("username", {
                    required: true
                })} />
                {errors.username && errors.username.type === "required" && (
                    <p className="errorMsg">username is required.</p>
                )}
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid."
                })} />
                {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                )}
                <button type="submit">Start Exam</button>
            </form>
        </div>
    )
}

export default Register