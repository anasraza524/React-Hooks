
import React, { useReducer, useRef, useState } from "react";
import { FormField,TextInput } from 'grommet';
import { TextField } from '@mui/material';
import { PRODUCT_STATE,AddProductReducer } from './UseReduceer'
const AddProduct = () => {

const [state, dispatch] = useReducer(AddProductReducer, PRODUCT_STATE)
    
const handleChange = (e) => { 
dispatch({
    type:"ADD_PRODUCT",
    playload:{name:e.target.name,
        value:e.target.value}
})


 }


 const submit = (e) => { 
    e.preventDefault();
    console.log(state)

  }
return (
    
    
    <div>


<form onSubmit={submit} >
        <TextField
        name='productName'
        onChange={handleChange}
         id="standard-basic" label="Name" variant="standard" /><br />

        <TextField
        name='price'
        type="number"
        onChange={handleChange}
        id="standard-basic" label="fatherName" variant="standard" /><br />

        <TextField
        name='ProducdDec'
        onChange={handleChange}
        id="standard-basic" label="email" variant="standard" /><br />

        <TextField
        name='productDetail'
        onChange={handleChange}
         id="standard-basic" label="age" variant="standard" /><br />
        <TextField
        name='productSpec'
        onChange={handleChange}
        id="standard-basic" label="tag" variant="standard" /><br />
        
        <button type="submit">get</button>
        </form>
    </div>
  )
}

export default AddProduct