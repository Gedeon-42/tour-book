import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
const stateContext = createContext({
    user: 'eric omondi',
    access_token: null,
    setUser: () => {},
    setToken: () => {},
});
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name:"john"
    });
    const [access_token, _setToken] = useState(localStorage.getItem("token"));
    
    const [allusers,setAllUsers]=useState([])
    const {data:tours}= useQuery({
        queryKey: ["tours"],
        queryFn:async ()=>{
           const res = await axios.get(' https://events-planner.onrender.com/api/v1/Tours/ ')
            return res.data.data
        }
    }) 
const loginMutation = useMutation({
    mutationFn: async (data) => {
        //const res = await axios.post(url + "auth/login", data);
       const res= await axios.post('https://events-planner.onrender.com/api/v1/auth/login', data)
        return res.data;
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
      onSuccess: (data) => {
        console.log(data);
        setUser(data.user)
        setToken(data.access_token)
        window.location.href = "/admin";
        
      },
})
const signupMutation = useMutation({
    mutationFn:async(data)=>{
        const res =  await axios.post('https://events-planner.onrender.com/api/v1/auth/signup', data)
        return res.data
    },
    onError:(error)=>{
        console.log(error.response.data.message);
    },
    onSuccess:(data)=>{
        console.log(data)
        window.location.href = '/login'
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
 
    //open modal in context provider
    const[modal,setModal]=useState(false)
    function openModal(){
  setModal((prevModal)=>!prevModal)
    }

    return (
        <stateContext.Provider
            value={{
                user,
                setUser,
                loginMutation,
                signupMutation,
                access_token,
                setToken,
                tours,
                allusers,
                setAllUsers,
                modal,
                setModal,
                openModal

              
            }}
        >
            {children}
        </stateContext.Provider>
    );
};
export const useStateContext = () => useContext(stateContext);