import React from 'react'
import { useFetch } from './UseReduceer'

const ApiData = () => {
    const [data,error] = useFetch("https://jsonplaceholder.typicode.com/todos")
 const submit = () => { 
    
console.log("data",data)
console.log(error,"error")


}
   
 
 
 return (
    
    <div>
   <button onClick={submit}>add</button>     
    </div>
  )
}

export default ApiData