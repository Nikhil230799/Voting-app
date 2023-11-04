import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [credentials, setcredentials] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        // console.log(credentials.username, credentials.password)     
    }

    const checkUser = async () => {



        const response = await fetch(`http://localhost:9090/voter/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'

            },
            // body: JSON.stringify ({username: credentials.username,password: credentials.password})
            body: JSON.stringify({ username: credentials.username, password: credentials.password }),

        });
        const data = await response.json();
        console.log(data)
        if (data !== null) {
            // console.log(response)
            localStorage.setItem("data", credentials.username)
            navigate("/")
        }
        else {
            alert("please enter your correct credentials")
        }


    }



    return (


        <div className='container' >
            <h2> voter login</h2>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">username</label>
                <input type="username" className="form-control" id="username" name="username" value={credentials.username}
                    onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange} rows="3"></input>
            </div>

            <button type="button" className="btn btn-success" onClick={checkUser} >login</button>
        </div>
    )
}

export default Login