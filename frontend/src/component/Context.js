import {  createContext, /* useState */ } from "react";





const Context = (props) => {
    const UserContext = createContext()
    
    // const [candidates, setcandidates] = useState({})
    const URL ="https://localhost:9090"
    const getcandidates = async () =>{
        const response = await fetch(`https://localhost:9090/candidates/Getcandidates`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
              
            },

          });
          // const data =await response.json();
        //   setcandidates(data.candidates)
        console.log(response)
   
    }
  return (
    <UserContext.Provider value={{getcandidates}}>
  {props.childre}
    </UserContext.Provider>
  )
}

export default Context

