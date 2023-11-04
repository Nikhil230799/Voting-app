import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [credentials, setcredentials] = useState({ username: '', password: '', email: '', phoneno: '' })
  const [creds, setcreds] = useState({ username: '', password: '' })
  
  const navigate = useNavigate();
  const registerUser = async() => {
    const response = await fetch(`http://localhost:9090/voter/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'

      },
      // body: JSON.stringify ({username: credentials.username,password: credentials.password})
      body: JSON.stringify({ userName: credentials.username, password: credentials.password , emailID: credentials.email, phoneNo: credentials.phoneno  }),
    });  
    console.log(response);
    if (response!== null)
    {
      localStorage.setItem("data", credentials.username)
      navigate("/")
    }
    alert("user registered successfully")
    


  }

  onchange = (e) => {   
    setcredentials({...credentials, [e.target.name]:e.target.value})  
    setcreds({...creds, [e.target.name]:e.target.value})  
      
}
  

  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">username</label>
        <input type="username" className="form-control" id="username" name="username" value={credentials.username} onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">password</label>
        <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={onchange} rows="3"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">email</label>
        <input type="email" className="form-control" id="email" name="email" value={credentials.email}  onChange={onchange} rows="3"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">phone number</label>
        <input type="phoneno" className="form-control" id="phoneno" name="phoneno" value={credentials.phoneno}  onChange={onchange} rows="3"></input>
      </div>

      <button type="button" className="btn btn-success" onClick={registerUser} >register</button>
    </div>
  )
}

export default Register