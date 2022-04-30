import React from 'react';
import {useState} from "react";

function SignupForm(props) {
    const [userState, setUserState] = useState({name:"",email:"",password:""});
    const changeHandler = (e) => {
      setUserState({...userState,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log('submit');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>Name:</label>
                    <input type="text" name="name" onChange={changeHandler} value={userState.name} />
                </div>
                <div className="formControl">
                    <label>Email:</label>
                    <input type="text" name="email" onChange={changeHandler} value={userState.emial} />
                </div>
                <div className="formControl">
                    <label>Password:</label>
                    <input type="text" name="password" onChange={changeHandler} value={userState.password} />
                </div>
                <button>submit</button>
            </form>
        </div>
    );
}

export default SignupForm;