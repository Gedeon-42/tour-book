import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useJwt } from "react-jwt";

const stateContext = createContext({
    user: '',
    access_token: null,
    setUser: () => {},
    setToken: () => {},
});
const initialState = {
  message:false,
  notification:false,

}
export const ContextProvider = ({ children }) => {
    let url = 'https://events-planner.onrender.com'
    const [user, setUser] = useState({
        _id:''
    });
    const [access_token, _setToken] = useState(localStorage.getItem("token"));
    
    const [allusers,setAllUsers]=useState([])
    const [allcontacts,setContacts]=useState([])
    const [notification, _setNotification] = useState('');
    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }
    // fetching tours 
    const {data:tours}= useQuery({
        queryKey: ["tours"],
        queryFn:async ()=>{
           const res = await axios.get(' https://events-planner.onrender.com/api/v1/Tours/ ')
            return res.data.data
        }
    }) 
    //fetching booking
    const {data:books}= useQuery({
        queryKey: ["books"],
        queryFn:async ()=>{
           const res = await axios.get(' https://events-planner.onrender.com/api/v1/booking/ ',
           {
            headers:{
       Authorization:`Bearer ${localStorage.getItem('token')}`
            }
          }
           )
            return res.data.data
        }
    })

    // fetching contacts

   




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

        if (data.data.role ==="admin") {
            window.location.href = "/admin";
            
        }

        else{
            window.location.href = "/";

        }
        
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

const ContactMutation = useMutation({
    mutationFn:async(data)=>{
        const res = await axios.post('https://holiday-api-zj3a.onrender.com/api/v1/cont/contact',data)
        return res.data
    },
    onError:(error)=>{
        console.log(error.response.data.message)
        //alert(error)
    },onSuccess:(data)=>{
        //alert('message sent')
        console.log(data)
        //window.location.reload()
    }
})
  

const  {decodedToken ,isExpired} =  useJwt(localStorage.getItem("token"))

//console.log(decodedToken?._id);
const {data:loggedUser} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {

        if (decodedToken) {
            const res = await axios.get(
                url +
                  `/api/v1/auth/User/${
                   decodedToken?._id
                  }`,
                {
                  headers: {
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                  },
                }
              );
              return res.data.data;
        }
   
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  //console.log(loggedUser);



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
        getContacts()
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
      const getContacts= () => {
    
        axios
            .get('https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all',{
              headers:{
         Authorization:`Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(({ data }) => {
            //alert('success')
  console.log(data)
                setContacts(data);
                
            })
            .catch((error) => {
              //alert(error)
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
                books,
                loginMutation,
                signupMutation,
                ContactMutation,
                allcontacts,
                setContacts,
                access_token,
                setToken,
                loggedUser,
                tours,
                allusers,
                setAllUsers,
                modal,
                setModal,
                openModal,
                notification,
                setNotification

              
            }}
        >
            {children}
        </stateContext.Provider>
    );
};
export const useStateContext = () => useContext(stateContext);