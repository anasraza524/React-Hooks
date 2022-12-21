
import React, { useReducer, useRef, useState } from "react";
import { FormField,TextInput } from 'grommet';
import { TextField } from '@mui/material';
import {formReducer ,INITIAL_STATE } from './UseReduceer';
import { NextPlan } from "@mui/icons-material";


const FormReduce = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
 
    const handleChange = (e) => {
        dispatch({
          type: "CHANGE_INPUT",
          payload: { name: e.target.name, value: e.target.value },
        });
      };
 console.log(state)
      const submit = (e)=>{
        e.preventDefault();

        console.log(state)
      }
 
    return (
    <div>
        <form onSubmit={submit} >
        <TextField
        name='name'
        onChange={handleChange}
         id="standard-basic" label="Name" variant="standard" /><br />

        <TextField
        name='fatherName'
        onChange={handleChange}
        id="standard-basic" label="fatherName" variant="standard" /><br />

        <TextField
        name='email'
        onChange={handleChange}
        id="standard-basic" label="email" variant="standard" /><br />

        <TextField
        name='age'
        onChange={handleChange}
         type="number" id="standard-basic" label="age" variant="standard" /><br />
        <button type="submit">get</button>
        </form>
    </div>
  )
}

export default FormReduce