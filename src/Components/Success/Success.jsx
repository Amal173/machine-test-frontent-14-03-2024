import React, { useEffect } from 'react'
import './Success.css'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../../Redux/Slice/Slice'
function Success() {
    const location = useLocation()
    const data = location.state.data
    const dispatch = useDispatch()
    const { questions } = useSelector((state) => state.question)
    console.log(data);
    console.log(questions);
    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])
    return (
        <div class="success-message">
            <h2>Congratulations, you've completed the exam!</h2>
            <p>Your score: <span id="score">29</span></p>
            <p style={{ "color": "green" }}>Correct answers: <span id="score">6</span></p>
            <p style={{ "color": "red" }}>Wrong answers: <span id="score">1</span></p>
            <p>You have successfully passed the exam.</p>
            <a href="/">Take Exam Again</a>
        </div>
    )
}

export default Success