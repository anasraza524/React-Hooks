export const  INITIAL_STATE = {
    name:"",
    fatherName:"",
    email:"",
    age:"",
}

export const formReducer = (state,action)=> {
switch(action.type){
    case "CHANGE_INPUT":
        return{
            ...state,
            [action.payload.name]: action.payload.value,
        
    }
    default:
        return state;
}


}
