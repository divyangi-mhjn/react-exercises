import React, { useReducer } from "react";
import {passwordReducer} from "./passwordReducer";
import BackButton from "../common/BackButton";

const GeneratorHome = () => {
  const maxLength = 12;
  const [state,dispatch] = useReducer(passwordReducer,{
    checkedBox:[],
    length:3,
    password:''
  })

  const addCharacters = (value) =>{
    switch(value){
      case 'capital':
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      case 'lower' :
        return 'abcdefghijklmnopqrstuvwxyz'
      case 'numbers' :
        return '0123456789'
      case 'symbol' :
        return '!@#$%^&*()'
      default:
          return ''
    }
  }

  const handleOnClick = (e) => {
    if(state.checkedBox.length <= 0)
    alert('Please select any one checkbox')
    const maxLength=state.length;
    const toChooseFrom = state.checkedBox.map(e=> addCharacters(e)).toString();
    let randomPwd = '';
    for(let i = 0; i<maxLength ; i++){
      randomPwd += toChooseFrom.charAt(Math.floor(Math.random()* toChooseFrom.length))
    }
    dispatch({type:'ADD_PASSWORD',payload:randomPwd})
  }

  const onCheckBoxClick = (e) =>{
    return dispatch({type:e.target.checked ?  'ADD_CHECKBOX': 'REMOVE_CHECKBOX', payload: e.target.id})
  }

  return (
    <div style={{ margin: 20 }}>
      <BackButton />

      <div>
        <h4 style={{ textAlign: 'center' }}>Random Password Generator</h4>
        
        <div style={{ display: 'flex', justifyContent: 'center', margin: 50, padding: 20, border: '1px solid grey' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <span>Select the length of password</span>
              <input type='range'  min="3" value={state.length} max={maxLength} list="markers" onChange={(e) => {dispatch({type:'RANGE_CHANGE',payload:e.target.value})}}/>{state.length}
              <datalist id="markers">
                { [...Array(maxLength)].map((e,i) =><option key={e} value={i}></option>)}          
              </datalist>
            </div>

            <div style={{ padding: 20, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '0px 0px 0px 40px' }}>
              <div style={{ width: '50%' }}><input type='checkbox' id="capital" onClick={onCheckBoxClick} /><span>Should include Capital Letters</span></div>
              <div style={{ width: '50%' }}><input type='checkbox' id="lower" onClick={onCheckBoxClick} /><span>Should include lowercase letters</span></div>
              <div style={{ width: '50%' }}><input type='checkbox' id="number" onClick={onCheckBoxClick} /><span>Should include numericals</span> </div>
              <div style={{ width: '50%' }}><input type='checkbox' id="symbol" onClick={onCheckBoxClick} /><span>Should include symbols </span></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <button style={{ backgroundColor: '#4CAF50', padding: 10, color: 'white', border: 'none', borderRadius: 3 }} onClick={handleOnClick}>Generate Password</button>
            </div>
          </div>

        </div>
   {state.password.length > 0 ? <div style={{textAlign: 'center'}}><h4> The password is: </h4> <span style={{border:'1px solid green',padding:4,width:'40%'}}>{state.password}</span></div> : <></>}
      </div>
    </div>
  )
}

export default GeneratorHome;