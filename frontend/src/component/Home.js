import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {


    const [candidates, setcandidates] = useState([])
    const [status, setstatus] = useState()
    const [Vstatus, setVstatus] = useState('false')
    const [currenstatus, setcurrenstatus] = useState(true)
    const navigate = useNavigate();
    const changeStatus = async () => {
        const value= localStorage.getItem('data')
        const url = `http://localhost:9090/voter/voted`
        const response = await fetch(url, {
            method: 'POST',
            // mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
          
            body: JSON.stringify({ cid: status, vUserName:  value })
            
        })
        setcurrenstatus(false)
        console.log(currenstatus)
        console.log(Vstatus)
        alert("you have voted")
        
    }

    const changeState = (e) => {
        setstatus(e.target.value)
        // console.log(e.target.value)
    }


    useEffect(() => {
        const url = "http://localhost:9090/candidates/Getcandidates";
        if (localStorage.getItem('data') === null)
            navigate("/login")
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setcandidates(json)
                // console.log(response)
                // console.log(json)
            } catch (error) {
                console.log("error", error);
            }
            
        };
        const getStatus = async () => {
        
                const response = await fetch(`http://localhost:9090/voter/getstatus/${localStorage.getItem('data')}`);
                const json = await response.json();
                // setVstatus(json.Vstatus);
                // console.log(json)
                setVstatus(json);
                // console.log(Vstatus)

                
                
           
        };
        fetchData();
        getStatus();
        // eslint-disable-next-line
    }, []);




    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">select here</th>

                    </tr>
                </thead>
                <tbody>
                    {candidates.map((o) => {
                        return (
                            <tr key={o.cid}>
                                {/* <td>${o.cid}</td> */}
                                <td>{o.cid}</td>
                                <td>{o.cName}</td>
                                <td><input  type="radio" id={o.cid} name="selection" value={o.cid} onClick={(o) => changeState(o)} /></td>
                            </tr>)
                    })}



                </tbody>
            </table>
            <button type="button" className={`btn btn-success success ${!Vstatus &&currenstatus ?  "":"disabled"} `} onClick={changeStatus}>confirm vote</button>
            
            {currenstatus && !Vstatus? <h2></h2>: <h1>You have voted</h1>}
        </div>
    )
}

export default Home