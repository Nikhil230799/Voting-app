import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Voterdetails = () => {

    const navigate = useNavigate();
    const [candidates, setcandidates] = useState([])


    useEffect(() => {
        const url = "http://localhost:9090/candidates/Getcandidates";
        if (localStorage.getItem('data') === null)
            navigate("/adminlogin")
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setcandidates(json)
            } catch (error) {
                console.log("error", error);
            }
            
        };
  

        fetchData();
    
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
                        <th scope="col">no of votes</th>
    
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((o) => {
                        return (
                            <tr key={o.cid}>
                                {/* <td>${o.cid}</td> */}
                                <td>{o.cid}</td>
                                <td>{o.cName}</td>
                                <td>{o.votes}</td>
                            </tr>)
                    })}



                </tbody>
            </table>
    </div>
  )
}

export default Voterdetails