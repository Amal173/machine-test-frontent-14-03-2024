import React, { useEffect, useRef } from 'react'
import './Questions.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions, registerUser, submitAnswer } from '../../Redux/Slice/Slice'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
function Questions() {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { questions } = useSelector((state) => state.question)
    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])
    console.log(questions, "question");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async(data) => {
       await dispatch(registerUser({email:localStorage.getItem('email'),username:localStorage.getItem('username')}))
       await dispatch(submitAnswer(data))
        navigate('/success' ,{state:{data:data}})

    };
    return (
        <>
            {questions?.map((question, index) => (
                <div className='question'>
                    <form id="questionForm" onSubmit={handleSubmit(onSubmit)} key={index}>
                        <h2>{question.no}</h2>
                        <h4>
                            {question.question}
                        </h4>
                        <p>Please select your answer:</p>
                        {question?.options?.map((option) => (
                            <div class="options">
                                <label
                                >
                                    <input
                                        type="radio"
                                        name={`answer${index}`}
                                        value={option}
                                        {...register(`answer${index}`)} />
                                    {option}
                                </label>
                            </div>
                        ))}
                        <div class="buttons">
                            <button type="button" id="prevBtn" onclick="goToPreviousQuestion()">
                                Previous
                            </button>
                            <button type="submit" id="nextBtn" disabled>Next</button>
                        </div>
                    </form>
                </div>
            ))}
            <button type="submit" id="nextBtn" onClick={handleSubmit(onSubmit)} className='submit-button'>submit</button>
        </>
    )
}

export default Questions