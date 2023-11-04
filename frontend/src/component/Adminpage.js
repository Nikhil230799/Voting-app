import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminpage = () => {

    const [credentials, setcredentials] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    const checkUser = async () => {
        if (localStorage.getItem('data') === null)
            navigate("/login")


        const response = await fetch(`http://localhost:9090/admin/admin_dtls`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'

            },
            // body: JSON.stringify ({username: credentials.username,password: credentials.password})
            body: JSON.stringify({ username: credentials.username, password: credentials.password }),

        });
        //   const data =await response.json();
        // console.log(response)
        
        if (response !== null) {
            console.log(response)
            localStorage.setItem("data", credentials.username)
            navigate("/adminhome")
        }
        


    }


    onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        // console.log(credentials.username, credentials.password)     
    }

    return (
        <div className='container'>
            <h2>Admin login</h2>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">username</label>
                    <input type="username" className="form-control" id="username" name="username" value={credentials.username} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange} rows="3"></input>
                </div>

                <button type="button" className="btn btn-success" onClick={checkUser} >login</button>
            </div>
        </div>
    )
}

export default Adminpage