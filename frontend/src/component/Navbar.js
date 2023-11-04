import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [first, setfirst] = useState([])
    useEffect(() => {
        setfirst(localStorage.getItem('data'))

    }, [])

    const navigate = useNavigate();
    const navigate2 = useNavigate()
    const navigate3 = useNavigate()
    const signout = () => {
        localStorage.removeItem('data');
        navigate('/login')
    }
    const register = () => {

        navigate2('/register')
    }
    const adminlogin = () => {
        console.log(window.location.href)
        navigate2('/adminlogin')
    }
    const login = () => {


        navigate3('/login')
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                        </ul>
                        <div>
                            {localStorage.getItem('data') !== null ? (
                                <div>
                                    {/* <button type="button" className="btn btn-success mx-2" >login</button> */}
                                    <button type="button" className="btn btn-success mx-2" onClick={signout} >log out</button>
                                </div>
                            ) : (
                                <div>
                                    {window.location.pathname === "/login" ?
                                        (
                                            <div>
                                                <button type="button" className="btn btn-success mx-2" onClick={register}>voter register</button>
                                                <button type="button" className="btn btn-success mx-2" onClick={adminlogin}>admin login</button>
                                            </div>
                                        ) :

                                        (window.location.pathname === "/register" ?

                                            (
                                                <div>
                                                    <button type="button" className="btn btn-success mx-2" onClick={login}>voter login</button>
                                                    <button type="button" className="btn btn-success mx-2" onClick={adminlogin}>admin login</button>
                                                </div>
                                            ) :
                                            (
                                                <div>
                                                    <button type="button" className="btn btn-success mx-2" onClick={login}>voter login</button>
                                                    <button type="button" className="btn btn-success mx-2" onClick={register}>voter register </button>
                                                </div>
                                            )
                                        )

                                    }

                                    {/* <button type="button" className="btn btn-success mx-2" onClick={register}>register</button>
                                        <button type="button" className="btn btn-success mx-2" onClick={adminlogin}>admin login</button> */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav></div>
    )
}

export default Navbar