import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchQuestions = createAsyncThunk(
    "questions/fetchQuestions",
    async () => {
      const response = await axios.get(`http://localhost:9090/question`);
      return response.data;
    }
  )
export const registerUser = createAsyncThunk(
    "register/registerUser",
    async ({email,username}) => {
      const response = await axios.post(`http://localhost:9090/register`,{email,username});
      return response.data;
    }
  )
export const submitAnswer = createAsyncThunk(
    "submit/submitAnswer",
    async (data) => {
        console.log(data);
      const response = await axios.post(`http://localhost:9090/score`,data);
      return response.data;
    }
  )
export const getScore = createAsyncThunk(
    "score/getScore",
    async (id) => {
      const response = await axios.post(`http://localhost:9090/score/${id}`,);
      return response.data;
    }
  )


const initialState = {
    questions: [],
    scrore:[]
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.fulfilled, (state,{payload}) => {
        state.questions =payload.question;
      })

  },
})


// export const { increment, decrement, incrementByAmount } = questionSlice.actions

export default questionSlice.reducer