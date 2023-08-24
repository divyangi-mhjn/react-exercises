export const passwordReducer = (state,action) =>{
  switch(action.type){
    case 'RANGE_CHANGE':
        return {
            ...state,
            length:action.payload
        }
    case 'ADD_CHECKBOX':
      return{
       ...state,
       checkedBox:[...state.checkedBox,action.payload]
      }
    case 'REMOVE_CHECKBOX':
      return{
       ...state,
       checkedBox: state.checkedBox.filter(e => e !== action.payload)
      }
    case 'ADD_PASSWORD':
      return{
        ...state,
        password: action.payload
      }
    default:
        return state;
  }
}