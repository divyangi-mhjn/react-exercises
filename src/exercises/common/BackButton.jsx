import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () =>{
    const navigate = useNavigate();
    
    return(
    <button style={{ backgroundColor: '#4CAF50', padding: 10, color: 'white', border: 'none', borderRadius: 3 }} onClick={() => {
        navigate('/')
      }}> Back </button>
      )
}

export default BackButton;