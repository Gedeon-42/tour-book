import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const stateContext = createContext({
    user: null,
    access_token: null,
    setUser: () => {},
    setToken: () => {},
});
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [access_token, _setToken] = useState(localStorage.getItem("token"));
    
    const [allusers,setAllUsers]=useState([])
    const {data:tours}= useQuery({
        queryKey: ["tours"],
        queryFn:async ()=>{
           const res = await axios.get(' https://events-planner.onrender.com/api/v1/Tours/ ')
            return res.data.data
        }
    })
      
    
    const setToken = (access_token) => {
        _setToken(access_token);
        if (access_token) {
            localStorage.setItem('token', access_token); // Store the token in local storage
            
        } else {
            localStorage.removeItem("token");
        }
    };
    useEffect(()=>{
        getUsers()
        //fetchTours()
    },[])
    // get all users
    const getUsers = () => {
    
        axios
            .get('https://events-planner.onrender.com/api/v1/auth/View-all-users',{
              headers:{
         Authorization:`Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(({ data }) => {

                setAllUsers(data.data);
                
            })
            .catch(() => {
              
            });
    };
   // fetch tours
    // const fetchTours = ()=>{
    //     axios.get(' https://events-planner.onrender.com/api/v1/Tours/ ')
    //     .then(({data})=>{
    //         setTours(data.data)
    //     })

    // }


    return (
        <stateContext.Provider
            value={{
                user,
                setUser,
                access_token,
                setToken,
                tours,
                allusers,
                setAllUsers

              
            }}
        >
            {children}
        </stateContext.Provider>
    );
};
export const useStateContext = () => useContext(stateContext);