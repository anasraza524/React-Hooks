import axios from 'axios';
import { useState,useEffect } from 'react';

export const  INITIAL_STATE = {
    name:"",
    fatherName:"",
    email:"",
    age:"",

}
export const  PRODUCT_STATE = {
    productName:"",
    price:"",
    ProductDec:"",
    productDetail:"",
    productSpec:""
    
}


export  const formReducer = (state,action)=> {
switch(action.type){
    case "CHANGE_INPUT":
        return{
            ...state,
            [action.payload.name]: action.payload.value,
        
    };
  case "ADD_PRODUCT":
    return{
        ...state,
        [action.playload.name]:action.playload.value
    }

    default:
        return state;
}


}
export  const AddProductReducer = (state,action)=> {
    switch(action.type){
    
      case "ADD_PRODUCT":
        return{
            ...state,
            [action.playload.name]:action.playload.value
        }
    
        default:
            return state;
    }
    
    
    }



 export   const useFetch = (url) => {
const [data, setData] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
    try{
        let response= axios.get(url)
        setData(response)
     }
     catch (error) {
         console.log(error.response); // this is the main part. Use the response property from the error object
         setError(error)
         
       }

  
}, [url])


return [data,error]

      }