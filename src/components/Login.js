import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = (props) => {

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", form)
       .then(res => {
         console.log("submitted login form: ", res);
         localStorage.setItem("token", res.data.payload);
         props.history.push('/protected');
       })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    axios.post("http://localhost:5000/api/login", form)
       .then(res => {
         console.log("submitted login form: ", res);
         localStorage.setItem("token", res.data.payload);
         props.history.push('/protected');
       })
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  },[]);
  
  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <div>
        <form onSubmit={submitForm}>
          <label for="username">Username</label>
          <input type='text' id="username" name="username" value={form.username} onChange={handleChange}/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.